import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import axios from "axios";
import Home from './Views/Home';
import Login from './Views/Login';
import Sidebar from './Components/Sidebar';
import Navegacion from './Components/Navegacion';
import {Row,Col} from 'react-bootstrap';
import Torneos from "./Views/Torneos";
let {REACT_APP_URL} = process.env;
axios.defaults.baseURL =REACT_APP_URL;
function App() {

  return (
    <div className="App vh-100 vw-100">
      <Row className="h-100 vw-100 m-0">
        <Col md={2} className="p-0">
          <Sidebar></Sidebar>
        </Col>
        <Col md={10} className="p-0">      
        <Navegacion></Navegacion>
        <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/torneos" component={Torneos}></Route>
        </Switch>
      </Router></Col>
      </Row>

    </div>
  );
}

export default App;
