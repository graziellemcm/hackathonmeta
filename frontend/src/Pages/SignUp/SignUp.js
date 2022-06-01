import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import useForm from "../../Hooks/useForm";
import { base_Url } from "../../Constants/base_Url";
import { Background, Center, Layout, Logometa } from "./styled";
import metalogin from "../../Components/img/metalogin.png"
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { goToHomePage } from "../../Router/coordinator"


export default function SignUp() {
  const navigate = useNavigate();

  const { form, onChangeForm, clearForm } = useForm({
    name: "",
    email: "",
    password: "",
    role: ""

  });

  const onSignUp = (e) => {
    e.preventDefault();
    clearForm();
  };

  const signUp = () => {
    const body = form;
    axios
      .post(base_Url + "/responsible/signup", body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        alert("Cadastro realizado!");
        goToHomePage(navigate);
      })
      .catch((err) => {

        alert(`${err.response.data}`);
      });
  };
  return (
    <>
      <Header />
      <Background>
        <Layout>
          <Center>
            <Logometa src={metalogin}></Logometa>
            <Typography variant="h2" fontSize={19} >Cadastre-se</Typography>
            <form onSubmit={onSignUp}>
              <TextField
                name={"name"}
                value={form.name}
                onChange={onChangeForm}
                label={"Nome completo"}
                variant={"outlined"}
                sx={{ width: 350, marginBottom: 3 }}
                margin="dense"
                required
                autoFocus
                type={"name"}
              />

              <TextField
                name={"email"}
                value={form.email}
                onChange={onChangeForm}
                label={"Email"}
                variant={"outlined"}
                sx={{ width: 350, marginBottom: 3 }}
                margin="dense"
                required
                type={"email"}
              />
              <FormControl>
                <InputLabel id="function">Função</InputLabel>
                <Select
                  labelId="function-label"
                  id="function"
                  name={"role"}
                  value={form.role}
                  onChange={onChangeForm}
                  label="Função"
                  variant={"outlined"}
                  sx={{ width: 350, marginBottom: 3 }}
                  margin="dense"
                >
                  <MenuItem value={"ADMIN"}>Administrador</MenuItem>
                  <MenuItem value={"GESTOR"}>Gestor</MenuItem>
                  <MenuItem value={"MENTOR"}>Mentor</MenuItem>
                </Select>
              </FormControl>

              <TextField
                name={"team"}
                value={form.team}
                onChange={onChangeForm}
                label={"Turma"}
                variant={"outlined"}
                sx={{ width: 350, marginBottom: 3 }}
                margin="dense"
                type={"text"}
                autoComplete={"on"}
              />

              <TextField
                name={"password"}
                value={form.password}
                onChange={onChangeForm}
                label={"Senha"}
                variant={"outlined"}
                sx={{ width: 350, marginBottom: 3 }}
                margin="dense"
                required
                type={"password"}
                autoComplete={"on"}
              />
              <Button fullWidth color="primary" variant="contained" type={"submit"} onClick={signUp} > Enviar</Button>
            </form>
          </Center>
        </Layout>
      </Background>
    </>

  );
}
