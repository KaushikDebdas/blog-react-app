import Topbar from "./components/Topbar/Topbar";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Settings from "./pages/Settings/Settings";
import Singlepage from "./pages/Singlepage/Singlepage";
import Write from "./pages/Write/Write";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const user = false;
  return (
    <BrowserRouter>
      <Topbar></Topbar>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={ user ? <Homepage/> : <Register />} />
        <Route path="/login" element={ user ? <Homepage/> : <Login />} />
        <Route path="/write" element={ user ? <Write/> : <Register />} />
        <Route path="/settings" element={ user ? <Settings/> : <Register />} />
        <Route path="/post/:postId" element={<Singlepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
