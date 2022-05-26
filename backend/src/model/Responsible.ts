

export interface SignupResponsibleInputDTO {
    name: string
    email: string
    password: string
    role: Responsibilities
    team: string
}
export interface LoginInputDTO {
 
    email: string
    password: string
}
export enum Responsibilities {
    ADMIN = "Admin",
    MENTOR = "Mentor",
    MANAGER = "Manager",
}

export class Responsibles {
   constructor(
      private id: string,
      private name: string,
      private email: string,
      private password: string,
      private role: Responsibilities
      
   ) { }

   getId(){
      return this.id;
   }

   getName(){
      return this.name;
   }

   getEmail(){
      return this.email;
   }

   getPassword(){
      return this.password;
   }

   getRole() {
      return this.role;
   }
   
   static toShowModel(data: any): Responsibles {
    return new Responsibles(data.id, data.name, data.email, data.password, data.role);
};
}

export const stringToUserRole = (input: string):Responsibilities => {
   switch (input) {
      
      case "ADMIN":
         return Responsibilities.ADMIN;
      case "MANAGER":
         return Responsibilities.MANAGER;
      case "MENTOR":
         return Responsibilities.MENTOR;
      default:
         throw new Error("Role inválido, inserir: ADMIN, MANAGER OU GESTOR");
   }
};

