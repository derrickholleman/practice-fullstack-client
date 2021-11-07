import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { readUser, updateUser } from "./utils/api/index";
import { useParams, useHistory } from "react-router-dom";
import dayjs from "dayjs";

const EditUser = () => {
  const { userId } = useParams();
  const history = useHistory();
  const [user, setUser] = useState({});

  useEffect(() => {
    readUser(userId).then(setUser);
  }, [userId]);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = () => {
    updateUser(user);
    // refresh the page on submit
    history.go();
  };

  // Modal State
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    // set form data to default on close
    readUser(userId).then(setUser);
  };
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="warning" onClick={handleShow}>
        Edit User
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="name">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                required
                id="name"
                value={user.name}
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
                value={user.age}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="city">City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your city"
                id="city"
                onChange={handleChange}
                value={user.city}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="address">Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your address"
                id="address"
                onChange={handleChange}
                value={user.address}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="birthday">Birthday</Form.Label>
              <Form.Control
                type="date"
                id="birthday"
                required
                onChange={handleChange}
                value={dayjs(user.birthday).format("YYYY-MM-DD")}
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
                value={user.email}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditUser;
