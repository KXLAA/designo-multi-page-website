import React from "react";
import styled from "styled-components";
import { Button } from "../common/Button";

export const HeroContainer = styled.section`
  z-index: 1;
  background-color: var(--color-primary);
  border-radius: 15px;
  padding-left: 95px;
  padding-right: 95px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin-bottom: 160px;
`;

export const Text = styled.div`
  padding-right: 65px;
  position: relative;
  color: var(--white);

  h1 {
    padding-bottom: 16px;
  }
`;

export const BgPattern = styled.div`
  position: absolute;
  left: 10px;
  height: 640px;
  width: 640px;
  border-radius: 100%;
  background: linear-gradient(
    90deg,
    rgba(93, 2, 2, 0.0001) 0%,
    rgba(93, 2, 2, 0.497569) 100%
  );
  mix-blend-mode: normal;
  opacity: 0.31;
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const Form = styled.form`
  padding-top: 55px;
  padding-bottom: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  border-style: hidden;
  border-bottom: solid 1px white;
  background: none;
  outline: none;
  color: #ffffff;
  width: 380px;
  max-width: 100%;
  padding-bottom: 16px;
  margin-bottom: 24px;

  &::placeholder {
    font-weight: 500;
    font-size: 15px;
    line-height: 26px;
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.5;
  }
`;

const TextArea = styled.textarea`
  border-style: hidden;
  border-bottom: solid 1px white;
  background: none;
  outline: none;
  width: 380px;
  max-width: 100%;
  resize: none;

  &::placeholder {
    font-weight: 500;
    font-size: 15px;
    line-height: 26px;
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.5;
  }
`;

const FormButton = styled(Button)`
  text-align: center;
  align-self: flex-end;
  width: 152px;
  margin-top: 24px;
`;

export default function ContactForm() {
  return (
    <>
      <HeroContainer>
        <BgPattern />
        <Text style={{ textAlign: "left" }}>
          <h1>Contact Us</h1>
          <p>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </Text>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="Email Address" />
          <Input placeholder="Phone" />
          <TextArea placeholder="Your Message" rows="3" />
          <FormButton>
            <p>SUBMIT</p>
          </FormButton>
        </Form>
      </HeroContainer>
    </>
  );
}
