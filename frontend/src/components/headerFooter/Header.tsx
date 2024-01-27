"use client";
import { useAuth } from "@/providers/authProvider";
import { useLink } from "@/providers/linkProvider";
import {
  PersonOutlined,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export const Header = () => {
  const [searchValue, setSearchValue] = useState("");

  const { isLoggedIn } = useAuth();
  const { myLink } = useLink();

  return (
    <Stack
      sx={{
        position: "fixed",
        width: "100vw",
        top: 0,
        left: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        zIndex: "10",
        backgroundColor: "white",
      }}
    >
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"80%"}
        sx={{ padding: "8px 24px" }}
      >
        <Stack
          flexDirection={"row"}
          gap={5}
          height={"full"}
          alignItems={"center"}
        >
          <Image src="/Logo.png" alt={""} width={30} height={30} />
          <Button
            sx={{
              fontSize: 14,
              fontWeight: 700,
              color: myLink.includes("home") ? "green" : "black",
            }}
          >
            НҮҮР
          </Button>
          <Button
            sx={{
              fontSize: 14,
              fontWeight: 700,
              color: myLink.includes("menu") ? "green" : "black",
            }}
          >
            ХООЛНЫ ЦЭС
          </Button>
          <Button
            sx={{
              fontSize: 14,
              fontWeight: 700,
              color: myLink.includes("delivery") ? "green" : "black",
            }}
          >
            ХҮРГЭЛТИЙН БҮС
          </Button>
        </Stack>
        <Stack flexDirection={"row"} alignItems={"center"} gap={3}>
          <TextField
            placeholder="Search"
            type="search"
            fullWidth={false}
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
            sx={{ width: 260, height: "full" }}
            inputProps={{ style: { padding: "8px 16px", width: "full" } }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Stack flexDirection={"row"} gap={1}>
            <ShoppingCartOutlined />
            <Typography>Сагс</Typography>
          </Stack>
          <Stack flexDirection={"row"} gap={1}>
            <PersonOutlined />
            <Typography>Нэвтрэх</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
