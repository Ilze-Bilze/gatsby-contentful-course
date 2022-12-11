import React from "react";
import { PriceGroupWrapper, PriceOption, PriceOptionInner, MostPopularLabel } from "./style";
import { RichText } from "components";

export const PriceGroup = ({priceOptions}) => {
  return (
    <PriceGroupWrapper>
      {priceOptions.map(priceOptions => (
        <PriceOption key={priceOptions.id}>
          <PriceOptionInner isPopular={priceOptions.isPopular}>
            {!!priceOptions.isPopular && (
              <MostPopularLabel>Most Popular!</MostPopularLabel>
            )}
            <h2>{priceOptions.title}</h2>
            <h3>&#163;{priceOptions.pricePerMonths} / month</h3>
            <RichText raw={priceOptions.description.raw} />
          </PriceOptionInner>
        </PriceOption>
      ))}
    </PriceGroupWrapper>
  )
} 