import React from 'react';


export default function App(props) {
  return (
    <div>
      <header>
        <div className="collapse bg-dark" id="navbarHeader">
        A
        </div>
        <div className="navbar navbar-dark bg-dark shadow-sm">
        Electronics
        </div>
      </header>
        {props.children}
    </div>
  );
}
