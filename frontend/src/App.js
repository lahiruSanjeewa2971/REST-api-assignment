import "./App.css";
import Header from "./components/Header";
import AddNewService from "./components/services/AddService";
import AllServices from "./components/services/AllServices";
import AllservicesINTERFACE from "./components/services/interface/AllServices";

import EditItem from "./components/services/EditItem";
import Seller from "./components/services/seller";
import Login from "./components/login/login";
import Register from "./components/login/Register";
import SellerRegister from "./components/seller-login/sellerRegister";
import SellerLogin from "./components/seller-login/sellerLogin";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Container, Row, Col } from "reactstrap";


function App() {
  return (
    <Router>
      <div className="app">
        <Container>
          <Row>
            <Col>
              <Header />
            </Col>
          </Row>

          <Row>
            <Col>
              <Route path="/" exact component={AllservicesINTERFACE} />
              
              <Route path="/edititem/:serviceid" exact component={EditItem} />
              <Route path="/addnewservice" exact component={AddNewService} />
              <Route path="/sellers" component={Seller} />
              <Route path="/sellers" component={AllServices} />
              <Route path='/login'  component= {Login} />
              <Route path='/register' component={Register}/>
              <Route path='/sellerRegister' component={SellerRegister}/>
              <Route path='/sellerLogin' component={SellerLogin}/>



            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
