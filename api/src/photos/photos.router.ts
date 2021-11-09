import { Request, Response, Router } from "express";
import * as PhotoService from "./photos.service";

export const photosRouter = Router();

photosRouter.get("/", async (req: Request, res: Response) => {
  try {
    const photos = await PhotoService.findAll();
    if (photos) {
      return res.status(200).send(photos);
    }
    res.status(404).send("Nothing to return");
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

photosRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id);
    PhotoService.remove(id);
    res.status(204).send("Photo deleted");
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});
