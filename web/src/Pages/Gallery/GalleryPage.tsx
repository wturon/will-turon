import { useAsync } from "react-async";
import styled from "styled-components";
import { getBlobDataAsync } from "./GalleryService";

export const GalleryPage = (): JSX.Element => {
  const getBlobData = useAsync(getBlobDataAsync);

  if (getBlobData.isPending) return <div>Loading...</div>;
  if (getBlobData.error) return <p>{getBlobData.error.message}</p>;
  if (getBlobData.data)
    return (
      <Background>
        <GalleryContainer>
          {getBlobData.data.map((picture, index) => (
            <GalleryImage key={index} imageUri={picture.url}>
              {picture.name}
            </GalleryImage>
          ))}
        </GalleryContainer>
      </Background>
    );
  return <div>Test</div>;
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
