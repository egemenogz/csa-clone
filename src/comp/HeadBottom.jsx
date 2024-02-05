import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./HeadBottom.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function HeadBottom() {
  const list = [
    {
      item: "All Categories",
      link: "/all%categories",
      id: 1,
    },
    {
      item: "Dry Food",
      link: "/dry&food",
      id: 2,
    },
    {
      item: "Delicatessen",
      link: "/delicatessen",
      id: 3,
    },
    {
      item: "Sweet and Confectionary",
      link: "/sweet&confectionary",
      id: 4,
    },
    {
      item: "Beverages",
      link: "/bevereges",
      id: 5,
    },
    {
      item: "Home and Personal Care",
      link: "/home&personal&care",
      id: 6,
    },
    {
      item: "Household",
      link: "/household",
      id: 7,
    },
  ];
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="navbarBot">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {list.map((item) => (
              <CustomLink
                className="navLink"
                to={item.link}
                key={item.id}
              >
                {item.item}
              </CustomLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default HeadBottom;
