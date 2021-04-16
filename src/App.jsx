import React from 'react';
import './App.scss';
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/menu";
import Router from "./router";
import 'antd/dist/antd.css';

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Router />
    </BrowserRouter>

  )
}

export default App;
