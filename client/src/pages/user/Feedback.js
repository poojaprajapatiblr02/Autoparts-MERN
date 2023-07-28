import Layout from "../../components/Layout/Layout";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Feedback = () => {
  const [comment, setComment] = useState("");
  const [request, setRequest] = useState("");
  const navigate = useNavigate();

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/feedback`,
        { comment, request }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Feedback - AutoParts">
      <div className="form-container" style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSubmit}>
          <h4 className="title">GIVE FEEDBACK/ REQUEST FOR NEW COMPONENT</h4>
          <div className="mb-3">
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="form-control"
              id="exampleInputEmail"
              placeholder="Enter your experience about the site"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={request}
              onChange={(e) => setRequest(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Do you have request for any new component"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => {
              navigate("/");
              toast.success("Feedback submitted Successfully");
            }}
          >
            SUBMIT
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Feedback;
