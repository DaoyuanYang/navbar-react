import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./NavigationBar.css";

export const NavigationBar = () => (
  <nav>
    <p className="title">
      <b> Dom's Company </b>
    </p>
    <ul>
      <li>
        <a href="/"> Home </a>
      </li>
      <li>
        <a href="/about"> About </a>
      </li>
      <li>
        <a href="/contact"> Contact </a>
      </li>
    </ul>
  </nav>
);
