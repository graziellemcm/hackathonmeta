import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
// import Header from "../../Components/Header/Header";
import useForm from "../../Hooks/useForm";
import { base_Url } from "../../Constants/base_Url";
import { Background, Center, Layout, LogoImage } from "../SignUp/styled";
import metaAzull from "../../Components/img/metaAzull.png"
import { Button, TextField, Typography } from "@mui/material"



export default function LeaguerRegistration() {
    const navigate = useNavigate();
    //form
    const { form, onChangeForm, clearForm } = useForm({
        name: "",
        email: "",
        team: "",
        phase: "",
        technologies: "",
        languages: "",
        mentor: "",
        manager: "",
        admin: "",


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
            {/* <Header /> */}
            <Background >
                <Layout>
                    <Center>
                        <LogoImage src={metaAzull} />
                        <Typography variant="h2" fontSize={19} sx={{marginBottom: 1}} >Realize o cadastro do Leaguer!</Typography>
                        <form onSubmit={onSignUp}>
                            <TextField
                                name={"name"}
                                value={form.name}
                                onChange={onChangeForm}
                                label={"Nome completo"}
                                variant={"outlined"}
                                sx={{ width: 350, marginBottom: 1 }}
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
                                sx={{ width: 350, marginBottom: 1 }}
                                margin="dense"
                                required
                                type={"email"}
                            />

                            <TextField
                                name={"team"}
                                value={form.team}
                                onChange={onChangeForm}
                                label={"Turma"}
                                variant={"outlined"}
                                sx={{ width: 350, marginBottom: 1 }}
                                margin="dense"
                                type={"text"}
                                autoComplete={"on"}
                                required
                            />

                            <TextField
                                name={"phase"}
                                value={form.phase}
                                onChange={onChangeForm}
                                label={"Fase"}
                                variant={"outlined"}
                                sx={{ width: 350, marginBottom: 1 }}
                                margin="dense"
                                type={"text"}
                                autoComplete={"on"}
                                required
                            />
                            <TextField
                                name={"technologies"}
                                value={form.technologies}
                                onChange={onChangeForm}
                                label={"Tecnologias"}
                                variant={"outlined"}
                                sx={{ width: 350, marginBottom: 1 }}
                                margin="dense"
                                type={"text"}
                                autoComplete={"on"}
                                required
                            />
                            <TextField
                                name={"languages"}
                                value={form.languages}
                                onChange={onChangeForm}
                                label={"Linguagens"}
                                variant={"outlined"}
                                sx={{ width: 350, marginBottom: 1 }}
                                margin="dense"
                                type={"text"}
                                autoComplete={"on"}
                            />
                            <TextField
                                name={"admin"}
                                value={form.admin}
                                onChange={onChangeForm}
                                label={"Administrador"}
                                variant={"outlined"}
                                sx={{ width: 350, marginBottom: 1 }}
                                margin="dense"
                                type={"text"}
                                required
                            />
                            <TextField
                                name={"mentor"}
                                value={form.mentor}
                                onChange={onChangeForm}
                                label={"Mentor"}
                                variant={"outlined"}
                                sx={{ width: 350, marginBottom: 1 }}
                                margin="dense"
                                type={"text"}
                                autoComplete={"on"}
                            />
                            <TextField
                                name={"manager"}
                                value={form.manager}
                                onChange={onChangeForm}
                                label={"Gestor"}
                                variant={"outlined"}
                                sx={{ width: 350, marginBottom: 3 }}
                                margin="dense"
                                type={"text"}
                                autoComplete={"on"}
                            />
                            

                            <Button fullWidth color="primary" variant="contained" type={"submit"} onClick={signUp} > Cadastrar Leaguer</Button>
                        </form>
                    </Center>
                </Layout>
            </Background>
        </>

    );
}
