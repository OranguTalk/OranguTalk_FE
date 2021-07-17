import { Desktop, Mobile } from "./Assets/MediaQuery/MediaQuery";
import GlobalCss from "./Components/Common/GlobalCss";
import Routes from './Routes/Routes';

function App() {
  return (
    <>
      <GlobalCss />
      {/* 모바일 */}
      <Mobile>
        <Routes />
      </Mobile>
      {/* 데스크톱 */}
      <Desktop>
        모바일만 되지롱 ~ 
      </Desktop>
      
    </>
  );
}

export default App;
