export interface BasePhoto {
  name: string;
  thumbnailUri: string;
  fullResUri: string;
}

export interface Photo extends BasePhoto {
  id: number;
}
