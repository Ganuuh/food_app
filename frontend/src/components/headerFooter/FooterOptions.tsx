import { Stack, Typography } from "@mui/material";

export const FooterOptions = () => {
  const texts = [
    "Нүүр",
    "Холбоо барих",
    "Хоолны цэс",
    "Үйлчилгээний нөхцөл",
    "Хүргэлтийн бүс",
    "Нууцлалын бодлого",
  ];
  return (
    <Stack flexDirection={"row"} alignItems={"center"} gap={"95px"}>
      {texts.map((each, index) => {
        return (
          <Typography
            key={index}
            fontSize={16}
            fontWeight={600}
            color={"white"}
            sx={{ textDecorationLine: "underline", cursor: "pointer" }}
          >
            {each}
          </Typography>
        );
      })}
    </Stack>
  );
};
