import express, { Request, Response } from "express";
import authRoutes from "@routes/auth.routes";
import userRoutes from "@routes/user.routes";
import groceryItemRoutes from "@routes/groceryItem.routes";
import orderRoutes from "@routes/order.routes";

const app = express();

app.use(express.json());
app.use("/api", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api", groceryItemRoutes);
app.use("/api", orderRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
