import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../component/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Heading margin={10}>Oops...</Heading>
      <Text margin={10}>
        {" "}
        {isRouteErrorResponse(error)
          ? "This page does not exist"
          : "An unexpected error occurred"}{" "}
      </Text>
    </>
  );
};

export default ErrorPage;
