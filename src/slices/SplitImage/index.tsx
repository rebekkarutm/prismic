'use client'

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Container, TextField } from "./styles";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * Props for `SplitImage`.
 */
export type SplitImageProps = SliceComponentProps<Content.SplitImageSlice>;

/**
 * Component for "SplitImage" Slices.
 */
const SplitImage = ({ slice }: SplitImageProps): JSX.Element => {
  return (
    <span>
    <Container
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
    $color = {slice.primary.background_color?.toString()}
    $direction = {slice.variation}
    >
      <PrismicNextImage style={{maxWidth:'400px', height: 'auto', borderRadius:'24px'}} field={slice.primary.image} />
      <TextField
        $textcolor = {slice.primary.text_color?.toString()}
      >
        <PrismicRichText field={slice.primary.text} />
        {slice.variation === 'imageWithButton' && (
            <PrismicNextLink
              style={{background:'#16796F',
                      borderRadius: '16px',
                      height: '56px',
                      width: '160px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#CADEDF'}}
              field={slice.primary.button_link}
            >
              <>{slice.primary.button_label}</>
            </PrismicNextLink>
          )}
        {slice.variation === 'imageRightButtonLeft' && (
          <PrismicNextLink
            style={{background:'#16796F',
                    borderRadius: '16px',
                    height: '56px',
                    width: '160px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#CADEDF'}}
            field={slice.primary.button_link}
          >
            <>{slice.primary.button_label}</>
          </PrismicNextLink>
        )}
      </TextField>
    </Container>
    </span>
  );
};

export default SplitImage;
