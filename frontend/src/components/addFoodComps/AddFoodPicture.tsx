"use client";
import { CircularProgress, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

type AddFoodProps = {
  link: string;
  setLink: Dispatch<SetStateAction<string>>;
};

export const AddFoodPicture = (props: AddFoodProps) => {
  const [isloading, setLoading] = useState<boolean>(false);
  const { link, setLink } = props;

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    if (e.target.files) {
      const image = e.target.files[0];

      try {
        const formData = new FormData();

        formData.append("file", image);

        const response = await fetch(
          "https://api.cloudinary.com/v1_1/drwacb3lb/upload?upload_preset=tfdako2y",
          { method: "POST", body: formData }
        );

        const data = await response.json();

        setLink(data.secure_url);
        setLoading(false);
      } catch (error: any) {
        console.log(error.response.data.message);
      }
    }
  };
  return (
    <Stack width={"100%"} gap={1}>
      <Typography>Хоолны зураг</Typography>
      <Stack
        width={"100%"}
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "8px",
        }}
      >
        <Stack
          width={"100%"}
          height={122}
          bgcolor={"#BABCC41F"}
          borderRadius={"10px"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
          border={"1px dotted grey"}
        >
          <Typography color={"#525252"} fontWeight={600} fontSize={16}>
            Add image for the food
          </Typography>
          <Stack bgcolor={"#525252"} padding={1} borderRadius={2}>
            <Stack position={"relative"} overflow={"hidden"}>
              <TextField
                variant="standard"
                fullWidth
                type="file"
                onChange={handleImageUpload}
                inputProps={{
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: "10",
                    opacity: 0,
                    padding: "0px 0px",
                  },
                }}
                InputProps={{ disableUnderline: true }}
              />
              <Typography fontSize={14} fontWeight={600} color={"white"}>
                Add image
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          width="100%"
          height={"100%"}
          position={"relative"}
          justifyContent={"center"}
          alignItems={"center"}
          border={"1px solid grey"}
          borderRadius={"10px"}
          overflow={"hidden"}
        >
          {isloading ? (
            // <CircularProgressWithProps value={isloading} />
            <CircularProgress />
          ) : link !== "" ? (
            <Image fill src={link} alt="" />
          ) : (
            <Typography fontSize={16} fontWeight={600} textAlign={"center"}>
              Your photo will appear here!
            </Typography>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};
