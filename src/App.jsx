import "./App.css";
import Homepage from "./Pages/HomePage";
import Chatpage from "./Pages/ChatPage";
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
     <Route path="/" component={Homepage} exact />
     <Route path="/chats" component={Chatpage} />
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;