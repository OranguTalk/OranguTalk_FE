import { Desktop, Mobile } from "./Assets/MediaQuery/MediaQuery";
import GlobalCss from "./Components/Common/GlobalCss";
import Routes from './Routes/Routes';
import {ReactComponent as TextPicLogo} from '../src/Assets/Logo/TextPicLogo.svg';
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
        <TextPicLogo />
        모바일만 되지롱 ~ 
      </Desktop>
      
    </>
  );
}

export default App;
