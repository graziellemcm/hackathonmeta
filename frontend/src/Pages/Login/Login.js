import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import { PhotoLogin, RectangleLogin, Form, Logometa, CardButton, Logofeedback, DivLogofeedback, DivRectangleLogin } from "../../Pages/Login/styled";
import metalogin from "../../Components/img/metalogin.png"
import logometafeedback from "../../Components/img/logometafeedback.png"
import { Button, Typography, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import { goToSignUp } from "../../Router/coordinator"
import { loginUser } from "../../Services/User";
import { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function Login() {
  const navigate = useNavigate();

  const { form, onChangeForm } = useForm({
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false)

  const toHomePage = (e) => {
    navigate("/");
  };

  const submitForm = (e) => {
    e.preventDefault()
    loginUser(form, toHomePage)
  }

  return (
    <PhotoLogin>
      <DivLogofeedback>
        <Logofeedback src={logometafeedback}></Logofeedback>
      </DivLogofeedback>
      <DivRectangleLogin>
        <RectangleLogin>

          <Form onSubmit={submitForm}>
            <Logometa src={metalogin}></Logometa>
            <Typography variant="h4"><b>Bem-Vindo!</b></Typography>
            <Typography variant="h5">Faça seu login.</Typography>

            <TextField
              name={"email"}
              value={form.email}
              onChange={onChangeForm}
              label={"Email"}
              variant={"outlined"}
              sx={{ width: 350, marginBottom: 3, marginTop: 3 }}
              margin="dense"
              required
              type={"email"}
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
            <CardButton>
              <Button fullWidth color="primary" variant="contained" type={"submit"}> Entrar</Button>
            </CardButton>
            <CardButton>
              <Button fullWidth color="primary" variant="text" onClick={e => goToSignUp(navigate)}>Não tem cadastro? <b> Cadastre-se aqui!</b></Button>
            </CardButton>
          </Form>

        </RectangleLogin>
      </DivRectangleLogin>
    </PhotoLogin>
  )
}
