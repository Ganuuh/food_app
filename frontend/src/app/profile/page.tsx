"use client";
import { api } from "@/common";
import { LoadingPage } from "@/components/loading";
import { ProfileEdit } from "@/components/profileComps/ProfileEdit";
import { ProfileText } from "@/components/profileComps/ProfileText";
import { useAuth } from "@/providers/authProvider";
import {
  Call,
  Edit,
  EmailOutlined,
  History,
  Logout,
  PersonOutline,
  PersonRounded,
} from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type userType = {
  name: string;
  number: number;
  email: string;
  profilePic: string;
};
export default function Page() {
  const [user, setUser] = useState<userType>();
  const [isEditing, setEditing] = useState(false);
  const router = useRouter();
  const { isLoggedIn, setModal } = useAuth();

  // if (!isLoggedIn) {
  //   return router.push("/home");
  // }

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
    <>
      {isEditing ? (
        <ProfileEdit
          name={user?.name}
          number={user?.number}
          email={user?.email}
          picture={user?.profilePic}
        />
      ) : (
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
                  {!user?.profilePic ? (
                    <Image fill src={"/noProfile.jpeg"} alt="" />
                  ) : (
                    <Image fill src={user.profilePic} alt="" />
                  )}
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
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    setEditing(true);
                  }}
                >
                  <Edit />
                </Stack>
              </Stack>
              <Typography fontSize={28} fontWeight={700}>
                {user?.name}
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
                  setEdit={setEditing}
                  value={user.name}
                  label="Таны нэр"
                  icon={<PersonOutline fontSize="large" />}
                />
                <ProfileText
                  type="grey"
                  setEdit={setEditing}
                  value={user.number}
                  label="Утасны дугаар"
                  icon={<Call />}
                />
                <ProfileText
                  type="grey"
                  setEdit={setEditing}
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
                  setState={setModal}
                />
              </>
            )}
          </Stack>
        </Stack>
      )}
    </>
  );
}
