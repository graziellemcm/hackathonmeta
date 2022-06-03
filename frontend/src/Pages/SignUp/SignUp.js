import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import useForm from "../../Hooks/useForm";
import { Background, Center, Layout, Logometa } from "./styled";
import metalogin from "../../Components/img/metalogin.png"
import { Button, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import { signUp } from "../../Services/User";


export default function SignUp() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false)
  const [verifyPassword, setVerifyPassword] = useState(undefined)

  const { form, onChangeForm, clearForm } = useForm({
    name: "",
    email: "",
    password: "",
    role: "",
    access_key: ""
  });


  const submitForm = (e) => {
    e.preventDefault()
    if (verifyPassword !== form.password) {
        alert("Senhas diferentes.")
        return false
    }
    signUp(form, navigate)
    clearForm();
}

  const verify = (event) => {
    setVerifyPassword(event.target.value)
}


  
  return (
    <>
      <Header />
      <Background>
        <Layout>
          <Center>
            <Logometa src={metalogin}></Logometa>
            <Typography variant="h2" fontSize={19} >Cadastre-se</Typography>
            <form onSubmit={submitForm}>
              <TextField
                name={"name"}
                value={form.name}
                onChange={onChangeForm}
                label={"Nome completo"}
                variant={"outlined"}
                sx={{ width: 350, marginBottom: 1.5 }}
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
                sx={{ width: 350, marginBottom: 1.5 }}
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
                  sx={{ width: 350, marginBottom: 1 }}
                  margin="dense"
                >
                  <MenuItem value={"ADMIN"}>Administrador</MenuItem>
                  <MenuItem value={"GESTOR"}>Gestor</MenuItem>
                  <MenuItem value={"MENTOR"}>Mentor</MenuItem>
                </Select>
              </FormControl>

              <TextField
                name={"access_key"}
                value={form.access_key}
                onChange={onChangeForm}
                label={"Chave de Acesso"}
                variant={"outlined"}
                sx={{ width: 350, marginBottom: 2 }}
                margin="dense"
                type={"text"}
                autoComplete={"on"}
              />

              <FormControl >
                <InputLabel htmlFor="inputPassword">Senha</InputLabel>
                <OutlinedInput
                  id="inputPassword"
                  name={"password"}
                  type={showPassword ? 'text' : 'password'}
                  value={form.password}
                  onChange={onChangeForm}
                  variant={"outlined"}
                  label="Senha"
                  sx={{ width: 350, marginBottom: 3 }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={e => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }

                />
              </FormControl>

              <FormControl >
                <InputLabel htmlFor="inputConfirmPassword">Confirme a Senha</InputLabel>
                <OutlinedInput
                  id="inputConfirmPassword"
                  name={"confirmPassword"}
                  type={showPassword ? 'text' : 'password'}
                  onChange={verify}
                  variant={"outlined"}
                  label={"confirme a senha"}
                  sx={{ width: 350, marginBottom: 3 }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={e => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

             
              <Button fullWidth color="primary" variant="contained" type={"submit"} > Enviar</Button>
            </form>
          </Center>
        </Layout>
      </Background>
    </>

  );
}
