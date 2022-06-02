import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import { base_Url } from "../../Constants/base_Url";
import { PhotoLogin, RectangleLogin, Form, Logometa, CardButton, Logofeedback, Layout, DivLogofeedback, DivRectangleLogin } from "../../Pages/Login/styled";
import metalogin from "../../Components/img/metalogin.png"
import logometafeedback from "../../Components/img/logometafeedback.png"
import { Button, Typography, TextField } from "@mui/material";
import {goToHomePage, goToSignUp} from "../../Router/coordinator"

export default function Login() {
  const navigate = useNavigate();

  const { form, onChangeForm, clearForm } = useForm({
    email: "",
    password: ""
  });

  const onLogin = (e) => {
    e.preventDefault();
  };
  const gotosignup = (e) => {
    goToSignUp(navigate);
  };

  const loginUser = () => {
    const body = form;
    const url = base_Url + "/responsible/login";
    axios
      .post(url, body)
      .then((res) => {
        clearForm();
        localStorage.setItem("token", res.data.token);
        goToHomePage(navigate);
      })
      .catch((err) => {
        console.log(err);
        alert("Email ou senha incorreta, por favor tente novamente.");
      });
  };
  return (
    <PhotoLogin>
      
      <DivLogofeedback>
      
      <Logofeedback src={logometafeedback}></Logofeedback>
         
      </DivLogofeedback>
      <DivRectangleLogin>
        <RectangleLogin>

          <Form onSubmit={onLogin}>
            <Logometa src={metalogin}></Logometa>
            <Typography variant="h4"><b>Bem-Vindo!</b></Typography>
            <Typography variant="h5">Faça seu login.</Typography>

            <TextField
              name={"email"}
              value={form.email}
              onChange={onChangeForm}
              label={"Email"}
              variant={"outlined"}
              sx={{ width: 350, marginBottom: 3, marginTop: 3}}
              margin="dense"
              required
              type={"email"}
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
            <CardButton>
              <Button fullWidth color="primary" variant="contained" type={"submit"} onClick={loginUser}> Entrar</Button>
            </CardButton>
            <CardButton>
            <Button fullWidth color="primary" variant="text" onClick={gotosignup}>Não tem cadastro? <b> Cadastre-se aqui!</b></Button>
            </CardButton>
          </Form>

        </RectangleLogin>
        </DivRectangleLogin>
    </PhotoLogin>
  )
}
