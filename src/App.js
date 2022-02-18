import "./App.css";
import Navbar from "./component/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import AddContact from "./component/AddContact";
import EditData from "./component/EditData";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Router>
          <ToastContainer />
        
          <Navbar />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/add">
<AddContact/>
            </Route>

            <Route exact path="/edit/:id">
<EditData/>            </Route>
          </Switch>
        
      </Router>
    </div>
  );
}

export default App;
