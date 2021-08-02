import React from "react";
import "./navbar.scss";

export default function Navbar() {
  return (
    <div className='navbar'>
      <ul className='ulist'>
        <li className='list'>
          <a href='#home' className='arefer'>Home</a>
        </li>
        <li  className='list'>
          <a href='#skills' className='arefer'>Skills</a>
        </li>
        <li className='list'>
          <a href='#projects' className='arefer'>Projects</a>
        </li>
        <li className='list'>
          <a href='#contact' className='arefer'>Contacts</a>
        </li>
      </ul>
    </div>
  );
}
