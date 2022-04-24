const PORT = 3333;
import express, { Express, json } from "express";
import cors from "cors";
import router from "./routes/postsRoutes";
const app: Express = express();

app.use(json());
app.use(cors());

app.use("/api", router);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
