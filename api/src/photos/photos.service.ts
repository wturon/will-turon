import { BasePhoto, Photo } from "./photo.interface";
import { Photos } from "./photos.interface";

let photos: Photos = {
  1: {
    id: 1,
    name: "test photo 1",
    fullResUri: "https://picsum.photos/2000/3000",
    thumbnailUri: "https://picsum.photos/200/300",
  },
  2: {
    id: 1,
    name: "test photo 1",
    fullResUri: "https://picsum.photos/2000/3000",
    thumbnailUri: "https://picsum.photos/200/300",
  },
};

export const findAll = async (): Promise<Photo[]> => Object.values(photos);

export const find = async (id: number): Promise<Photo> => photos[id];

export const create = async (newPhoto: BasePhoto): Promise<Photo> => {
  const id = new Date().valueOf();
  photos[id] = {
    id,
    ...newPhoto,
  };
  return photos[id];
};

export const update = async (
  id: number,
  newPhoto: BasePhoto
): Promise<Photo | null> => {
  const oldPhoto = await find(id);
  if (!oldPhoto) {
    return null;
  }
  photos[id] = { id, ...newPhoto };
  return photos[id];
};

export const remove = async (id: number): Promise<null | void> => {
  const photo = await find(id);
  if (!photo) {
    return null;
  }

  delete photos[id];
};
