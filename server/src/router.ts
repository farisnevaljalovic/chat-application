import express from "express";
const router = express.Router();

router.get("/", (req: any, res: any) => {
  res.send("Server is up and running");
});

export default router;
