import { Box, Container, Stack, Typography } from "@mui/material";

type HeaderProps = {
  home: String;
  menu: String;
  area: String;
  bucket: String;
  login: String;
};
export const Header = (props: HeaderProps) => {
  return (
    <Container>
      <Stack>
        <Typography></Typography>
      </Stack>
      <Box></Box>
    </Container>
  );
};
