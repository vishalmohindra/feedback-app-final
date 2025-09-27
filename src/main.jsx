// import React from "react"
// import ReactDOM from "react-dom"
// import { createRoot } from "react-dom/client"
// import App from "./App";

// createRoot(document.getElementById('root')).render(<h1>hello</h1>)


// index.js
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
