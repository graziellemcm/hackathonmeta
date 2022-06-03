import React from "react";
import Header from "../../Components/Header/Header";
import useForm from "../../Hooks/useForm";
import { Center, Layout, LogoImage, Background } from "./styled";
import metaAzull from "../../Components/img/metaAzull.png"
import { Button, TextField } from "@mui/material"
import { signUpTeam } from "../../Services/User";



export default function SignUpTeam() {
  const { form, onChangeForm, clearForm } = useForm({
    team_name: ""
  });

  const onSignUpTeam = (e) => {
    e.preventDefault();
    clearForm();
    signUpTeam(form)
  };
  
  
  return (
    <div>
      <Header />
      <Background>
      <Layout>
        <div></div>

        <Center>
          <LogoImage src={metaAzull} />
          <h2>Cadastre a Turma</h2>
          <form onSubmit={onSignUpTeam}>

           
            <TextField
              name={"team_name"}
              value={form.team_name}
              onChange={onChangeForm}
              label={"Turma"}
              variant={"outlined"}
              sx={{ width: 350, marginBottom: 3 }}
              margin="dense"
              type={"text"}
              required
            />
      
            <div>
              <Button fullWidth color="primary" variant="contained" type={"submit"}> Enviar</Button>

            </div>
          </form>

        </Center>
      </Layout>
      </Background>
    </div>
  );
}
