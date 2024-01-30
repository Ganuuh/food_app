import { ImportContacts, RiceBowl, Schedule } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
type HomeCardProps = {
  icon: number;
  text: string;
  desc: string;
};
export const HomeCard = (props: HomeCardProps) => {
  const icons = [<ImportContacts />, <Schedule />, <RiceBowl />];
  const { icon, desc, text } = props;
  return (
    <Stack
      width={"full"}
      padding={2}
      border={"1px solid #D6D8DB"}
      borderRadius={2}
      boxShadow={"4px 4px 12px 0px rgba(0, 0, 0, 0.10)"}
    >
      <Stack padding={"15px"} color={"primary.main"}>
        {icons[icon]}
      </Stack>
      <Stack>
        <Typography fontSize={18} fontWeight={700} color={"#272727"}>
          {text}
        </Typography>
        <Typography fontSize={14} color={"#272727"}>
          {desc}
        </Typography>
      </Stack>
    </Stack>
  );
};
