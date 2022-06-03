import Header from "../../Components/Header/Header";
import { CardFilter, CardHome, CardLeaguer, FilterImg, H1Filter, HomeHeader, LeaguerCardHeader, MentorImg } from "./StyledCardHome"
import React, {  useContext, useMemo, useState } from "react";
import { TextField } from "@mui/material";
import filtro from "../../Components/img/filtro.png"
import { Star, TeamImg } from "../../Pages/LeaguerProfile/styled";
import Vector from "../../Components/img/Vector.png"
import Labs from "../../Components/img/Labs.png"
import Mentor from "../../Components/img/Mentor.png"
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../Global/GlobalContext";
import { goToLeaguerProfile } from "../../Router/coordinator";

export const Home = () => {
  const navigate = useNavigate();
  const data = useContext(GlobalContext)
  const [search, setSearch] = useState('')


  const filter = useMemo(() => {
    const lowerSearch = search.toLowerCase();
    return data.leaguersData.filter((listarLeaguers) => {
      if (!search) {
        return true
      }
      if (listarLeaguers.name.toLowerCase().includes(lowerSearch)) {
        return true
      }
      return false
    }
    );

  }, [search, data])

  const leaguerCardFiltered = filter.map((rendLeaguer) => {
    return(
    <LeaguerCardHeader key= {rendLeaguer.id} onClick={() => {

      goToLeaguerProfile(navigate, rendLeaguer.id);

    }}>

      <CardLeaguer> <TeamImg src={Vector}></TeamImg> {rendLeaguer.name}</CardLeaguer>
      <CardLeaguer> <Star src={Labs}></Star> {rendLeaguer.phase}</CardLeaguer>
      <CardLeaguer> <MentorImg src={Mentor}></MentorImg>{rendLeaguer.name_class}</CardLeaguer>
    </LeaguerCardHeader>
  )})



  const onChangeSearch = (event) => {
    setSearch(event.target.value)
  }


  return (

    <div>
      <Header />
      <HomeHeader>LISTA DE LEAGUERS</HomeHeader>
      <CardHome>
        <CardFilter>
          <H1Filter>  Filtro <FilterImg src={filtro} ></FilterImg> </H1Filter>
          <TextField
            type={'text'}
            onChange={onChangeSearch}
            value={search}
            margin={"none"}
            variant="filled"
            sx={{ width: 300, alignSelf: "center" }}
          ></TextField>
        </CardFilter>
        <ul>
          {leaguerCardFiltered}
        </ul>
      </CardHome>
    </div>

  )


} 