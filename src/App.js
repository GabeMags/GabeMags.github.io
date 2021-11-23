import logo from './logo.svg';
import './App.css';

// React imports
import React, { Component } from "react";

// Bootstrap imports
import "bootswatch/dist/darkly/bootstrap.min.css";
// import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Components
import MyNavbar from "./components/Navbar";


function App() {
  return (
    <Container fluid={true} className="pt-2">
        <MyNavbar />
    </Container>
  );
}

export default App;
