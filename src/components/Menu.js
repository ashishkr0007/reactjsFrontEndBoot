import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink, // Import NavLink from reactstrap
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

export const Menu = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className="navbar navbar-expand-xl bg-info pr-lg-1 pl-sm-5 justify-content-between fst-italic"
        {...args}
      >
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">
                HOME
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/add-course">
                ADD-COURSES
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/view-course">
                VIEW-COURSES
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/update-course">
                UPDATE
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/about">
                ABOUT
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Ashish-Kumar</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

// import React from "react";
// import { Link } from "react-router-dom";
// import { ListGroup, ListGroupItem } from "reactstrap";
// export const Menu = () => {
//   return (
//     <ListGroup>
//       <Link
//         className="list-group-item list-group-item-action list-group-item-primary"
//         color="success"
//         to="/"
//         tag="a"
//         action
//       >
//         HOME
//       </Link>
//       <Link
//         className="list-group-item list-group-item-action list-group-item list-group-item-secondary"
//         to="/add-course"
//         tag="a"
//         action
//       >
//         ADD-COURSES
//       </Link>
//       <Link
//         className="list-group-item list-group-item-action list-group-item list-group-item-success"
//         color="warning"
//         to="/view-course"
//         tag="a"
//         action
//       >
//         VIEW-COURSES
//       </Link>
//       <Link
//         className="list-group-item list-group-item-action list-group-item list-group-item-warning"
//         color="danger"
//         to="#"
//         tag="a"
//         action
//       >
//         UPDATE
//       </Link>
//       <Link
//         className="list-group-item list-group-item-action list-group-item list-group-item-info"
//         color="danger"
//         to="#"
//         tag="a"
//         action
//       >
//         ABOUT-US
//       </Link>
//     </ListGroup>
//   );
// };
