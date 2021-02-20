import React from 'react';

 const Header = () => {
    return(  
        <nav class="navbar navbar-expand-lg navbar-light bg-danger">
  <a class="navbar-brand" href="#">Navbar</a>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Add Product</a>
      </li>  
    </ul>
  </div>
</nav>
    )  
}

export default Header;