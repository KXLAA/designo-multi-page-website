import React from "react";
import styled from "styled-components";
import { Button } from "../common/Button";
import { useFormik } from "formik";
import { MdOutlineError } from "react-icons/md";
import { device } from "../common/MediaQueries";
import * as Yup from "yup";

export const HeroContainer = styled.section`
  z-index: 1;
  background-color: var(--color-primary);
  border-radius: 15px;
  padding: 54px 95px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin-bottom: 160px;

  @media ${device.tablet} {
    flex-direction: column;
    padding: 72px 64px;
  }

  @media ${device.mobile} {
    border-radius: 0px;
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const Text = styled.div`
  padding-right: 65px;
  position: relative;
  color: var(--white);

  @media ${device.tablet} {
    padding-right: 0px;
    padding-bottom: 24px;
  }

  @media ${device.mobile} {
    text-align: center;
  }

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const InputContainer = styled.div`
  margin-bottom: 24px;
  width: 100%;
`;

const Input = styled.input`
  border-style: hidden;
  border-bottom: solid 1px white;
  background: none;
  outline: none;
  color: #ffffff;
  width: 100%;
  padding-bottom: 16px;

  &::placeholder {
    font-weight: 500;
    font-size: 15px;
    line-height: 26px;
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.5;
  }

  &:focus {
    border-bottom: solid 3px white;
  }
`;

const TextArea = styled.textarea`
  border-style: hidden;
  color: #ffffff;
  border-bottom: solid 1px white;
  background: none;
  outline: none;
  width: 100%;
  resize: none;

  &::placeholder {
    font-weight: 500;
    font-size: 15px;
    line-height: 26px;
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.5;
  }

  &:focus {
    border-bottom: solid 3px white;
  }
`;

const FormButton = styled(Button)`
  text-align: center;
  align-self: flex-end;
  width: 152px;
  margin-top: 24px;

  @media ${device.mobile} {
    align-self: center;
  }
`;

const Error = styled.div`
  display: flex;
  color: #ffffff;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding-top: 0.5rem;

  i {
    font-size: 12px;
    line-height: 26px;
  }
`;

export default function ContactForm() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Can’t be empty"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phoneNumber: Yup.number().min(18).required("Can’t be empty"),
      message: Yup.string().required("Can’t be empty"),
    }),
    onSubmit: (values) => console.log(values),
  });

  return (
    <>
      <HeroContainer>
        <BgPattern />
        <Text>
          <h1>Contact Us</h1>
          <p>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </Text>
        <Form onSubmit={formik.handleSubmit}>
          <InputContainer>
            <Input
              placeholder="Full Name"
              id="fullName"
              name="fullName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.fullName}
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <Error>
                <i>{formik.errors.fullName}</i>
                <MdOutlineError />
              </Error>
            ) : null}
          </InputContainer>

          <InputContainer>
            <Input
              placeholder="Email Address"
              id="email"
              name="email"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <Error>
                <i>{formik.errors.email}</i>
                <MdOutlineError />
              </Error>
            ) : null}
          </InputContainer>

          <InputContainer>
            <Input
              placeholder="Phone"
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <Error>
                <i>{formik.errors.phoneNumber}</i>
                <MdOutlineError />
              </Error>
            ) : null}
          </InputContainer>
          <InputContainer>
            <TextArea
              placeholder="Your Message"
              rows="3"
              id="message"
              name="message"
              onChange={formik.handleChange}
              value={formik.values.message}
            />
            {formik.touched.message && formik.errors.message ? (
              <Error>
                <i>{formik.errors.message}</i>
                <MdOutlineError />
              </Error>
            ) : null}
          </InputContainer>

          <FormButton type="submit">
            <p>SUBMIT</p>
          </FormButton>
        </Form>
      </HeroContainer>
    </>
  );
}
