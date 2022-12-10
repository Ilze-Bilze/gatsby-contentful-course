import React from "react";
import { HeroWrapper, HeadingWrapper, Heading, SubHeading } from "./style";
import { BgImage } from "gbimage-bridge";
import { getImage } from "gatsby-plugin-image";

export const Hero = ({heading, subheading, backgroundImage}) => {
  const pluginImage = getImage(backgroundImage);
  return (
    <HeroWrapper>
      <BgImage image={pluginImage}>
        <HeadingWrapper>
          <div>
            <Heading>{heading}</Heading>
            <SubHeading>....{subheading}....</SubHeading>
          </div>
        </HeadingWrapper>
      </BgImage>
    </HeroWrapper>
  )
} 