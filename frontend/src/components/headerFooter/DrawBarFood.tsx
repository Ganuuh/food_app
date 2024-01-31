import { Add, Close, Remove } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

export const DrawBarFood = () => {
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
          <Image src={"/food.png"} alt="" fill />
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
                Main Pizza
              </Typography>
              <Typography color={"primary"} fontSize={18} fontWeight={600}>
                34,800₮
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
            Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
          </Typography>
          <Stack flexDirection={"row"} gap={1} alignItems={"center"}>
            <Stack padding={1.5} bgcolor={"primary.main"} borderRadius={"10px"}>
              <Remove />
            </Stack>
            <Typography fontSize={18} fontWeight={600}>
              1
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
