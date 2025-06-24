import {
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export const receiver_email = "josuealvro@gmail.com"; // Your email for recieving emails using the email service.
// The emails are sent using a personally developed email api: https://github.com/KareemEhab/email-sender
// Feel free to clone the email service as well and deploy your own, you'll find all the steps in the README there.
// Make sure to update /src/utils/sendEmail.ts with your own deployed link.

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
