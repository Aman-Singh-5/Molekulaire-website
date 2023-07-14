import React from 'react';
import { Link } from 'react-router-dom';
import { TfiSearch } from 'react-icons/tfi';
import { BsPerson } from 'react-icons/bs';
import { PiShoppingBagLight } from 'react-icons/pi';
export const Header = () => {
    return(
        <>
        <div className="container-fluid nav-box">
          <div className="row">
          <div className='image-logo'> <img src="images/logo.png"/></div>
            <div className="col-3 col-lg-5">
            <nav class="navbar navbar-expand-lg bg-trasparent">
              <div class="container-fluid">
  
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link"  to="/shop">Shop</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="#">Our Story</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="#">Science</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
            </div>
            <div className="col-md-2 nav-logo">
              <Link to="/"><img src="images/logo.png" style={{width:"100%"}}/></Link>
            </div>
            <div className="col-7 col-lg-5 nav-right">
              <div className="reward-div"> <a class="reward" href="#">Rewards</a></div>
              <div className="nav-icon-box">
                <div className="nav-icon"><a href='#'><TfiSearch/></a></div>
                <div className="nav-icon"><a href='#'><BsPerson/></a></div>
                <div className="nav-icon"><a href='#'><PiShoppingBagLight/></a></div>
              </div>
            </div>
          </div>
        </div>
           
        </>
    );
}