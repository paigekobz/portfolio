import React from 'react';
import {Link} from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Navbar() {
  return (
    <nav>
      <h1>Paige’s Personal Portfolio</h1>
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              About
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Link to="/">About Me</Link>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Projects
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Link to="/projects">CMS System with Tags</Link>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </nav>
  );
}

export default Navbar;
