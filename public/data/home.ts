import { base_URL } from "./base";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


export const homeData = {
  // To use your own photo, just place it in /public/assets and write the link as I did: eg: /assets/my_image.jpg
  myImage: base_URL + "/assets/yo3.jpg",
  contactInfo: [
    {
      Icon: IoMdMail,
      Label: "josuealvro@gmail.com",
      Link: "/contact",
    },
    {
      Icon: FaLocationDot,
      Label: "Tlalpujahua, Mich.",
      Link: "https://www.google.com/maps/place/Tlalpujahua+de+Ray%C3%B3n,+Mich./@19.8083285,-100.180704,16z",
    },
    {
      Icon: FaPhoneAlt,
      Label: "+52 712 305 0151",
      Link: "https://wa.me/+527123050151",
    },
  ],
  education: [
    {
      Icon: FaGraduationCap,
      Label: "Ingeniero en Sistemas Computacionales",
      Link: "#",
    },
    {
      Icon: FaUniversity,
      Label: "Universidad Politécnica de Atlacomulco",
      Link: "#",
    }
  ],
  social: [
    {
      Icon: FaGithub,
      Label: "GitHub",
      Link: "https://github.com/josuedevx",
    },
    {
      Icon: FaLinkedin,
      Label: "LinkedIn",
      Link: "https://www.linkedin.com/in/josu%C3%A9-alvarez-rodriguez-012249264",
    },
    {
      Icon: FaFacebook,
      Label: "Facebook",
      Link: "https://www.facebook.com/josue.alvarezrodriguez.372?mibextid=ZbWKwL",
    },
    {
      Icon: FaInstagram,
      Label: "Instagram",
      Link: "https://www.instagram.com/alv._.rod?igsh=NDYybGRzdGNna245",
    },
  ],
};
