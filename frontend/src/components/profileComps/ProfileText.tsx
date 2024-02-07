import { EditOutlined } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type ProfileTextProps = {
  type: "white" | "grey";
  value: string | number;
  label?: string;
  icon: React.ReactNode;
  f?: () => void;
  setState?: Dispatch<SetStateAction<boolean>>;
};

export const ProfileText = (props: ProfileTextProps) => {
  const { type, value, label = "", icon, f, setState } = props;
  return (
    <Stack
      padding={2}
      bgcolor={type === "grey" ? "#F6F6F6" : "white"}
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
          height={48}
          sx={{ aspectRatio: "1/1" }}
          borderRadius={"50%"}
          bgcolor={"white"}
          alignItems={"center"}
          justifyContent={"center"}
          border={"1px solid #D9D9D9"}
        >
          {icon}
        </Stack>
        <Stack>
          <Stack gap={0.5}>
            {label === "" ? null : (
              <Typography color={"#888A99"} fontSize={12}>
                {label}
              </Typography>
            )}
            <Typography
              fontSize={16}
              onClick={() => {
                setState === undefined ? null : setState(true);
              }}
              sx={{ cursor: type === "white" ? "pointer" : "default" }}
            >
              {value === undefined
                ? `Таны ${label.toLowerCase()} хоосон байна`
                : value}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      {type === "white" ? null : (
        <Stack color={"primary.main"}>
          <EditOutlined />
        </Stack>
      )}
    </Stack>
  );
};
