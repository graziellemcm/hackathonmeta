import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import useForm from "../../Hooks/useForm";
import { base_Url } from "../../Constants/base_Url";
import { Logometa, Background } from "../EditLeaguer/styled";
import { Center, Layout } from "../SignUp/styled";
import metalogin from "../../Components/img/metalogin.png";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import useRequestData from "../../Hooks/useRequestData";
import { editLeaguer, registration } from "../../Services/User";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { useNavigate, useParams } from "react-router-dom";

export default function EditLeaguer() {
  useProtectedPage();
  const navigate = useNavigate();
  const params = useParams();
  const { form, onChangeForm, clearForm } = useForm({
    photo_leaguer: "",
    position: "",
    hiring_model: "",
    name: "",
    phase: "",
    technologies: "",
    languages: "",
    id_mentor: "",
    id_manager: "",
    id_admin: "",
  });

  const [image, setImage] = useState(null);

  const dataResponsible = useRequestData(
    [],
    `${base_Url}/responsible/getAll`
  )[0];

  const selectAdmin =
    dataResponsible &&
    dataResponsible
      .filter((responsible) => {
        return responsible.role === "ADMIN";
      })
      .map((admin) => {
        return (
          <MenuItem key={admin.id} value={admin.id}>
            {admin.name}
          </MenuItem>
        );
      });

  const selectMentor =
    dataResponsible &&
    dataResponsible
      .filter((responsible) => {
        return responsible.role === "MENTOR";
      })
      .map((mentor) => {
        return (
          <MenuItem key={mentor.id} value={mentor.id}>
            {mentor.name}
          </MenuItem>
        );
      });

  const selectGestor =
    dataResponsible &&
    dataResponsible
      .filter((responsible) => {
        return responsible.role === "GESTOR";
      })
      .map((gestor) => {
        return (
          <MenuItem key={gestor.id} value={gestor.id}>
            {gestor.name}
          </MenuItem>
        );
      });

  const onRegistration = (e) => {
    e.preventDefault();
    editLeaguer(form, clearForm, params.id, navigate);
  };

  const downloadImg = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  https: return (
    <>
      <Header />
      <Background>
        <Layout>
          <Center>
            <Logometa src={metalogin}></Logometa>
            <Typography variant="h2" fontSize={19} sx={{ marginBottom: 1 }}>
              Editar Leaguer
            </Typography>
            <form onSubmit={onRegistration}>
              <TextField
                name={"name"}
                value={form.name}
                onChange={onChangeForm}
                label={"Nome completo"}
                variant={"outlined"}
                sx={{ width: 350, marginBottom: 1 }}
                margin="dense"
                autoFocus
                type={"name"}
                required
              />

              <FormControl>
                <InputLabel id="phase">Fase</InputLabel>
                <Select
                  labelId="phase-label"
                  id="phase"
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
                >
                  <MenuItem value={"Introdução"}>Introdução</MenuItem>
                  <MenuItem value={"Labs"}>Labs</MenuItem>
                  <MenuItem value={"Beta"}>Beta</MenuItem>
                </Select>
              </FormControl>

              <TextField
                name={"position"}
                value={form.position}
                onChange={onChangeForm}
                label={"Função ex: Estagiário"}
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
                label={"Idiomas"}
                variant={"outlined"}
                sx={{ width: 350, marginBottom: 1 }}
                margin="dense"
                type={"text"}
                autoComplete={"on"}
                required
              />

              <FormControl>
                <InputLabel id="admin">Administrador</InputLabel>
                <Select
                  labelId="admin-label"
                  id="admin"
                  name={"id_admin"}
                  value={form.id_admin}
                  onChange={onChangeForm}
                  label={"Administrador"}
                  variant={"outlined"}
                  sx={{ width: 350, marginBottom: 1 }}
                  margin="dense"
                  type={"text"}
                  required
                >
                  {selectAdmin}
                </Select>
              </FormControl>

              <FormControl>
                <InputLabel id="mentor">Mentor</InputLabel>
                <Select
                  labelId="mentor-label"
                  id="mentor"
                  name={"id_mentor"}
                  value={form.id_mentor}
                  onChange={onChangeForm}
                  label={"Mentor"}
                  variant={"outlined"}
                  sx={{ width: 350, marginBottom: 1 }}
                  margin="dense"
                  type={"text"}
                  autoComplete={"on"}
                  required
                >
                  {selectMentor}
                </Select>
              </FormControl>

              <FormControl>
                <InputLabel id="manager">Gestor</InputLabel>
                <Select
                  labelId="manager-label"
                  id="manager"
                  name={"id_manager"}
                  value={form.id_manager}
                  onChange={onChangeForm}
                  label={"Gestor"}
                  variant={"outlined"}
                  sx={{ width: 350, marginBottom: 1 }}
                  margin="dense"
                  type={"text"}
                  autoComplete={"on"}
                  required
                >
                  {selectGestor}
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel id="hiring_model">Tipo de Contrato</InputLabel>
                <Select
                  id="hiring_model"
                  labelId="hiring_model-label"
                  name={"hiring_model"}
                  value={form.hiring_model}
                  onChange={onChangeForm}
                  label={"Tipo de contrato"}
                  variant={"outlined"}
                  sx={{ width: 350, marginBottom: 1 }}
                  margin="dense"
                  type={"text"}
                  autoComplete={"on"}
                  required
                >
                  <MenuItem value={"clt"}>CLT</MenuItem>
                  <MenuItem value={"pj"}>PJ</MenuItem>
                </Select>
              </FormControl>
              <TextField
                name={"photo_leaguer"}
                value={form.photo_leaguer}
                onChange={onChangeForm}
                label={"Inserir url da imagem"}
                variant={"outlined"}
                sx={{ width: 350, marginBottom: 1 }}
                margin="dense"
                type={"text"}
                required
              />

              <Button
                fullWidth
                color="primary"
                variant="contained"
                type={"submit"}
              >
                Cadastrar Leaguer
              </Button>
            </form>
          </Center>
        </Layout>
      </Background>
    </>
  );
}
