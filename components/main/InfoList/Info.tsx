import { FunctionComponent } from "react";

// ChakraUI
import { Image, Heading, Stack } from "@chakra-ui/react";

// Interfaces
import { InfoData } from "../../../interfaces/InfoData";

// Components
import MotionBox from "../../../components/utils/MotionBox";

interface InfoProps {
  info: InfoData;
}

const Info: FunctionComponent<InfoProps> = ({ info }) => {
  return (
    <MotionBox p={4} borderRadius={4}>
      <a href={info.url}>
        <Stack spacing={5}>
          <Image width={50} src={info.image} alt={info.title} />
          <Stack>
            <Heading size="md" textTransform="uppercase">
              {info.title}
            </Heading>
            <p>{info.detail}</p>
          </Stack>
        </Stack>
      </a>
    </MotionBox>
  );
};

export default Info;
