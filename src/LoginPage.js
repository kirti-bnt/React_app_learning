import React, { Component } from "react";
import "./LoginPage.css";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export class LoginPage extends Component {
  render() {
    return (
      <div className="login-component">
        <section className="section-login-form">
          <div className="section-block-form">
            <h4>LOGIN</h4>
            <br />
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </div>

          <div className="section-block">
            <img src="login_img.jpg" alt="" />
          </div>
        </section>
      </div>
    );
  }
}

export default LoginPage;
