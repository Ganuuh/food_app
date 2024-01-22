import { Container, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Container
      sx={{
        position: "fixed",
        border: "1px solid green",
        width: "100%",
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "space-between",
        padding: "8px 24px",
      }}
    >
      <Stack
        flexDirection={"row"}
        gap={5}
        height={"full"}
        alignItems={"center"}
      >
        <Image src="/Logo.png" alt={""} width={30} height={30} />
        <Typography fontSize={14} fontWeight={700}>
          НҮҮР
        </Typography>
        <Typography fontSize={14} fontWeight={700}>
          ХООЛНЫ ЦЭС
        </Typography>
        <Typography fontSize={14} fontWeight={700}>
          ХҮРГЭЛТИЙН БҮС
        </Typography>
      </Stack>
      <Stack flexDirection={"row"} alignItems={"center"} gap={1} height={20}>
        <TextField
          placeholder="Search"
          type="text"
          fullWidth={false}
          sx={{ width: "260px", height: "40px" }}
        />
      </Stack>
    </Container>
  );
};
