import axios from "axios";
import React from "react";
import Header from "../../Components/Header/Header";
import useForm from "../../Hooks/useForm";
import { base_Url } from "../../Constants/base_Url";
import { Logometa, Background } from "../LeaguerRegistration/styled";
import { Center, Layout } from "../SignUp/styled";
import metalogin from "../../Components/img/metalogin.png"
import { Button, TextField, Typography } from "@mui/material"



export default function LeaguerRegistration() {
    const isTokenSet = localStorage.getItem("token");

    const { form, onChangeForm, clearForm } = useForm({
        photo_leaguer: "",
        position: "",
        hiring_model: "",
        name: "",
        email: "",
        phase: "",
        technologies: "",
        languages: "",
        id_mentor: "",
        id_manager: "",
        id_admin: "",
        name_class: ""
    });

    const onRegistration = (e) => {
        e.preventDefault();
        clearForm()
    };

    const registration = () => {
        const body = form;
        console.log(body)
        axios
            .post(base_Url + "/leaguer/create", body,

            {
                
                headers: {
                    authorization: isTokenSet
                }
            })
            .then((res) => {
                localStorage.setItem("token", res.data.token);
                alert("Cadastro realizado!");
            })
            .catch((err) => {
                console.log(err.response)
                // alert(`${err.response.data}`);
            });
    };
    return (
        <>
            <Header />
            <Background >
                <Layout>
                    <Center>
                        <Logometa src={metalogin}></Logometa>
                        <Typography variant="h2" fontSize={19} sx={{ marginBottom: 1 }} >Realize o cadastro do Leaguer!</Typography>
                        <form onSubmit={onRegistration}>
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
                                name={"name_class"}
                                value={form.name_class}
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
                                required
                            />
                            <TextField
                                name={"id_admin"}
                                value={form.id_admin}
                                onChange={onChangeForm}
                                label={"Administrador"}
                                variant={"outlined"}
                                sx={{ width: 350, marginBottom: 1 }}
                                margin="dense"
                                type={"text"}
                                
                            />
                            <TextField
                                name={"id_mentor"}
                                value={form.id_mentor}
                                onChange={onChangeForm}
                                label={"Mentor"}
                                variant={"outlined"}
                                sx={{ width: 350, marginBottom: 1 }}
                                margin="dense"
                                type={"text"}
                                autoComplete={"on"}
                            />
                            <TextField
                                name={"id_manager"}
                                value={form.id_manager}
                                onChange={onChangeForm}
                                label={"Gestor"}
                                variant={"outlined"}
                                sx={{ width: 350, marginBottom: 1 }}
                                margin="dense"
                                type={"text"}
                                autoComplete={"on"}
                            />

                            <TextField
                                name={"hiring_model"}
                                value={form.hiring_model}
                                onChange={onChangeForm}
                                label={"Tipo de contrato"}
                                variant={"outlined"}
                                sx={{ width: 350, marginBottom: 1 }}
                                margin="dense"
                                type={"text"}
                                autoComplete={"on"}
                            />

                            <TextField
                                name={"position"}
                                value={form.position}
                                onChange={onChangeForm}
                                label={"Função ex: Estagiário"}
                                variant={"outlined"}
                                sx={{ width: 350, marginBottom: 3 }}
                                margin="dense"
                                type={"text"}
                                autoComplete={"on"}
                                required
                            />


                            <Button fullWidth color="primary" variant="contained" type={"submit"} onClick={registration} > Cadastrar Leaguer</Button>
                        </form>
                    </Center>
                </Layout>
            </Background>
        </>

    );
}
