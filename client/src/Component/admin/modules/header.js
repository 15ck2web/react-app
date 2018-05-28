import React from 'react';
class header extends Component {
  
    render () {
      return (
  
        <header className="header">
          <nav className="navbar">
            <div className="container-fluid">
              <div className="navbar-holder d-flex align-items-center justify-content-between">
                <div className="navbar-header"><a id="toggle-btn" href="#" className="menu-btn"><i className="icon-bars"> </i></a><a href="index.html" className="navbar-brand">
                    <div className="brand-text d-none d-md-inline-block" /></a></div>
                <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
                  <li className="nav-item dropdown"> <a className="navbar-brand" href="http://localhost:21212/phpMVC/"><i className="fa fa-home" aria-hidden="true" />Trang Chủ<span className="sr-only" /></a>
                    <ul aria-labelledby="notifications" className="dropdown-menu">
                      <li />
                      <li />
                      <li />
                      <li />
                      <li />
                    </ul>
                  </li>
                  <li className="nav-item dropdown"> 
                    <ul aria-labelledby="notifications" className="dropdown-menu">
                      <li />
                      <li><a rel="nofollow" href="#" className="dropdown-item d-flex"> 
                        </a></li><a rel="nofollow" href="#" className="dropdown-item d-flex">
                      </a><li><a rel="nofollow" href="#" className="dropdown-item d-flex" /><a rel="nofollow" href="#" className="dropdown-item d-flex"> 
                        </a></li><li><a rel="nofollow" href="#" className="dropdown-item all-notifications text-center"> <strong> <i className="fa fa-envelope" />Read all messages  </strong></a></li>
                    </ul>
                  </li>
                  <li className="nav-item"><a href="<?= route('auth','logout') ?>" className="nav-link logout"><i className="fa fa-sign-out" />Logout</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      );
    }
  }
  export default header;