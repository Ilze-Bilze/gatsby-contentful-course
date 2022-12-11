import React from "react";
import { Layout } from "components";
import { Wrapper, FormItem } from "./style";

const Contact = () => {
  return (
    <Layout>
      <Wrapper>
        <h1>Contact us</h1>
        <form action="https://formspree.io/f/xjvznlql" method="POST">
          <FormItem>
            <label>Your email</label>
            <input type="email" name="email" required />
          </FormItem>
          <FormItem>
            <label>Your message</label>
            <textarea name="message" required></textarea>
          </FormItem>
          <button type="submit">Send</button>
        </form>
      </Wrapper>
    </Layout>
  )
}

export default Contact;