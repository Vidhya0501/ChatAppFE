import "./App.css";
import Homepage from "./Pages/HomePage";
import Chatpage from "./Pages/ChatPage";
import {BrowserRouter, Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
 <Switch>
 <Route path="/" component={Homepage} exact />
 <Route path="/chats" component={Chatpage} />
 </Switch>
     

    </BrowserRouter>
    </div>
  );
}

export default App;