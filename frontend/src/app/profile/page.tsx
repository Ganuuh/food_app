"use client";
import { api } from "@/common";
import { LoadingPage } from "@/components/loading";
import { ProfileText } from "@/components/profileComps/ProfileText";
import { useAuth } from "@/providers/authProvider";
import {
  Call,
  Edit,
  EmailOutlined,
  History,
  Logout,
  PersonOutline,
} from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type userType = {
  name: string;
  number: number;
  email: string;
};
export default function Page() {
  const [user, setUser] = useState<userType>();
  const router = useRouter();
  const { isLoggedIn, logOut } = useAuth();

  if (!isLoggedIn) {
    return router.push("/home");
  }
  const getUser = async () => {
    try {
      const res = await api.get("/getUser", {
        headers: { Authorization: localStorage.getItem("token") },
      });

      const { user } = res.data;

      setUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <Stack
      width={"100%"}
      height={"100%"}
      flexDirection={"row"}
      justifyContent={"center"}
      alignContent={"center"}
      marginTop={"55px"}
      py={10}
    >
      <Stack gap={3} width={400}>
        <Stack
          width={"100%"}
          alignItems={"center"}
          gap={5}
          position={"relative"}
        >
          <Stack width={120} height={120} position={"relative"}>
            <Stack
              width={"100%"}
              height={"100%"}
              position={"relative"}
              borderRadius={"50%"}
              overflow={"hidden"}
            >
              <Image fill src={"/profile.jpeg"} alt="" />
            </Stack>
            <Stack
              width={34}
              height={34}
              border={"1px solid #D6D8DB"}
              justifyContent={"center"}
              alignItems={"center"}
              color={"primary.main"}
              position={"absolute"}
              bottom={0}
              right={0}
              borderRadius={"50%"}
              bgcolor={"white"}
            >
              <Edit />
            </Stack>
          </Stack>
          <Typography fontSize={28} fontWeight={700}>
            Ganbold
          </Typography>
          {/* Bottom */}
        </Stack>
        {/* //one text */}
        {!user ? (
          <LoadingPage />
        ) : (
          <>
            <ProfileText
              type="grey"
              value={user.name}
              label="Таны нэр"
              icon={<PersonOutline fontSize="large" />}
            />
            <ProfileText
              type="grey"
              value={user.number}
              label="Утасны дугаар"
              icon={<Call />}
            />
            <ProfileText
              type="grey"
              value={user.email}
              label="Имэйл хаяг"
              icon={<EmailOutlined />}
            />
            <ProfileText
              type="white"
              value={"Захиалгын түүх"}
              icon={<History />}
            />
            <ProfileText
              type="white"
              value={"Гарах"}
              icon={<Logout />}
              f={logOut}
            />
          </>
        )}
      </Stack>
    </Stack>
  );
}
