import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import useForm from "../../Hooks/useForm";
import { base_Url } from "../../Constants/base_Url";
import { Background, Center, Layout, LogoImage } from "./styled";
import metaAzull from "../../Components/img/metaAzull.png"
import { Button, TextField, Typography } from "@mui/material"



export default function SignUp() {
  const navigate = useNavigate();
  //form
  const { form, onChangeForm, clearForm } = useForm({
    name: "",
    email: "",
    team: "",
    role: "",
    password: "",
  });
  const onSignUp = (e) => {
    e.preventDefault();

  };
  //endpoint signup
  const signUp = () => {
    const body = form;
    axios
      .post(base_Url + "/user/signup", body)
      .then((res) => {
        clearForm();
        localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((err) => {
        alert(`${err.response.data}`);
      });
  };
  return (
    <>
      <Header />
      <Background >
        <Layout>
          <Center>
            <LogoImage src={metaAzull} />
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

              <TextField
                name={"role"}
                value={form.role}
                onChange={onChangeForm}
                label={"Função"}
                variant={"outlined"}
                sx={{ width: 350, marginBottom: 3 }}
                margin="dense"
                type={"text"}
                autoComplete={"on"}
              />

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
