import { Stack } from "@mui/material";
import Image from "next/image";

export const SocialLogos = () => {
  const logos = ["/facebook.png", "/instagram.png", "/twitter.png"];
  return (
    <Stack flexDirection={"row"} gap={2.25}>
      {logos.map((each) => {
        return (
          <Image
            key={each}
            style={{ cursor: "pointer" }}
            src={each}
            alt=""
            height={40}
            width={40}
          />
        );
      })}
    </Stack>
  );
};
