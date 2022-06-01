import React from "react";
import { useNavigate } from "react-router-dom";
import { CardHomepage } from "../../Components/Card/CardHomepage";
import { Filter } from "../../Components/Filter/Filter";
import Header from "../../Components/Header/Header";

import { HomeStyled } from "./styled";


export default function Home() {
 

  return (
    <div>
      <Header />
      <div>
       
        <CardHomepage/>
      
       
      </div>
    </div>
  );
}
