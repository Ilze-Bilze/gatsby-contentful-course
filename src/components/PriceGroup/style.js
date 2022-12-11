import styled from "styled-components";

export const PriceGroupWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 1000px;
  margin: 0 auto;
`

export const PriceOption = styled.div`
  padding : 20px;
`

export const PriceOptionInner = styled.div`
  margin: 0 auto;
  background-color: ${( {isPopular} ) => isPopular ? 'orange' : '#efefef'};
  border: 1px solid #999;
  padding: 10px 10px 30px 10px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
`

export const MostPopularLabel = styled.div`
  background-color: limegreen;
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  font-weight: bold;
  font-size: 14px;
  padding: 3px;
`