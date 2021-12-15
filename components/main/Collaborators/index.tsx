import { FunctionComponent } from "react";

// Chakra-UI
import { Grid, Heading } from "@chakra-ui/react";

// Components
import Collaborator from "./Collaborator";

// Interfaces
import { Collaborator as ICollaborator } from "../../../interfaces/Collaborator";

interface CollaboratorsProps {
  collaborators: ICollaborator[];
}

const Collaborators: FunctionComponent<CollaboratorsProps> = ({
  collaborators,
}) => {
  return (
    <>
      <Heading pb={10}>Our Collaborators</Heading>
      <Grid
        templateColumns={["repeat(2, 1fr)", null, null, "repeat(4, 1fr)"]}
        gap={5}
      >
        {collaborators.map((c, i) => (
          <Collaborator key={i} collaborator={c} />
        ))}
      </Grid>
    </>
  );
};

export default Collaborators;
