import { CardFilter, CardHome, FilterImg, H1Filter, HomeHeader, LeaguerCardHeader } from "./StyledCardHome"
import React, { useEffect, useMemo, useState } from "react";
import { TextField } from "@mui/material";
import useRequestData from "../../Hooks/useRequestData"
import filtro from "../img/filtro.png"
import { base_Url } from "../../Constants/base_Url";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CardHomepage = () => {
    const [leaguers, setLeaguers] = useState([])
    const navigate = useNavigate();
    const [search, setSearch] = useState('')
   
    const goInscricao = () => {
        navigate("/trips/application");
    }

    const getTrips = () => {
        axios
          .get(`${base_Url}/leaguer/getAll`)
          .then((resposta) => {
             setLeaguers(resposta.data.leaguer)
             console.log(resposta.data)


          }).catch((erro) => {
            console.log(erro.response);
          })
      }
      useEffect(() => {
        getTrips();
      }, []);

      const listarLeaguers = leaguers.map((leaguer) => {
        return (<LeaguerCardHeader key={leaguer.id}>
            <p><b>Nome:</b> {leaguer.name}</p>
            <p><b>Fase:</b> {leaguer.phase}</p>
            <p><b>Turma:</b> {leaguer.name_class}</p>
           
        </LeaguerCardHeader>)
    })

    const filter = useMemo(() => {
        const lowerSearch = search.toLowerCase();
        return listarLeaguers.filter((listarLeaguers) =>
        listarLeaguers.toLowerCase().includes(lowerSearch));
    }, [search])
    const onChangeSearch = (event) => {
        setSearch(event.target.value)


    }
    return (

        <div>
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
                    {filter.map((listarleaguers) => (
                        <LeaguerCardHeader >{listarleaguers} </LeaguerCardHeader>

                    ))}

                </ul>
                <div>asd</div>
            </CardHome>
        </div>

    )


} 