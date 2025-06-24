import { HStack, IconButton, Tooltip } from "@chakra-ui/react";

const ToolBarRight = () => {
  const customStyle = { width: "10px", height: "10px", padding: "8px" };
  return (
    <HStack>
      <Tooltip label="Sin acción" placement="left">
        <IconButton
          isRound={true}
          variant="solid"
          colorScheme="yellow"
          aria-label="Done"
          size="xsm"
          style={customStyle}
        />
      </Tooltip>
      <Tooltip label="Sin acción" placement="left">
        <IconButton
          isRound={true}
          variant="solid"
          colorScheme="green"
          aria-label="Done"
          size="xsm"
          style={customStyle}
        />
      </Tooltip>
      <Tooltip label="Sin acción" placement="left">
        <IconButton
          isRound={true}
          variant="solid"
          colorScheme="red"
          aria-label="Done"
          size="xsm"
          style={customStyle}
        />
      </Tooltip>
    </HStack>
  );
};

export default ToolBarRight;
