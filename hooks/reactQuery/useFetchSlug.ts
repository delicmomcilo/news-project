import { useParams } from "react-router-dom";
import { TV2Response } from "../../types/api";
import { TV2ContentResponse } from "../../types/contentTypes";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { DEFAULT_STALE_TIME, QUERY_KEYS, BASE_URL } from "../../constants/query";
import axios from "axios";

const { ALL_PORTALS, PORTAL } = QUERY_KEYS;

export const useFetchPortals = () =>
  useQuery([ALL_PORTALS], () => axios.get<TV2Response>(`${BASE_URL}/portals?page=1`).then((res) => res.data), {
    staleTime: DEFAULT_STALE_TIME,
  });

export const useFetchPortalById = (id?: string) =>
  useInfiniteQuery(
    [PORTAL, id],
    ({ pageParam = 1 }) =>
      axios
        .get<TV2ContentResponse>(`${BASE_URL}/posts?page=${pageParam}&limit=10&portalId=${id}`)
        .then((res) => res.data),
    {
      staleTime: DEFAULT_STALE_TIME,
      getNextPageParam: (lastPage) => (lastPage.nextPage ? lastPage.nextPage : false),
      enabled: !!id,
    }
  );

export const useFetchSlug = () => {
  const { slug } = useParams();

  const { data: integrations, isLoading: isIntegrationsLoading, isError: isIntegrationsError } = useFetchPortals();

  const findIntegrationBySlug = integrations?.docs.find((integration) => integration.slug === slug);

  const {
    data: slugData,
    isLoading: isSlugDataLoading,
    isError: isSlugDataError,
    fetchNextPage,
    hasNextPage,
  } = useFetchPortalById(findIntegrationBySlug?.id);

  return {
    slugData,
    isIntegrationsLoading,
    isIntegrationsError,
    isSlugDataLoading,
    isSlugDataError,
    fetchNextPage,
    hasNextPage,
  };
};
