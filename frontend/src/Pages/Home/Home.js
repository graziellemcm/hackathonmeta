import Header from "../../Components/Header/Header";
import { CardFilter, CardHome, CardLeaguer, HomeHeader, LeaguerCard } from "./Styled"
import React, { useContext, useMemo, useState } from "react";
import { Avatar, CircularProgress, InputAdornment, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../Global/GlobalContext";
import { goToLeaguerProfile, goToLeaguerRegistration } from "../../Router/coordinator";
import { useProtectedPage } from "../../Hooks/useProtectedPage";

export const Home = () => {
  useProtectedPage()

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
    return (
      <LeaguerCard
        key={rendLeaguer.id}
        onClick={() => goToLeaguerProfile(navigate, rendLeaguer.id)}
        sx={{ width: 350, marginBottom: 3, alignSelf: "center" }}
      >
        <div>
          <Avatar alt={rendLeaguer.nam} src={rendLeaguer.photo_leaguer} sx={{ width: 56, height: 56 }} />
        </div>
        <div>
          <Typography variant="h1" fontSize={18}><></>{rendLeaguer.name}</Typography>
          <Typography variant="h1" fontSize={16}><></>{rendLeaguer.phase}</Typography>
          <Typography variant="h1" fontSize={16}><></>{rendLeaguer.name_class}</Typography>
        </div>
      </LeaguerCard>
    )
  })



  const onChangeSearch = (event) => {
    setSearch(event.target.value)
  }


  return (

    <div>
      <Header />
      <HomeHeader onClick={() => goToLeaguerRegistration(navigate)}>CADASTRO DE LEAGUER</HomeHeader>
      <CardFilter>

        <TextField

          sx={{ width: 350, marginBottom: 3, alignSelf: "center" }}
          placeholder="Busque por nome do Leaguer"
          onChange={onChangeSearch}
          name={'searching'}
          variant="outlined"
          value={search}
          id="input-with-icon-textfield"
          autoFocus
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </CardFilter>
      <CardHome>
        {data.loading ? <CircularProgress sx={{ m: "40vh auto" }} /> : leaguerCardFiltered}
      </CardHome>
    </div>

  )


} 