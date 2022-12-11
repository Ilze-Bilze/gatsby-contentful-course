import styled from "styled-components";

export const Content = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
`

export const Post =styled.div`
  position: relative;
  margin: 0 0 20px 0;
  padding: 20px 0;
  border-bottom: 1px solid #efefef;
`

export const Pagination = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 50px auto;
  text-align: center;
`

export const PageNumber = styled.div`
  display: inline-flex;
  width: 40px;
  height: 40px;
  background-color: ${( {isActive} ) => isActive ? 'red' : 'black'};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 0 5px;
  a {
    display: block;
    width: 100%;
    height: auto;
    color: white;
  }
  &:hover,
  &:focus {
    background-color: red;
  }
`
