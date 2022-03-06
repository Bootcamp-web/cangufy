import React from 'react';
import Link from 'next/link';
import { Nav, Button } from 'react-bootstrap';

const Menu = () => {

 
  return (
    

    <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-xl">  
        <div className="collapse navbar-collapse" id="navbarsExample07XL">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Parents">
                <a className="nav-link">Parents</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Nanny">
                <a className="nav-link">Nanny</a>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              <Button className="nav-link">
                  Login
              </Button>
            <li className="nav-item text-nowrap">
              <Button className="nav-link">
                  Signup
              </Button>
            </li>
            </li>
          </ul>
        </div>
      </div>
    </Nav>
    
    

    // <ul>
    //   <li>
    //     <Link href="/">Home</Link>
    //   </li>
    //   <li>
    //     <Link href="/Parents">Parents</Link>
    //   </li>
    //   <li>
    //     <Link href="/Nanny">Nanny</Link>
    //   </li>
    // </ul>
  );
};

export default Menu;