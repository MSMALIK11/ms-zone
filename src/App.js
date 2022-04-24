import "./App.css";
import TopBar from "./component/Appbar/TopBar";
import Home from "./pages/Home";

import LoginScreen from "./pages/LoginScreen";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
