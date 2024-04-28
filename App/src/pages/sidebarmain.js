// src/components/SidebarMain.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/sidebar.css';

const SidebarMain = () => {
  return (
    <div className="sidebar">
      <h1>Resourcely</h1>
      <NavLink to="/new-request" className={({ isActive }) => isActive ? 'active request-button' : 'request-button'}>
        Request
      </NavLink>
      <ul>
        <li>
          <NavLink to="/home" className={({ isActive }) => isActive ? 'active' : ''}>
            Feed
          </NavLink>
        </li>
        <li>
          <NavLink to="/requests" className={({ isActive }) => isActive ? 'active' : ''}>
            Requests
          </NavLink>
        </li>
        <li>
          <NavLink to="/offers" className={({ isActive }) => isActive ? 'active' : ''}>
            Offers
          </NavLink>
        </li>
        <li>
          <NavLink to="/map" className={({ isActive }) => isActive ? 'active' : ''}>
            Resource Map
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={({ isActive }) => isActive ? 'active' : ''}>
            Profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMain;
