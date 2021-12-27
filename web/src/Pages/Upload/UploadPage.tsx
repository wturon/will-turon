import { useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import styled from "styled-components";
import { uploadToBlob } from "./UploadPageService";

export const UploadPage = (): JSX.Element => {
  const [fileSelected, setFileSelected] = useState<File>();

  const handleImageChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    const fileList = e.target.files;
    console.log("file list");
    if (!fileList) return;
    console.log(fileList[0]);
    setFileSelected(fileList[0]);
  };

  const uploadFile = function (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) {
    if (fileSelected) {
      uploadToBlob(fileSelected);
    }
    // line above ^ gives me the error below
  };

  return (
    <Card>
      <input type="file" multiple={false} onChange={handleImageChange} />
      <StyledButton onClick={uploadFile}>Choose Picture</StyledButton>
      {/* {images.length > 0 && (
        <StyledButton onClick={() => uploadToBlob(images[0].file)}>
          Upload Images
        </StyledButton>
      )} */}
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
