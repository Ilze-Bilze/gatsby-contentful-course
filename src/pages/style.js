import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  button {
    display: block;
    min-width: 150px;
    padding: 10px 20px;
    margin-top: 40px;
    margin-bottom: 100px;
  }
`

export const FormItem =styled.div`
  position: relative;
  margin: 20px 0;
  label {
    display: block;
    padding: 5px;
  }
  input, textarea {
    display: block;
    max-width: 300px;
    width: 100%;
    padding: 10px;
  }
  textarea {
    min-height: 100px;
  }
`