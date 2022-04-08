import "./App.css";
import TopBar from "./component/Appbar/TopBar";
import Home from "./pages/Home";
import ListCards from "./pages/ListCards";
import LoginScreen from "./pages/LoginScreen";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </div>
  );
}

export default App;
