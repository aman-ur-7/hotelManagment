import React, { useContext, useEffect, useState } from "react";
import "./header.css";
import { MdBusinessCenter } from "react-icons/md";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FiPhone } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { MY_CONTEXT } from "../../hooks/Context";
import IS_LOGGEDIN from "../../function/Functions";

// import Functions from "./function/Functions";

const Header = () => {
  const { setData } = useContext(MY_CONTEXT);
  const [name, setName] = useState();
  const isLoggedIn = IS_LOGGEDIN();

  useEffect(() => {
    setData(name);
  });

  return (
    <section className="header">
      <div>
        <h1>
          {" "}
          <NavLink
            to="/"
            onClick={() => setName("home")}
            style={{
              color: "black",
              textDecoration: "none",
              borderBottom: "none",
            }}
          >
            SLEEP_NIGHT
          </NavLink>
        </h1>
        <hr />
      </div>
      <div>
        <div>
          <MdBusinessCenter />
          <div>
            <span>
              <NavLink
                to="/business"
                onClick={() => setName("business")}
                style={{
                  color: "black",
                  textDecoration: "none",
                  borderBottom: "none",
                }}
              >
                For business
              </NavLink>
            </span>
            <p>Trusted by 5000 Corporates</p>
          </div>
          <hr />
        </div>
      </div>
      <div>
        <div>
          <HiOutlineBuildingOffice2 />
          <div>
            <span>
              <NavLink
                to="/cities"
                style={{
                  color: "black",
                  textDecoration: "none",
                  borderBottom: "none",
                }}
                onClick={() => setName("cities")}
              >
                Cities name
              </NavLink>
            </span>
            <p>Near your city</p>
          </div>
          <hr />
        </div>
      </div>
      <div>
        <div>
          <FiPhone />
          <div>
            <span>
              <NavLink
                to="/contact"
                style={{
                  color: "black",
                  textDecoration: "none",
                  borderBottom: "none",
                }}
                onClick={() => setName("contact")}
              >
                {" "}
                Contact info
              </NavLink>
            </span>
            <p>Call us to book or for inquiry</p>
          </div>
          <hr />
        </div>
      </div>
      <div style={{ gap: "30px" }}>
        <span>
          {isLoggedIn ? (
            <span style={{ color: "black", textDecoration: "none" }}>
              {isLoggedIn.data.name}
            </span>
          ) : (
            <NavLink
              to="/login"
              style={{
                color: "black",
                textDecoration: "none",
                borderBottom: "none",
              }}
              onClick={() => setName("login")}
            >
              Login/Signup
            </NavLink>
          )}
        </span>
        <hr />
      </div>
    </section>
  );
};

export default Header;
