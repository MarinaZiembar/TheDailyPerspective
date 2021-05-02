import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {routes} from './utils/Routes';
import Header from './components/Header';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';


function App() {
  return (
    <Router>

      <Container fluid>
        <Row>
          <Col xs={12}>
            <Header/>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12}>
            <Switch>
              {routes.map((route,i) => (
                <Route
                  key={i}
                  path={route.path}
                  component={route.component}
                />
              ))}
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
