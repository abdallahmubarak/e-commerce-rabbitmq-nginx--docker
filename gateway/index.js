import express from "express";
import proxy from "express-http-proxy";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const auth = proxy("http://localhost:3001");
const product = proxy("http://localhost:3001");
const order = proxy("http://localhost:3002");

app.use("/api/auth", auth);
app.use("/api/messages", product);
app.use("/api/notifications", order);

app.listen(8080, () => {
    console.log("Gateway is Listening to Port 8080");
});
