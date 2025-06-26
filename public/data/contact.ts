import {
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export const receiver_email = "josuealvro@gmail.com"; // Su dirección de correo electrónico para recibir mensajes a través del servicio de correo electrónico.
// Los emails se envían usando una api de email desarrollada: https://github.com/josuedevx/email-sender
// Siéntete libre de clonar el servicio de email también y desplegar el tuyo propio, encontrarás todos los pasos en el README allí.
// Asegúrate de actualizar /src/utils/sendEmail.ts con tu propio enlace desplegado.

export const contactInfo = [
  {
    icon: FaPhoneAlt,
    label: "Celular",
    value: "+52 712 305 0151",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+52 712 305 0151",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/josuedevx",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/josu%C3%A9-alvarez-rodriguez-012249264",
  },
  {
    icon: FaFacebook,
    label: "Facebook",
    value: "facebook.com/josue.alvarezrodriguez.372?mibextid=ZbWKwL",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    value: "instagram.com/alv._.rod?igsh=NDYybGRzdGNna245",
  },
];
