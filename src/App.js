import styled from "styled-components";
import MainComponent from "./MainComponent";
import ShowToast from "./common/ShowToast";
import FlexBox from "./common/FlexBox";
import NavBar from "./NavBar";
import Banner from "./Banner";

const Wrapper = styled(FlexBox)`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 80vh;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;
  margin-top: 8rem;
`;

function App() {
  return (
    <div className="App">
      <ShowToast />
      <NavBar />
      <Wrapper>
        <Banner />
        <MainComponent />
      </Wrapper>
    </div>
  );
}

export default App;
