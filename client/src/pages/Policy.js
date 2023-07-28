import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/Privacy-policy-1.webp"
            alt="contactus"
            style={{ width: "80%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            This Privacy Policy is effective as of January 01, 2023. This is our
            official Privacy Policy which forms part of your legal agreement
            with us. Please read our Privacy Policy carefully to be sure you
            understand how we collect and use information and under what
            circumstances we share information.
          </p>
          <p>Our objective is to make you:</p>
          <p>
            <ul>
              <li>Feel comfortable using our Websites;</li>
              <li> Feel secure in submitting your information to us;</li>
              <li>What Information do we Collect About You?</li>
              <li>
                We collect information from you when you sign up on the Website.
                When registering on the Website, you may be asked to enter your
                personal information (like your name, email, the location of
                residence, mobile number, etc).
              </li>
            </ul>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
