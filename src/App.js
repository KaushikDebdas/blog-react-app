import Topbar from "./components/Topbar/Topbar";
import Homepage from "./pages/Homepage/Homepage";
import Singlepage from "./pages/Singlepage/Singlepage";
import Write from "./pages/Write/Write";


function App() {
  return (
    <div className="">
      <Topbar></Topbar>
      <Write></Write>
      {/* <Singlepage></Singlepage> */}
      {/* <Homepage></Homepage> */}
    </div>
  );
}

export default App;
