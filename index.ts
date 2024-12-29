import http from "http";
import app from "./app";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 8000;

const server = http.createServer(app);

const startServer = () => {
  server.listen(port, () => {
    console.log(`Server running on port ${port}.`);
  });
};

startServer();
