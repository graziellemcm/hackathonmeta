import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import useForm from "../../Hooks/useForm";
import { base_Url } from "../../Constants/base_Url";
import { Center, Layout, LogoImage, Background } from "./styled";
import metaAzull from "../../Components/img/metaAzull.png"
import { Button, TextField } from "@mui/material"
import {goToHomePage} from "../../Router/coordinator"



export default function SignUpTeam() {
  const navigate = useNavigate();
  const isTokenSet = localStorage.getItem("token");

  const { form, onChangeForm, clearForm } = useForm({
    team_name: ""
  });
  const onSignUpTeam = (e) => {
    e.preventDefault();
    clearForm();
  };
 
  const signUp = () => {
        
        axios
        
            .post(base_Url + "/team/create", form,
            
                {
                    
                    headers: {
                        authorization: isTokenSet
                    }
                }
            )
            .then((resposta) => {
                
                alert("Cadastro de turma realizado!");
            })
            .catch((erro) =>
            console.log(erro.response)
            //  alert(`${erro.response.data}`)
            )
    }
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
              <Button fullWidth color="primary" variant="contained" type={"submit"} onClick={signUp} > Enviar</Button>

            </div>
          </form>

        </Center>
      </Layout>
      </Background>
    </div>
  );
}
