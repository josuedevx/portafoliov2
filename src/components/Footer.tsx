import { Box, HStack } from "@chakra-ui/react";
import {
  VscGitMerge,
  VscError,
  VscWarning,
  VscJson,
  VscCheck,
  VscBell,
} from "react-icons/vsc";
import FooterButton from "./FooterButton";

const Footer = () => {
  return (
    <Box>
      <HStack justifyContent="space-between">
        <Box>
          <FooterButton Icon={VscGitMerge} Content="main" TooltipLabel="vscode-portafolio - main*" />
          <FooterButton Icon={VscError} Content="0" TooltipLabel="No hay problemas" />

          <FooterButton
            Icon={VscWarning}
            Content="1"
            TooltipLabel="Disclaimer: Toda la información presentada es de carácter público y se limita a destacar mis habilidades y el trabajo realizado sin divulgar detalles sensibles."
          />
        </Box>
        <Box>
          <FooterButton
            Icon={VscJson}
            Content="JavaScript JSX"
            TooltipLabel=""
          />
          <FooterButton Icon={VscCheck} Content="Prettier" TooltipLabel="" />
          <FooterButton Icon={VscBell} Content="" TooltipLabel="" />
        </Box>
      </HStack>
    </Box>
  );
};

export default Footer;
