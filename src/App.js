import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

import Add from './components/Add';
import Details from './components/Details';
import Edit from './components/Edit';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import View from './components/View';

function App() {
  return(
    <div>
      <Header/>
      <Router>
        <Container >
          <Row>
            <Col md={4}> <Menu/>
        </Col>
        <Col md={8}>
        
          <Routes>
          <Route path = "/" element={<Home/>} exact />
          <Route path = "/add" element={<Add/>} exact />
          <Route path = "/edit/:id" element={<Edit/>} exact />
          <Route path = "/details/:id" element={<Details/>} exact />
          <Route path = "/view" element={<View/>} exact />
          </Routes>

        </Col>
      </Row>
      </Container>
      </Router>
    </div>
  );
}

export default App;
