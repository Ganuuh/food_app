import { DrawListType } from "@/providers/drawBarProvider";
import { Add, Close, Remove } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

export const DrawBarFood = (props: DrawListType) => {
  const { name, price, image, ingredient, newPrice } = props.food;
  return (
    <Stack width={530} gap={3}>
      <Stack width={"100%"} border={"1px solid #D6D8DB"}></Stack>
      <Stack
        width={"100%"}
        sx={{ display: "grid", gridTemplateColumns: "repeat(2 , 1fr)" }}
        padding={2}
        gap={2}
      >
        <Stack width={"100%"} height={"100%"} position={"relative"}>
          <Image src={`/${image}`} alt="" fill />
        </Stack>
        <Stack width={"100%"} gap={1}>
          <Stack
            flexDirection={"row"}
            width={"100%"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack>
              <Typography fontSize={18} fontWeight={600}>
                {name}
              </Typography>
              <Typography color={"primary"} fontSize={18} fontWeight={600}>
                {newPrice}₮
              </Typography>
            </Stack>

            <Close />
          </Stack>
          <Typography
            fontSize={16}
            fontWeight={400}
            color={"#767676"}
            lineHeight={"normal"}
          >
            {ingredient}
          </Typography>
          <Stack flexDirection={"row"} gap={1} alignItems={"center"}>
            <Stack padding={1.5} bgcolor={"primary.main"} borderRadius={"10px"}>
              <Remove />
            </Stack>
            <Typography fontSize={18} fontWeight={600}>
              {props.quantity}
            </Typography>
            <Stack padding={1.5} bgcolor={"primary.main"} borderRadius={"10px"}>
              <Add />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
