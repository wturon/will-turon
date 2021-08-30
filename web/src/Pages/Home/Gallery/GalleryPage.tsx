import { useEffect } from "react";
import styled from "styled-components";
import { getImages } from "./GalleryService";

export const pictures = [
  {
    name: "1",
    imageUri: "https://wttest.blob.core.windows.net/images/KaiArt.jpg",
  },
  {
    name: "2",
  },
  {
    name: "3",
  },
  {
    name: "1",
  },
  {
    name: "2",
  },
  {
    name: "3",
  },
  {
    name: "1",
  },
  {
    name: "2",
  },
  {
    name: "3",
  },
];

export const GalleryPage = () => {
  useEffect(() => {
    getImages().then((res) => console.log(res));
  }, []);

  return (
    <Background>
      <GalleryContainer>
        {pictures.map((picture) => (
          <GalleryImage imageUri={picture.imageUri ?? "img"}>
            {picture.name}
          </GalleryImage>
        ))}
      </GalleryContainer>
    </Background>
  );
};

const GalleryContainer = styled.div`
  margin-left: 25px;
  margin-right: 25px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 25px;
`;

export type GalleryImageProps = {
  imageUri: string;
};

const GalleryImage = styled.div<GalleryImageProps>`
  height: auto;
  width: 100%;
  content: url(${(props) => props.imageUri});
`;

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #2f3542;
`;
