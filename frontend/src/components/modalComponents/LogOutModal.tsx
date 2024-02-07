import { useAuth } from "@/providers/authProvider";
import { Button, Collapse, Stack, Typography } from "@mui/material";

export const LogOutModal = () => {
  const { setModal, logOutModal, logOut } = useAuth();
  return (
    <Collapse in={logOutModal}>
      <Stack
        zIndex={50}
        position={"fixed"}
        top={0}
        left={0}
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack
          onClick={() => {
            setModal(false);
          }}
          width={"100%"}
          height={"100%"}
          bgcolor={"#00000080"}
          position={"absolute"}
        ></Stack>
        <Stack
          width={384}
          height={228}
          borderRadius={3}
          alignItems={"center"}
          bgcolor={"white"}
          zIndex={10}
          overflow={"hidden"}
        >
          <Stack
            width={"100%"}
            paddingX={5}
            height={"70%"}
            justifyContent={"center"}
          >
            <Typography
              alignSelf={"center"}
              textAlign={"center"}
              lineHeight={2}
              fontSize={20}
              fontWeight={600}
              color={"black"}
            >
              Та системээс гарахдаа итгэлтэй байна уу?
            </Typography>
          </Stack>
          <Stack
            width={"100%"}
            height={"30%"}
            padding={2}
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gap: 2,
            }}
          >
            <Stack
              width={"100%"}
              height={"100%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Button
                onClick={() => {
                  logOut();
                  setModal(false);
                }}
                variant="contained"
                color="primary"
                fullWidth
                sx={{ height: "100%" }}
              >
                Тийм
              </Button>
            </Stack>
            <Stack
              width={"100%"}
              height={"100%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Button
                onClick={() => {
                  setModal(false);
                }}
                variant="contained"
                color="primary"
                fullWidth
                sx={{ height: "100%" }}
              >
                Үгүй
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Collapse>
  );
};
