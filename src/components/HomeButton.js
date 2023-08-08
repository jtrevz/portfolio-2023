import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "react-bootstrap-icons";

export default function HomeButton() {
  return (
    <Row className="wait-show f-row d-flex justify-content-end align-items-center pt-2 pt-4 p-sm-4 mb-5 mb-sm-0">
      <Link className="text-end home-link" to="/">
        Home
        <span className="p-1 p-sm-2">
          <ArrowUpRight />
        </span>
      </Link>
    </Row>
  );
}
