export const VeryDangerousComponent = ({ htmlString }: { htmlString: string }) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
};
