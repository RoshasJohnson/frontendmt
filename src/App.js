import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignIn from "./pages/Singin";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path = "/" element = {<Homepage/>}/>
          <Route path = "/login" element = {<SignIn/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
