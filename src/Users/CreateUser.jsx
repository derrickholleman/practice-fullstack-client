import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createUser } from "../utils/api/index";
import { useHistory, Link } from "react-router-dom";
const dayjs = require("dayjs");

const CreateUser = () => {
  const initialFormState = {
    name: "",
    age: "",
    city: "",
    address: "",
    birthday: "",
    email: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const history = useHistory();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(formData);
    history.push("/users");
    setFormData({ ...initialFormState });
  };

  return (
    <div>
      <Link to="/users">Back to user list</Link>
      <h1>Add a new user</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            required
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="age">Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Select your age"
            min="0"
            id="age"
            required
            onChange={handleChange}
            value={formData.age}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="city">City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your city"
            id="city"
            onChange={handleChange}
            value={formData.city}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="address">Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your address"
            id="address"
            onChange={handleChange}
            value={formData.address}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="birthday">Birthday</Form.Label>
          <Form.Control
            type="date"
            id="birthday"
            required
            onChange={handleChange}
            value={formData.birthday}
            max={dayjs().format("YYYY-MM-DD")}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            id="email"
            onChange={handleChange}
            value={formData.email}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreateUser;
