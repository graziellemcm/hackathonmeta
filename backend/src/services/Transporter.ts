// const nodemailer = require("nodemailer");
import nodemailer from "nodemailer";

export async function transporter(emails: string[]) {
  const email = process.env.EMAIL;
  const senha = process.env.SENHA;
  const transporter = nodemailer.createTransport({
    //remetente
    host: "smtp-mail.outlook.com", //SMTP usado no gmail
    port: 587,
    secure: false, // diz se estamos usando SSL
    auth: {
      //autenticação, fica no dotenv
      user: email, //email remetente
      pass: senha, //senha
    },
  });

  transporter.sendMail({
    from: `Hackathon Meta, grupo 1 <${email}>`,
    to: emails,
    subject: "Avaliação de leaguer", //titulo
    text: "Este é um texto de exemplo",
    html: ` 	<div style="color:navy;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif">
		<h3 >Formulário de avaliação do leaguer</h3>
    <h4 >
      Chegou a hora de avaliar o leaguer
      <span style="font-size: 20px;">👨‍💻📝</span>
    </h4>
    <p >
      Preencha os campos abaixo com atenção e muito carinho, a avaliação final
      do leaguer depende disso.
		</br></br>   
      O formulário de avaliação expira em 48 horas, não se esqueça, após esse
      tempo o link não estará mais disponível.
		</br></br>
      Contamos com a sua avaliação, obrigada!
      <span style="font-size: 20px;">🙌</span>
		</p>
	</br>
    <a
      href="https://www.google.com/"
      target="_blank"
      style="text-decoration: none; color:mediumblue;"
    >
      ✅ Formulário de avaliação
		</a>
	</div>
  


    `,
  });
}
