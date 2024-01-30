import { Stack } from "@mui/material";
import { HomeCard } from "./HomeCard";

export const HomeCards = () => {
  const cardsInfo = [
    {
      text: "Хүргэлтийн төлөв хянах",
      icon: 0,
      desc: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      text: "Шуурхай хүргэлт",
      icon: 1,
      desc: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      text: "Эрүүл, баталгаат орц",
      icon: 2,
      desc: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      text: "Хоолны өргөн сонголт",
      icon: 0,
      desc: "Захиалга бэлтгэлийн явцыг хянах",
    },
  ];
  return (
    <Stack
      width={"80%"}
      maxWidth={1440}
      gap={6}
      sx={{ display: "grid", gridTemplateColumns: "repeat(4  ,1fr)" }}
    >
      {cardsInfo.map((info) => {
        const { icon, text, desc } = info;
        return <HomeCard icon={icon} text={text} desc={desc} />;
      })}
    </Stack>
  );
};
