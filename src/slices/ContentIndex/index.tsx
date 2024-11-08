import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import ContentList from "./ContentList";
import { createClient } from "@/prismicio";

/**
 * Props for `ContentIndex`.
 */
export type ContentIndexProps = SliceComponentProps<Content.ContentIndexSlice>;

/**
 * Component for "ContentIndex" Slices.
 */
const ContentIndex = async ({ slice }: ContentIndexProps): Promise<JSX.Element> => {

  const client = createClient()
  const projects = await client.getAllByType('project')

  const items = projects

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading size='xl' className="mb-10">
        {slice.primary.heading}
      </Heading>

      <ContentList 
      items={items} 
      viewProjectText={slice.primary.view_project_text} 
      fallbackItemImage={slice.primary.fallback_item_image} 
      />

    </Bounded>
  );
};

export default ContentIndex;
