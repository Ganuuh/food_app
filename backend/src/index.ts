import app from "./app";
import { connectToDatabase } from "./database";

connectToDatabase();

const port = 8008;
app.listen(port, () => {
  console.log("App is listening on port ", port);
});
