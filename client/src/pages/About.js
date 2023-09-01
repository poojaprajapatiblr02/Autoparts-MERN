import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - AutoParts"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            In today's fast-paced world, online shopping has become an integral
            part of our daily lives, and we aim to provide a convenient and
            user-friendly platform for purchasing all types of vehicle components.
          </p>
          <p>
            Our primary objective is to provide you with an efficient and
            convenient way to purchase vehicle components while ensuring that
            you get the best quality products at reasonable prices.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
