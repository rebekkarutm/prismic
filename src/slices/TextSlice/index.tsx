'use client'

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { TextContainer, TextField } from "./styles";
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `TextSlice`.
 */
export type TextSliceProps = SliceComponentProps<Content.TextSliceSlice>;

/**
 * Component for "TextSlice" Slices.
 */
const TextSlice = ({ slice }: TextSliceProps): JSX.Element => {
  return (
    <TextContainer
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        $color = {slice.primary.background_color?.toString()}
        $align = {slice.primary.text_align?.toString()}
      >
        <TextField
          $textcolor = {slice.primary.text_color?.toString()}
        >
          <PrismicRichText field={slice.primary.text_field} />
        </TextField>
        {slice.variation === 'textWithButton' && (
              <PrismicNextLink
                style={{background:'#16796F',
                        borderRadius: '16px',
                        height: '56px',
                        width: '160px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'}}
                field={slice.primary.button_link}
              >
                <>{slice.primary.button_label}</>
              </PrismicNextLink>
            )}
        {slice.variation === 'textButtonCenter' && (
              <PrismicNextLink
                style={{background:'#16796F',
                        borderRadius: '16px',
                        height: '56px',
                        width: '160px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'}}
                field={slice.primary.button_link}
              >
                <>{slice.primary.button_label}</>
              </PrismicNextLink>
            )}
    </TextContainer>
  );
};

export default TextSlice;
