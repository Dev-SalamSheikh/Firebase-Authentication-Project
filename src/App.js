import "./App.css";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./components/Signup";
import { Col, Container, Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { UserAuthContextProvider } from "./contexts/useAuthContext";
import Home from "./components/Home";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoutes>
                    <Home />
                  </ProtectedRoutes>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
