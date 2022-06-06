import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import useForm from "../../Hooks/useForm";
import { base_Url } from "../../Constants/base_Url";
import { Logometa, Background } from "../LeaguerRegistration/styled";
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
import { registration } from "../../Services/User";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { useNavigate } from "react-router-dom";

export default function LeaguerRegistration() {
  useProtectedPage();
  const navigate = useNavigate();
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
    name_class: "",
  });

  const [image, setImage] = useState(null);

  const dataTeam = useRequestData([], `${base_Url}/team/all`)[0];
  const dataResponsible = useRequestData(
    [],
    `${base_Url}/responsible/getAll`
  )[0];

  const selectTeam =
    dataTeam &&
    dataTeam.map((team) => {
      return <MenuItem value={team.team_name}>{team.team_name}</MenuItem>;
    });

  const selectAdmin =
    dataResponsible &&
    dataResponsible
      .filter((responsible) => {
        return responsible.role === "ADMIN";
      })
      .map((admin) => {
        return <MenuItem value={admin.id}>{admin.name}</MenuItem>;
      });

  const selectMentor =
    dataResponsible &&
    dataResponsible
      .filter((responsible) => {
        return responsible.role === "MENTOR";
      })
      .map((mentor) => {
        return <MenuItem value={mentor.id}>{mentor.name}</MenuItem>;
      });

  const selectGestor =
    dataResponsible &&
    dataResponsible
      .filter((responsible) => {
        return responsible.role === "GESTOR";
      })
      .map((gestor) => {
        return <MenuItem value={gestor.id}>{gestor.name}</MenuItem>;
      });

  const onRegistration = (e) => {
    e.preventDefault();
    registration(form, clearForm, navigate);
  };

  const downloadImg = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      <Header />
      <Background>
        <Layout>
          <Center>
            <Logometa src={metalogin}></Logometa>
            <Typography variant="h2" fontSize={19} sx={{ marginBottom: 1 }}>
              Realize o cadastro do Leaguer!
            </Typography>
            <form onSubmit={onRegistration}>
              <TextField
                name={"name"}
                value={form.name}
                onChange={onChangeForm}
                label={"Nome completo"}
                variant={"outlined"}
                sx={{ width: 350, marginBottom: -0.1 }}
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

              <FormControl>
                <InputLabel id="team">Turma</InputLabel>
                <Select
                  labelId="team-label"
                  id="team"
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
                >
                  {selectTeam}
                </Select>
              </FormControl>

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
                  sx={{ width: 350, marginBottom: 3 }}
                  margin="dense"
                  type={"text"}
                  autoComplete={"on"}
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
              />
              {/* <div>
                                <label for="photo_leaguer">Inserir uma foto</label>
                                <br></br>
                                <input type="file" id="photo_leaguer" name="photo_leaguer" accept=".jpg, .jpeg, .png" onChange={onChangeForm}/>
                            </div>

 */}

              <Button
                fullWidth
                color="primary"
                variant="contained"
                type={"submit"}
              >
                {" "}
                Cadastrar Leaguer
              </Button>
            </form>
          </Center>
        </Layout>
      </Background>
    </>
  );
}
