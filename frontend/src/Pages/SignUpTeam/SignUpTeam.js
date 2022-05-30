import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import useForm from "../../Hooks/useForm";
import { base_Url } from "../../Constants/base_Url";
import { Center, Layout, LogoImage } from "./styled";
import metaAzull from "../../Components/img/metaAzull.png"
import { Button, TextField } from "@mui/material"



export default function SignUpTeam() {
  const navigate = useNavigate();
  //form
  const { form, onChangeForm, clearForm } = useForm({
    name: "",
    email: "",
    team:"",
    password: "",
  });
  const onSignUpTeam = (e) => {
    e.preventDefault();

  };
  //endpoint signupTeam
  const signUpTeam = () => {
    const body = form;
    axios
      .post(base_Url + "/user/signup-team", body)
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
          <h2>Cadastre a Turma</h2>
          <form onSubmit={onSignUpTeam}>

           
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
              required
            />
      
            <div>
              <Button fullWidth color="primary" variant="contained" type={"submit"} onClick={signUpTeam} > Enviar</Button>

            </div>
          </form>

        </Center>
      </Layout>
    </div>
  );
}
