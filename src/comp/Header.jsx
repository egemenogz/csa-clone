import "./Header.css";
import cfaLogoHead from "../assets/cfaLogoHead.webp";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function (props) {
  const [inputValue, setInputValue] = useState("");
  const [btnClicked, setBtnClicked] = useState(true);

  const inputChangeHandler = (e) => {
    const inputValue = e.target.value.trim();
    if (inputValue.length > 0) {
      setBtnClicked(true);
    } else {
      setBtnClicked(false);
    }
    setInputValue(e.target.value);
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const btnClicked = input.trim();
    if (inputValue.length === 0) {
      setBtnClicked(false);
      return;
    }
    props.onSearch(btnClicked);
  }

 

  return (
    <nav className="menu-header">
      <div className="logo">
        <Link to="/">
          <img src={cfaLogoHead} alt="CFA Logo" />
        </Link>
      </div>
      <div className="navbar-mid">
        <form className={`search-product ${!btnClicked ? 'active' : ''}`} onSubmit={formSubmitHandler}>
          <input
            type="search"
            placeholder="Search Product"
            value={inputValue}
            onChange={inputChangeHandler}
          />
          <button type="submit">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#005bab" }}
            />
          </button>
        </form>
      </div>
      <div className="navbar-right">
        <ul>
          <CustomLink to="/sign-up" className="sign">
            Sign up
          </CustomLink>
          <CustomLink to="/log-in" className="log">
            Log in
          </CustomLink>
        </ul>
      </div>
    </nav>
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
