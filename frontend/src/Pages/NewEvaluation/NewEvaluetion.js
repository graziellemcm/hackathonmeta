import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { base_Url } from "../../Constants/base_Url";
import useForm from "../../Hooks/useForm";
import { Background, Center, Layout, Logometa } from "./styled";
import metalogin from "../../Components/img/metalogin.png"


export default function NewEvaluation() {
    const navigate = useNavigate();
    const isTokenSet = localStorage.getItem("token");

    const { form, onChangeForm, clearForm } = useForm({

        email_leaguer: "",
        email_creator: "",
        email_evaluators: "",

    });

    const onNewEvaluation = (e) => {
        e.preventDefault();

    };

    const newEvaluation = () => {
        const body = form;
        
        axios
            .post(base_Url + "/feedback/create", body,
            {
                    
                headers: {
                    authorization: isTokenSet
                }
            })
            .then((res) => {
                clearForm();
                localStorage.setItem("token", res.data.token);
                alert("Nova avaliação criada!");
            })
            .catch((err) => {
            alert(`${err.response.data}`)
            });
    };


    return (
        <div>
            <Header />
            <Background>
                <Layout>
                    <Center>
                        <Logometa src={metalogin}></Logometa>
                        <Typography variant="h2" fontSize={19} sx={{marginBottom: 1 }}>Nova Avaliação</Typography>
                        <form onSubmit={onNewEvaluation}>
                            <TextField
                                name={"email_leaguer"}
                                value={form.email_leaguer}
                                onChange={onChangeForm}
                                label={"Email do Leaguer"}
                                variant={"outlined"}
                                sx={{ width: 350, marginBottom: 2 }}
                                margin="dense"
                                type={"text"}
                            />
                            <TextField
                                name={"email_creator"}
                                value={form.email_creator}
                                onChange={onChangeForm}
                                label={"Email do Criador"}
                                variant={"outlined"}
                                sx={{ width: 350, marginBottom: 2 }}
                                margin="dense"
                                type={"text"}
                            />
                            <TextField
                                name={"email_evaluators"}
                                value={form.email_evaluators}
                                onChange={onChangeForm}
                                label={"Email do Avaliador"}
                                variant={"outlined"}
                                sx={{ width: 350, marginBottom: 3 }}
                                margin="dense"
                                type={"text"}
                            />
                            <Button fullWidth color="primary" variant="contained" type={"submit"} onClick={newEvaluation} > Enviar</Button>
                        </form>
                    </Center>
                </Layout>
            </Background>
        </div>
    );
}