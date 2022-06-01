const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  //remetente

  host: "smtp.gmail.com", //SMTP usado no gmail
  port: 587,
  secure: false, // diz se estamos usando SSL
  auth: {
    //autenticação, fica no dotenv
    user: "avaliacao.backend.meta.grupo1@gmail.com", //email remetente
    pass: "metagrupo1", //senha
  },
});

transporter.sendMail({
  from: "eliel<avaliacao.backend.meta.grupo1@gmail.com>",
  to: "elielcara@yahoo.com.br",
  subject: "Mensagem de exemplo", //titulo
  text: "Este é um texto de exemplo", //corpo do email
  html: "<p>Exemplo em HTML</p>", //corpo do email
});
