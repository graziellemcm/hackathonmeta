import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import Header from "../../Components/Header/Header";
import useForm from "../../Hooks/useForm";
import { Background, Center, Layout, Logometa } from "./styled";
import metalogin from "../../Components/img/metalogin.png"
import { newEvaluation } from "../../Services/User";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import useRequestData from "../../Hooks/useRequestData";
import { base_Url } from "../../Constants/base_Url";
import { GlobalContext } from "../../Global/GlobalContext";


export default function NewEvaluation() {
    useProtectedPage()

    const dataResponsible = useRequestData(
        undefined,
        `${base_Url}/responsible/getAll`
    )[0];
    const data = useContext(GlobalContext)

    const { form, onChangeForm, clearForm } = useForm({

        email_leaguer: "",
        email_creator: "",
        email_evaluators: "",

    });

    const onNewEvaluation = (e) => {
        e.preventDefault();
        clearForm()
        newEvaluation(form)
    };

    const leaguer = data.leaguersData && data.leaguersData.map(leaguer => {
        return <MenuItem key={leaguer.id} value={leaguer.email}>{leaguer.name}</MenuItem>
    })

    const responsible = dataResponsible && dataResponsible.map(res => {
        return <MenuItem key={res.id} value={res.email}>{res.name}</MenuItem>
    })

    return (
        <div>
            <Header />
            <Background>
                <Layout>
                    <Center>
                        <Logometa src={metalogin}></Logometa>
                        <Typography variant="h2" fontSize={19} sx={{marginBottom: 1 }}>Nova Avaliação</Typography>
                        <form onSubmit={onNewEvaluation}>
                        <FormControl>
                                <InputLabel id="leaguer">Leaguer</InputLabel>
                                <Select
                                    labelId="leaguer-label"
                                    id="leaguer"
                                    name={"email_leaguer"}
                                    value={form.email_leaguer}
                                    onChange={onChangeForm}
                                    label={"Leaguer"}
                                    variant={"outlined"}
                                    sx={{ width: 350, marginBottom: 2 }}
                                    margin="dense"
                                    type={"text"}
                                >
                                    {leaguer}
                                </Select>
                            </FormControl>

                            <FormControl>
                                <InputLabel id="responsible">Criador</InputLabel>
                                <Select
                                    labelId="responsible-label"
                                    id="responsible"
                                    name={"email_creator"}
                                    value={form.email_creator}
                                    onChange={onChangeForm}
                                    label={"Criador"}
                                    variant={"outlined"}
                                    sx={{ width: 350, marginBottom: 2 }}
                                    margin="dense"
                                    type={"text"}
                                >
                                    {responsible}
                                </Select>
                            </FormControl>

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

                            <Button fullWidth color="primary" variant="contained" type={"submit"} > Enviar</Button>
                        </form>
                    </Center>
                </Layout>
            </Background>
        </div>
    );
}