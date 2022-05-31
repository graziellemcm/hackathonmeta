export type leaguerType = {
  id: string;
  photo_leaguer?: string;
  position: string;
  hiring_model: string;
  created_at: string;
  name: string;
  email: string;
  phase: string;
  tecnologies: string;
  languages?: string;
  id_mentor?: string;
  id_manager?: string;
  id_admin?: string;
  name_class:string
};
export type editiLeaguerType = {
  photo_leaguer?: string;
  position?: string;
  hiring_model?: string;
  created_at?: string;
  name?: string;
  email?: string;
  phase?: string;
  tecnologies?: string;
  languages?: string;
  id_mentor?: string;
  id_manager?: string;
  id_admin?: string;
  name_class?:string
};
