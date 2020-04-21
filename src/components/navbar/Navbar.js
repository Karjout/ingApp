import React from "react";
import { Row, Col, Button } from "antd";
import './Navbar.css'
class Navbar extends React.Component {
  render() {
    return (
        <div className="NavBar">
        <Row>
          <Col span={24}>

            <Button className="connexion"  shape="round" size="large">
              Connexion
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Navbar;
