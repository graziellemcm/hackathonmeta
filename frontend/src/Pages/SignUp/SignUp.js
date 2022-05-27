import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import useForm from "../../Hooks/useForm";
import { base_Url } from "../../Constants/base_Url";
import { Center, Layout, LogoImage } from "./styled";
import metaAzull from "../../Components/img/metaAzull.png"
import { Button, TextField } from "@mui/material"



export default function SignUp() {
  const navigate = useNavigate();
  //form
  const { form, onChangeForm, clearForm } = useForm({
    name: "",
    email: "",
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
    <div>
      <Header />
      <Layout>
        <div></div>

        <Center>
          <LogoImage src={metaAzull} />
          <h2>Cadastre-se</h2>
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
            <br></br>

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
            <br></br>
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
            <br></br>
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
            <div>
              <Button fullWidth color="primary" variant="contained" type={"submit"} onClick={signUp} > Enviar</Button>

            </div>
          </form>

        </Center>
      </Layout>
    </div>
  );
}
