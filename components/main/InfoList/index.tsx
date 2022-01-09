import { FunctionComponent } from "react";

// ChakraUI
import { Grid } from "@chakra-ui/react";

// Components
import Info from "./Info";

// Interfaces
import { InfoData } from "../../../interfaces/InfoData";

interface InfoListProps {
  infos: InfoData[];
}

const InfoList: FunctionComponent<InfoListProps> = ({ infos }) => {
  return (
    <Grid
      gap={5}
      templateColumns={[
        "repeat(1, 1fr)",
        null,
        "repeat(2, 1fr)",
        "repeat(4, 1fr)",
      ]}
    >
      {infos.map((info, i) => (
        <Info key={i} info={info} />
      ))}
    </Grid>
  );
};

export default InfoList;
