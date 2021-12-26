import { useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import styled from "styled-components";

export const UploadPage = (): JSX.Element => {
  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  return (
    <Card>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <div>
            <StyledButton
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </StyledButton>
            <StyledButton onClick={onImageRemoveAll}>
              Remove all images
            </StyledButton>
            {imageList.map((image, index) => (
              <ImageContainer key={index}>
                <img src={image.dataURL} alt="" width="100" />
                <StyledButton onClick={() => onImageUpdate(index)}>
                  Update
                </StyledButton>
                <StyledButton onClick={() => onImageRemove(index)}>
                  Remove
                </StyledButton>
              </ImageContainer>
            ))}
          </div>
        )}
      </ImageUploading>
      {images.length > 0 && (
        <StyledButton onClick={() => console.log(images)}>
          Upload Images
        </StyledButton>
      )}
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  color: white;
  cursor: pointer;
  padding: 1.5rem;
  border-radius: 0.25rem;
  background-color: ${(props) => props.theme.card.darkGrey};
  :hover {
    background-color: ${(props) => props.theme.card.lightGrey};
  }
  :active {
    background-color: ${(props) => props.theme.card.mediumGrey};
  }
`;
