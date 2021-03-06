import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chat from '../Pages/Chat/Chat';
import Main from '../Pages/Main/Main';
import LogoPage from '../Pages/Main/LogoPage';
import Guide from '../Pages/Guide/Guide';
import Login from '../Pages/Login/Login';
const Routes = () => {
  return (
    <Router>
      <Switch>
        {/* 메인 */}
        <Route path="/" exact component={LogoPage} />
        {/* 그 외 라우터는 이 밑으로 연결 */}
        <Route path="/chatmain" exact component={Main} />
        <Route path="/chat/:id" exact component={Chat} />
        <Route path="/guide" component={Guide} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default Routes;
