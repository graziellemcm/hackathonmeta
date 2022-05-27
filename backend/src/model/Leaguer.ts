export class Leaguer {
  constructor(
    private id: string,
    private created_at: Date | string,
    private name: string,
    private email: string,
    private phase: string,
    private tecnologies: string,
    private languages: string,
    private id_mentor: string,
    private id_manager: string,
    private id_admin: string,
    private name_class: string
  ) {}

  static toLeaguerModel(leaguer: any): Leaguer {
    return new Leaguer(
      leaguer.id,
      leaguer.created_at,
      leaguer.name,
      leaguer.email,
      leaguer.phase,
      leaguer.tecnologies,
      leaguer.languages,
      leaguer.id_mentor,
      leaguer.id_manager,
      leaguer.id_admin,
      leaguer.name_class
    );
  }
}

export interface LeaguerInputDTO {
  name: string;
  email: string;
  team: string;
  phase: string;
  tecnologies: string[];
  languages: string[];
}
