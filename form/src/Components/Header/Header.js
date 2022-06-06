import React from "react";
import { Header, LogoImage } from "./styled";
import meta from "../img/meta.png";

export default function Headers() {
  return (
    <div>
      <Header>
        {" "}
        <LogoImage src={meta} />
      </Header>
    </div>
  );
}
