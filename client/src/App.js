import { Desktop, Mobile } from './Assets/MediaQuery/MediaQuery';
import GlobalCss from './Components/Common/GlobalCss';
import Routes from './Routes/Routes';
// import { ReactComponent as TextPicLogo } from '../src/Assets/Logo/TextPicLogo.svg';
function App() {
  return (
    <>
      <GlobalCss />
      <Mobile>
        <Routes />
      </Mobile>
      <Desktop>모바일 화면만 제공합니다.</Desktop>
    </>
  );
}

export default App;
