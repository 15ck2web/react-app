import React from 'react';
class sidemenu extends Component {
    render () {
      return (
  
        <nav className="side-navbar">
          <div className="side-navbar-wrapper">
            <div className="sidenav-header d-flex align-items-center justify-content-center">
              <a href="<?= route('admin','profile') ?>">
                <div className="sidenav-header-inner text-center"><img src="source/img/product/5/5.jpg" alt="person" className="img-fluid rounded-circle" />
                  <h2 className="h5 text-uppercase">Thế Giới</h2><span className="text-uppercase">Xe Hơi</span>
                </div>
              </a>
              <div className="sidenav-header-logo"><a href="index.html" className="brand-small text-center"> <strong>B</strong><strong className="text-primary">D</strong></a></div>
            </div>
            <div className="main-menu">
              <ul id="side-main-menu" className="side-menu list-unstyled">                  
                <li className="active"><a href="<?= route('admin','index') ?>"> <i className="icon-home" /><span>Home</span></a></li>
              </ul>
            </div>
            <div className="admin-menu">
              <ul id="side-admin-menu" className="side-menu list-unstyled"> 
                <li> <a href="#pages-nav-list" data-toggle="collapse" aria-expanded="false"><i className="icon-interface-windows" /><span>Quản Lí</span>
                    <div className="arrow pull-right"><i className="fa fa-angle-down" /></div></a>
                  <ul id="pages-nav-list" className="collapse list-unstyled">
                    <li> <a href="<?= route('admin','products') ?>">Sản Phẩm</a></li>
                    <li> <a href="<?= route('admin','producttypes') ?>">Loại Sản Phẩm</a></li>
                    <li> <a href="<?= route('admin','factories') ?>">Hãng Sản Xuất</a></li>
                    <li> <a href="<?= route('admin','users') ?>">Tài Khoản</a></li>
                    <li> <a href="<?= route('admin','usertypes') ?>">Loại Tài Khoản</a></li>
                    <li> <a href="<?= route('admin','bills') ?>">Đơn Đặt Hàng</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
  }
  export default sidemenu;