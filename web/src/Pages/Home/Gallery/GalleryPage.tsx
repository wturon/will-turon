import styled from "styled-components";
import img from "../../../Assets/images/bg.jpg";

export const pictures = [
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

export const GalleryPage = () => (
  <GalleryContainer>
    {pictures.map((picture) => (
      <GalleryImage>{picture.name}</GalleryImage>
    ))}
  </GalleryContainer>
);

const GalleryContainer = styled.div`
  margin-left: 25px;
  margin-right: 25px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 25px;
`;

const GalleryImage = styled.div`
  height: auto;
  width: 100%;
  background-color: grey;
  content: url(${img});
`;
