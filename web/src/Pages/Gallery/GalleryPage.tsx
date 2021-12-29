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
          {getBlobData.data.images.map((picture, index) => (
            <GalleryImage key={index}>
              {console.log(picture)}
              <img src={picture.lowResUrl} alt={picture.key} />
            </GalleryImage>
          ))}
          <li></li>
        </GalleryContainer>
      </Background>
    );
  return <div></div>;
};

const GalleryContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  padding-left: 1%;

  & li:last-child {
    flex-grow: 10;
  }

  @media (max-aspect-ratio: 1/1) {
    li {
      height: 30vh;
    }
  }

  @media (max-height: 600px) {
    li {
      height: 80vh;
    }
  }

  @media (max-aspect-ratio: 1/1) and (max-width: 600px) {
    ul {
      flex-direction: row;
    }

    li {
      height: auto;
      width: 100%;
    }
    img {
      width: 100%;
      max-height: 75vh;
      min-width: 0;
    }
  }
`;

const GalleryImage = styled.li`
  height: 40vh;
  flex-grow: 1;
  margin-right: 2rem;
  margin-top: 2rem;

  & img {
    border-radius: 2rem;
    box-shadow: 0 2px 3px rgb(0 0 0 / 24%);
    max-height: 100%;
    min-width: 100%;
    object-fit: cover;
    vertical-align: bottom;
  }
`;

const Background = styled.div`
  background-color: whitesmoke;
`;
