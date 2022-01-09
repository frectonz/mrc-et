import { FunctionComponent } from "react";

// Chakra-UI
import { Box, Image } from "@chakra-ui/react";

// Interface
import type { Collaborator as ICollaborator } from "../../../interfaces/Collaborator";

interface CollaboratorProps {
  collaborator: ICollaborator;
}

const Collaborator: FunctionComponent<CollaboratorProps> = ({
  collaborator,
}) => {
  return (
    <Box>
      <a href={collaborator.url}>
        <Image src={collaborator.image} alt={collaborator.name} />
      </a>
    </Box>
  );
};

export default Collaborator;
