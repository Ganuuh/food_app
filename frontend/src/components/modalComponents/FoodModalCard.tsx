import { api } from "@/common";
import { useAuth } from "@/providers/authProvider";
import { useDraw } from "@/providers/drawBarProvider";
import { BannerFood, useFModal } from "@/providers/FoodModalProvider";
import { Add, Close, Remove } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

export const FoodModalCard = (props: BannerFood) => {
  const [quantity, setQuantity] = useState(1);
  const { name, ingredient, newPrice = 0, image, price, _id } = props;
  const { setModal, percentageModal } = useFModal();
  const { isLoggedIn } = useAuth();
  const addFoodList = async (id: string, quantity: number) => {
    try {
      const res = await api.post(
        "/foods/addCardFood",
        { id: id, quantity: quantity },
        { headers: { Authorization: localStorage.getItem("token") } }
      );
      console.log(res.data);
      toast.success(res.data);
      setModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const clickHandler = () => {
    if (quantity === 1) {
      return toast.warn("захиалгын доод хязгаар нь нэг");
    }

    setQuantity(quantity - 1);
  };

  return (
    <Stack
      padding={4}
      flexDirection={"row"}
      alignItems={"center"}
      sx={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}
      gap={4}
      bgcolor={"white"}
      zIndex={10}
      borderRadius={2}
    >
      <Stack
        position={"relative"}
        borderRadius={2}
        overflow={"hidden"}
        sx={{ aspectRatio: "1/0.7", width: 1 }}
      >
        <Typography
          borderRadius={10}
          marginTop={"10px"}
          marginRight={"10px"}
          fontWeight={600}
          fontSize={18}
          border={"1px solid white"}
          sx={{
            zIndex: 20,
            backgroundColor: "green",
            color: "white",
            padding: "2px 10px",
            position: "absolute",
            top: 0,
            right: 0,
          }}
        >
          {percentageModal}%
        </Typography>
        <Image fill alt="" src={`/${image}`} />
      </Stack>
      <Stack gap={4} width={"100%"} alignItems={"flex-start"}>
        <Stack
          width={"100%"}
          alignItems={"flex-end"}
          sx={{ cursor: "pointer" }}
          onClick={() => {
            setModal(false);
          }}
        >
          <Close />
        </Stack>
        <Stack>
          <Typography fontSize={28} fontWeight={700} color={"#000000"}>
            {name}
          </Typography>
          <Typography fontSize={18} fontWeight={600} color={"primary"}>
            {newPrice}₮
          </Typography>
        </Stack>
        <Stack gap={1.5}>
          <Typography fontSize={18} fontWeight={600}>
            Орц
          </Typography>
          <Typography fontSize={16} fontWeight={400} color={"#767676"}>
            {ingredient}
          </Typography>
        </Stack>
        <Typography fontSize={18} fontWeight={600}>
          Тоо
        </Typography>
        <Stack
          width={"100%"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Button
            variant="contained"
            onClick={() => {
              clickHandler();
            }}
          >
            <Remove />
          </Button>
          <Typography fontSize={16} fontWeight={600}>
            {quantity}
          </Typography>
          <Button
            variant="contained"
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            <Add />
          </Button>
        </Stack>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => {
            isLoggedIn;
            addFoodList(_id, quantity);
          }}
        >
          Сагслах
        </Button>
      </Stack>
    </Stack>
  );
};
