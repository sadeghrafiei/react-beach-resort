import React from "react";
import ReactDOM from "react-dom";
//import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { RoomProvider } from "./Context";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <RoomProvider>
    <Router>
      <App />
    </Router>
  </RoomProvider>,

  document.getElementById("root")
);

reportWebVitals();
