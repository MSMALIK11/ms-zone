import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// not support react 18
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(

  
    <App />
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
