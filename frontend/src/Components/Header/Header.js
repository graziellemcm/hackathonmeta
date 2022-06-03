import React from "react";
import { DivHeader, Header, LogoImage } from "./styled";
import meta from "../img/meta.png"
import { Button } from "@mui/material";
import { goToHomePage, goToSignUpTeam, goToLeaguerRegistration, goToCompilation } from "../../Router/coordinator";
import { useNavigate } from "react-router-dom";


export default function Headers() {
  
  const navigate = useNavigate()
  return (
    <div>

      <Header>

        <LogoImage src={meta} onClick={() => goToHomePage(navigate)} />

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
              goToLeaguerRegistration(navigate)
            }}
          >Cadastro do Leaguer
          </Button>
          <Button
            color="white"

            onClick={() => {
              goToSignUpTeam(navigate)
            }}
          >Cadastro da Turma
          </Button>
          <Button
            color="white"

            onClick={() => {
              goToCompilation(navigate)
            }}
          >Compilação
          </Button>

        </DivHeader>



      </Header>
    </div>
  );
}
