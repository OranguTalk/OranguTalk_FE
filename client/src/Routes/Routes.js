import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../Components/Main/Main';
import Main2 from '../Components/Main2/Main2';

const Routes = () => {
    return (
        <Router>
            <Switch>
                {/* 메인 */}
                <Route path="/" exact component={Main} />
                {/* 그 외 라우터는 이 밑으로 연결 */}
                {/* 예시 url */}
                <Route path="/main2" component={Main2} />
            </Switch>
        </Router>
    );
};

export default Routes;