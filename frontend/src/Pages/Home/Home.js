import Header from "../../Components/Header/Header";
import { CardFilter, CardHome, CardLeaguer, FilterImg, H1Filter, HomeHeader, LeaguerCardHeader, MentorImg } from "./StyledCardHome"
import React, {  useMemo, useState } from "react";
import { TextField } from "@mui/material";
import filtro from "../../Components/img/filtro.png"
import { Star, TeamImg } from "../../Pages/LeaguerProfile/styled";
import Vector from "../../Components/img/Vector.png"
import Labs from "../../Components/img/Labs.png"
import Mentor from "../../Components/img/Mentor.png"
import { getLeaguerById } from "../../Services/get";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('')
  
  const goProfile = (id) => {
    navigate(`/leaguer/get/${id}`)
  }

  const infoLeaguer = infoLeaguers.map((info) => {

    return (
      info.id
    )
  });
  // Return an object with specific informatio
  const objectLeaguer = leaguers.map((leaguer) => {
    return {
      name: leaguer.name,
      fase: leaguer.phase,
      turma: leaguer.name_class,
    }
  });
  const filter = useMemo(() => {
    const lowerSearch = search.toLowerCase();
    return objectLeaguer.filter((listarLeaguers) => {
      if (!search) {
        return true
      }
      if (listarLeaguers.name.toLowerCase().includes(lowerSearch)) {
        return true
      }
      return false
    }
    );

  }, [search, leaguers])

  const leaguerCardFiltered = filter.map((rendLeaguer) => (
    <LeaguerCardHeader onClick={() => {
      getLeaguerById(infoLeaguer);
      goProfile(infoLeaguer);

    }}>

      <CardLeaguer> <TeamImg src={Vector}></TeamImg> {rendLeaguer.name}</CardLeaguer>
      <CardLeaguer> <Star src={Labs}></Star> {rendLeaguer.fase}</CardLeaguer>
      <CardLeaguer> <MentorImg src={Mentor}></MentorImg>{rendLeaguer.turma}</CardLeaguer>
    </LeaguerCardHeader>
  ))
  console.log("filter", filter)


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
        <div>asd</div>
      </CardHome>
    </div>

  )


} 