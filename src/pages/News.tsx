import { useEffect } from "react";
import "shadcn-ui-library-starter/dist/style.css";
import { Card, CardHeader, CardFooter, CardTitle, CardContent, badgeVariants } from "shadcn-ui-library-starter";
import { useFetchSlug } from "../../hooks/reactQuery/useFetchSlug";
import { cn, extractRelevantContentInfo, capitalizeFirstLetter } from "../utils/utils";
import Visibility from "../components/Visibility";
import { NavLink } from "react-router-dom";
import { VeryDangerousComponent } from "../components/VeryDangerousComponent";
import { useInView } from "react-hook-inview";
import { useResponsive } from "../../hooks/useResponsive";
import MobileWrapper from "../components/MobileNewsWrapper";
import DesktopWrapper from "../components/DesktopNewsWrapper";
import { Seo as SEO } from "../components/Seo";

const News = () => {
  const { slugData, fetchNextPage, hasNextPage } = useFetchSlug();
  const { isMobile } = useResponsive();

  const Wrapper = isMobile ? MobileWrapper : DesktopWrapper;
  const [ref, isVisible] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (isVisible && hasNextPage) {
      fetchNextPage();
    }
  }, [isVisible, hasNextPage, fetchNextPage]);

  return (
    <Wrapper>
      <SEO doc={slugData?.pages[0].docs[0]} />
      {slugData?.pages.map((page, pageIndex) => {
        return page.docs.map((doc, docIndex) => {
          const { markupData, pictureUrl, pictureData } = extractRelevantContentInfo(doc);
          return (
            <article
              className="pb-[300px] md:pb-0 snap-start"
              ref={pageIndex === slugData.pages.length - 1 && docIndex === page.docs.length - 1 ? ref : null}
              key={doc.id}
            >
              <Card>
                <Visibility visible={!!pictureUrl}>
                  <img
                    src={pictureUrl}
                    alt={`${pictureData?.caption}`}
                    loading="lazy"
                    className="rounded-md object-cover"
                  />
                  <CardContent className="text-left py-2">
                    <p className="text-sm dark:text-gray-400">{pictureData?.caption ?? ""}</p>
                  </CardContent>
                </Visibility>
                <CardHeader>
                  <CardTitle>{doc.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-left">
                  <VeryDangerousComponent htmlString={markupData} />
                </CardContent>
                <Visibility visible={!!doc.topics.length}>
                  <CardFooter className="flex-wrap">
                    {doc.topics.map((topic) => (
                      <NavLink to={`/arkiv/${topic}`} className={cn("m-1", badgeVariants())}>
                        {capitalizeFirstLetter(topic)}
                      </NavLink>
                    ))}
                  </CardFooter>
                </Visibility>
              </Card>
            </article>
          );
        });
      })}
    </Wrapper>
  );
};

export default News;
