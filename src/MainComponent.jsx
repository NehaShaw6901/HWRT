import React, { useState } from "react";
import styled from "styled-components";
import { FaFileImage } from "react-icons/fa";
import { TfiClose } from "react-icons/tfi";
import FlexBox from "./common/FlexBox";
import { device } from "./common/Responsive";
import { CadmiumGreen, ShamrockGreen, BRIGHT_RED } from "./common/colors";
import { toast } from "react-toastify";
import { Body1, Body2 } from "./common/Headings";
import Spinner from "./common/Spinner";
import { Button } from "./common/Buttons";
import { MedicineDetails } from "./MedicineDetails";
import axios from "axios";

const Wrapper = styled(FlexBox)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Container = styled(FlexBox)`
  position: relative;
  min-height: 5rem;
  width: 60%;
  height: 20vh;
  border: 2px dashed ${ShamrockGreen};
  border-radius: 1rem;
  justify-content: center;
  align-items: center;

  @media ${device.laptop} {
    width: 50%;
    height: 55%;
  }
`;

const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const UploadArea = styled(FlexBox)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  gap: 1rem;
  cursor: pointer;
  padding: 1rem;
`;

const FileDetails = styled(FlexBox)`
  margin-top: 2.5rem;
  width: 70vw;
  min-height: 5rem;
  align-items: center;
  padding: 1rem;
  border: 1px solid ${ShamrockGreen};
  border-radius: 1rem;
  justify-content: space-between;

  @media ${device.laptop} {
    width: 35vw;
  }
`;

const Preview = styled(FlexBox)`
  width: 4.5rem;
  height: 2.5rem;
  justify-content: center;
`;

const DeleteButton = styled(FlexBox)`
  width: 2.5rem;
  height: 2.5rem;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  border: 1px solid ${ShamrockGreen};
  cursor: pointer;
`;

const MainComponent = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [showOutput, setShowOutput] = useState(false);
  const [medicineName, setMedicineName] = useState([]);
  const [synonyms, setSynonyms] = useState([]);
  const [genericName, setGenericName] = useState([]);

  const deleteImage = () => {
    setSelectedFile();
    setShowSpinner(false);
    setShowOutput(false);
  };

  const handleFile = async (file) => {
    try {
      setSelectedFile(file);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target?.files[0];

    if (file) {
      const allowedFormats = ["image/jpeg", "image/png", "image/jpg"];
      const fileSize = file.size / 1024 / 1024; // in MB
      const fileType = file.type;

      if (!allowedFormats?.includes(fileType)) {
        toast.error("Only JPEG, PNG, JPG are allowed");
      } else if (fileSize > 5) {
        toast.error("File size should be less than 5 MB");
      } else {
        setShowSpinner(true);
        handleFile(file);
      }
    }
  };

  //logic here for upload
  const handleFileSubmit = async () => {
    if (!selectedFile) {
      toast.error("No file selected");
      return;
    }
    // const prescriptionFileName = "img1"; // Constant file name img1.jpg
    const formData = new FormData();
    formData.append("images", selectedFile);

    console.log(formData.get("images"), "pritnign hte formdata aresponse");
    const images = formData.get("images");
    console.log(images?.name, "printing the image");
    let imgUrl;
    await axios
      .post(
        "http://localhost:8000/upload-image",
        { image: images },
        {
          headers: {
            "content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        console.log(response.data.imageUrl);
        imgUrl = response.data.imageUrl;
      })
      .catch((error) => {
        console.log(error.message);
      });
    await axios
      .post("http://127.0.0.1:5000/upload", { image: imgUrl })
      .then((response) => {
        console.log(response);
        setSynonyms(response?.data?.synonyms);
        setMedicineName(response?.data?.drugName);
        setGenericName(response?.data?.genericName)
      })
      .catch((error) => {
        console.log(error.message);
      });

    setShowSpinner(false);
    toast.success("File submitted successfully");
    setShowOutput(true);
  };

  return (
    <>
      <Wrapper>
        {!selectedFile ? (
          <Container onChange={handleFileChange}>
            {showSpinner ? (
              <Spinner />
            ) : (
              <FlexBox>
                <HiddenInput
                  type="file"
                  accept="image/jpeg, image/png, image/jpg"
                />
                <UploadArea>
                  <img
                    src="/assets/upload.svg"
                    alt="prescription img"
                    width="50px"
                    height="50px"
                  />
                  <Body1 color={ShamrockGreen}>Upload Image</Body1>
                </UploadArea>
              </FlexBox>
            )}
          </Container>
        ) : (
          <FlexBox column justify="space-between" align="center" rowGap="1rem">
            <FileDetails>
              <FlexBox Gap="0.75rem" align="center" justify="center">
                <Preview>
                  <FaFileImage size={40} color={CadmiumGreen} />
                </Preview>
                <FlexBox column align="start">
                  <Body2 bold color={CadmiumGreen}>
                    My Image
                  </Body2>
                </FlexBox>
              </FlexBox>
              <DeleteButton onClick={deleteImage}>
                <TfiClose color={BRIGHT_RED} />
              </DeleteButton>
            </FileDetails>
            <Button primary disabled={showOutput} onClick={handleFileSubmit}>
              Submit
            </Button>
          </FlexBox>
        )}
      </Wrapper>
      {showOutput && (
        <MedicineDetails synonyms={synonyms} medicineName={medicineName} genericName={genericName} />
      )}
    </>
  );
};

export default MainComponent;