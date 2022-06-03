import React from "react";
import { DivHeader, Header, LogoImage } from "./styled";
import meta from "../img/meta.png"
import { Button } from "@mui/material";
import { goToHomePage, goToSignUp } from "../../Router/coordinator";
import { useNavigate } from "react-router-dom";


export default function Headers() {
  const navigate = useNavigate()
  return (
    <div>

      <Header>

        <LogoImage src={meta} />

        <DivHeader>

          <Button
            color="white"

            onClick={() => {
              goToHomePage(navigate)
            }}
          >Home
          </Button>

          <Button
            color="white"

            onClick={() => {
              goToSignUp(navigate)
            }}
          >Cadastro
          </Button>

        </DivHeader>



      </Header>
    </div>
  );
}
