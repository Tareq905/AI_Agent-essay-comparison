import express from "express";
import compareRoutes from "./routes/compare.routes.js";

const app = express();
app.use(express.json());

app.use("/api", compareRoutes);
app.use(express.static("test-ui"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Comparator running on port ${PORT}`);
});
