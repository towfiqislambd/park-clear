import React from "react";

import ErrorImg from "../../assets/images/404.png";
import PrimaryButton from "../../components/common/PrimaryButton";
import Container from "../../components/container/Container";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();
  return (
    <section className="flex items-center justify-center h-screen">
      <Container>
        <div>
          <img className="h-[600px] w-[600px]" src={ErrorImg} alt="ErrorImg" />
          <div onClick={() => navigate(-1)}>
            <PrimaryButton
              text="Go Back"
              className="text-white bg-theme-sky-blue w-fit mx-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ErrorPage;
