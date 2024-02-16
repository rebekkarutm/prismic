'use client'

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { EmbedContainer, TextField } from "./styles";

/**
 * Props for `Embed`.
 */
export type EmbedProps = SliceComponentProps<Content.EmbedSlice>;

/**
 * Component for "Embed" Slices.
 */
const Embed = ({ slice }: EmbedProps): JSX.Element => {
  return (
    <EmbedContainer
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      $color = {slice.primary.background_color?.toString()}
    >
      <TextField
        $textcolor = {slice.primary.text_color?.toString()}
      >
        <PrismicRichText field={slice.primary.title} />
      </TextField>
      <div dangerouslySetInnerHTML={{ __html: slice.primary.embed.html }} />
    </EmbedContainer>
  );
};

export default Embed;