import { Helmet } from "react-helmet-async";
import { Doc } from "../../types/contentTypes";

export const Seo = ({ doc }: { doc?: Doc }) => {
  if (!doc) return <></>;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: doc.title,
    image: doc.content
      .filter((content) => content.type === "PICTURES")
      .map((pictureContent) => pictureContent.files[0].url),
    datePublished: doc.publishedAt,
    dateModified: doc.updatedAt,
    author: {
      "@type": "Person",
      name: `${doc.createdBy.firstName} ${doc.createdBy.lastName}`,
    },
    publisher: {
      "@type": "Organization",
      name: "TV2",
      logo: {
        "@type": "ImageObject",
        url: "https://www.tv2.no/direkte/assets/tv2-share.jpg",
      },
    },
    description: doc.content
      .filter((content) => content.type === "MARKUP")
      .map((markupContent) => new DOMParser().parseFromString(markupContent.data, "text/html").textContent)
      .join(" "),
  };
  return (
    <Helmet>
      <title>{doc.title}</title>
      <meta name="description" content={structuredData.description} />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
};
