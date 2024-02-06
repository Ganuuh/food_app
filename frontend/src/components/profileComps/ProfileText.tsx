import { EditOutlined, PersonOutlined } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

type ProfileTextProps = {
  type: "email" | "name" | "phone";
  value: string;
};

export const ProfileText = (props: ProfileTextProps) => {
  return (
    <Stack
      padding={2}
      bgcolor={"#F6F6F6"}
      borderRadius={0.5}
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Stack
        flexDirection={"row"}
        gap={1}
        alignItems={"center"}
        height={"100%"}
      >
        <Stack
          height={"100%"}
          sx={{ aspectRatio: "1/1" }}
          borderRadius={"50%"}
          bgcolor={"white"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <PersonOutlined fontSize="large" />
        </Stack>
        <Stack>
          <Stack gap={0.5}>
            <Typography color={"#888A99"} fontSize={12}>
              Таны нэр
            </Typography>
            <Typography fontSize={16}>УгтахБаяр</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack color={"primary.main"}>
        <EditOutlined />
      </Stack>
    </Stack>
  );
};
