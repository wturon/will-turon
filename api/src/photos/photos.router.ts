import { Request, Response, Router } from "express";
import * as PhotoService from "./photos.service";
import { BasePhoto } from "./photo.interface";

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

photosRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id);
    const photo = await PhotoService.find(id);
    if (photo) {
      return res.status(200).send(photo);
    }
    res.status(404).send("Item not found");
  } catch (e: any) {
    res.send(500).send(e.message);
  }
});

photosRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id);
    const existingPhoto = await PhotoService.find(id);
    const photoUpdate = req.body;

    if (existingPhoto) {
      const updatedPhoto = PhotoService.update(id, photoUpdate);
      return res.status(200).json(updatedPhoto);
    }
    res.status(404).send("No photo with matching ID");
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

photosRouter.post("/", async (req: Request, res: Response) => {
  try {
    const photo: BasePhoto = req.body;
    const newPhoto = await PhotoService.create(photo);

    res.status(201).json(newPhoto);
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
