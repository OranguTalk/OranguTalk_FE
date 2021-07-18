import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chat from '../Pages/Chat/Chat';
import Main from '../Pages/Main/Main';

const Routes = () => {
  return (
    <Router>
      <Switch>
        {/* 메인 */}
        <Route path="/" exact component={Main} />
        {/* 그 외 라우터는 이 밑으로 연결 */}
        <Route path="/chat" component={Chat} />
      </Switch>
    </Router>
  );
};

export default Routes;
