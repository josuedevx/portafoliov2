import { receiver_email } from "../../public/data/contact";

export const sendEmail = async (values: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const { name, email, subject, message } = values;

  return await fetch("https://email-sender-git-main-josuedevxs-projects.vercel.app/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name, // El nombre del remitente del mensaje.
      email, // El correo electrónico del remitente del mensaje.
      subject, // El asunto del mensaje.
      message, // El contenido del mensaje.
      receiver_email, // El correo electrónico del destinatario del mensaje (o sea mi correo personal que es josuealvro@gmai.com), que se importa desde el archivo de contacto.
    }),
  });
};
