import { useState } from "react";
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
  };

  return (
    <Card>
      <input type="file" multiple={false} onChange={handleImageChange} />
      <StyledButton onClick={uploadFile}>Choose Picture</StyledButton>
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
