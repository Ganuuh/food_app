"use client";
import { useAuth } from "@/providers/authProvider";
import { useFModal } from "@/providers/FoodModalProvider";
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
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HeaderLoginCard } from "./HeaderLoginCard";
import { useDraw } from "@/providers/drawBarProvider";
import { ProfilePicFrame } from "../profileComps/ProfilePic";
export const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();
  const [login, setLogin] = useState(false);
  const { isLoggedIn } = useAuth();
  const { myLink } = useFModal();
  const { setDrawOpen } = useDraw();
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
        zIndex: "50",
        backgroundColor: "white",
      }}
    >
      {!isLoggedIn && login && (
        <HeaderLoginCard setShown={setLogin} shown={login} />
      )}
      <Stack
        maxWidth={1440}
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
            onClick={() => {
              router.push("/home");
            }}
            sx={{
              fontSize: 14,
              fontWeight: 700,
              color: myLink.includes("home") ? "green" : "black",
            }}
          >
            НҮҮР
          </Button>
          <Button
            onClick={() => {
              router.push("/menu");
            }}
            sx={{
              fontSize: 14,
              fontWeight: 700,
              color: myLink.includes("menu") ? "green" : "black",
            }}
          >
            ХООЛНЫ ЦЭС
          </Button>
          <Button
            onClick={() => {
              router.push("/delivery");
            }}
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
          <Stack
            flexDirection={"row"}
            gap={1}
            onClick={() => {
              setDrawOpen(true);
            }}
            sx={{ cursor: "pointer" }}
          >
            <ShoppingCartOutlined />
            <Typography>Сагс</Typography>
          </Stack>
          <Stack
            sx={{ cursor: "pointer" }}
            flexDirection={"row"}
            alignItems={"center"}
            gap={1}
            onClick={() => {
              isLoggedIn ? router.push("/profile") : setLogin(true);
            }}
          >
            <Stack
              width={32}
              height={32}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              borderRadius={"50%"}
              overflow={"hidden"}
            >
              {isLoggedIn ? (
                <ProfilePicFrame src="/profile.jpeg" />
              ) : (
                <PersonOutlined />
              )}
            </Stack>

            <Typography color={"black"}>
              {isLoggedIn ? localStorage.getItem("name") : "Нэвтрэх"}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
