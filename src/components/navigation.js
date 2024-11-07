import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Learning } from "./Learning";
import { Journal } from "./Journal";
import { Search } from "./Search";
import { Login } from "./Login";
import logo from "../img/legoIcon.png";
import searchIcon from "../img/icon.png";
import { JournalDetail } from "./JournalDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Navigation() {
  return (
    <BrowserRouter>
      <div>
        {/* Header section for the logo and Linh's Home */}
        <header className="text-center py-3 bg-white">
          <Link to="/"></Link>
          <div>
            <a className="navbar-brand" href="/">
              Quantum Educational Center{" "}
            </a>
          </div>
        </header>

        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img
                src={logo}
                alt="Quantum Educational Center Logo"
                style={{ maxWidth: "50px" }}
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="navbar-nav">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/Journal">
                  Resources
                </Link>
                <Link className="nav-link" to="/Learning">
                  Learning
                </Link>
                <Link className="nav-link" to="/About">
                  About
                </Link>
                <Link className="nav-link" to="/Search">
                  <img
                    src={searchIcon}
                    alt="search"
                    style={{ maxWidth: "30px" }}
                  />
                </Link>
              </div>
              <div className="navbar-nav ms-auto">
                <Link className="nav-link login-link" to="/Login">
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Journal" element={<Journal />} />
            <Route path="/Journal/:imageName" element={<JournalDetail />} />
            <Route path="/Learning" element={<Learning />} />
            <Route path="/About" element={<About />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
