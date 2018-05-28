import React from 'react';
class header extends Component {
    render() {
      return (
  
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="http://localhost:21212/phpMVC/"><i className="fa fa-home" aria-hidden="true" />Trang Chủ<span className="sr-only" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Liên Hệ</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Sản Phẩm
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {/*?php
  
                          $types = ProductType::all();
                          foreach($types as $item){
                      ?*/}
                  <a className="dropdown-item" href="<?= route('page','type',$item->MaLoaiSP )?>">{/*?= $item-*/}TenLoaiSP ?&gt;</a>
                  {/*?php	
                          }
                      ?*/}
                </div>
              </li>	
              {/* <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Bảng Giá
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a class="dropdown-item" href="#"> 1-5 tỷ</a>
                          <a class="dropdown-item" href="#"> 5-10 tỷ</a>
                          <a class="dropdown-item" href="#"> 10-20 tỷ</a>
                          <a class="dropdown-item" href="#"> 20-50 tỷ</a>
                          <a class="dropdown-item" href="#"> Trên 50 tỷ</a>
                      </div>
                  </li> */}
            </ul>
            <ul className="navbar-nav my-auto">
              <li className="nav-item dropdown">
                <button className="btn btn-outline-info my-2 my-sm-0" id="navbarDropdownCart" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span id="cartStatus" className="fa fa-shopping-cart">
                    {/*?php if(Session::has('cart')): ?*/}
                    ({/*?= Session::get('cart')-*/}totalQty ?&gt;)
                    {/*?php else: echo "(0)" ?*/}
                    {/*?php endif;?*/}
                  </span>
                  <i className="fa fa-chevron-down" />
                </button>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownCart">
                  <div id="cartBody">
                    {/*?php if(Session::has('cart')): ?*/}
                    {/*?php foreach(Session::get('cart')-*/}items as $item): ?&gt;
                    <a className="dropdown-item" onclick="removeCartItem(<?= $item['item']->MaSP ?>)">
                      <span><img width={50} src="source/img/product/<?= trim($item['item']->MaLoaiSP)?>/<?=trim($item['item']->HinhSP)?>" alt /></span>
                      <span>{/*?= $item['item']-*/}TenSP ?&gt;</span>
                      <span>{/*?= number_format($item['item']-*/}GiaSP) ?&gt;</span>
                      <span>x{/*?= $item['qty'] ?*/}</span>
                      <span className="badge badge-pill badge-warning"><i className="fa fa-times" aria-hidden="true" /></span>
                    </a>
                    {/*?php endforeach; ?*/}
                    {/*?php endif;?*/}
                  </div>
                  {/*?php if(Session::has('cart')): ?*/}
                  <div className="dropdown-divider" />
                  <div id="totalPrice" className="dropdown-item">Tổng: <span>{/*?= number_format(Session::has('cart')?Session::get('cart')-*/}totalPrice:0) ?&gt;</span></div>
                  <div className="dropdown-divider" />
                  <div id="removeAllCart" className="dropdown-item"><button className="btn btn-outline-warning">Xóa hết giỏ hàng</button></div>
                  <div className="dropdown-divider" />
                  <a href="<?= route('page','order') ?>" className="dropdown-item" id="orderCart">
                    <button className="btn btn-info">
                      <span>
                        Đặt hàng
                        <i className="fa fa-angle-right" aria-hidden="true" />
                      </span>
                    </button>
                  </a>
                  {/*?php else: ?*/}
                  <div style={{display: 'none'}} className="dropdown-divider" />
                  <div style={{display: 'none'}} id="totalPrice" className="dropdown-item">Tổng: <span>{/*?= number_format(Session::has('cart')?Session::get('cart')-*/}totalPrice:0) ?&gt;</span></div>
                  <div style={{display: 'none'}} className="dropdown-divider" />
                  <div style={{display: 'none'}} id="removeAllCart" className="dropdown-item"><button className="btn btn-outline-warning">Xóa hết giỏ hàng</button></div>
                  <div style={{display: 'none'}} className="dropdown-divider" />
                  <a style={{display: 'none'}} href="<?= route('page','order') ?>" className="dropdown-item" id="orderCart">
                    <button className="btn btn-info">
                      <span>
                        Đặt hàng
                        <i className="fa fa-angle-right" aria-hidden="true" />
                      </span>
                    </button>
                  </a>
                  {/*?php endif; ?*/}
                </div>
              </li>
              <li className="nav-item">&nbsp;</li>
              <li className="nav-item">
                <form className="form-inline my-2 my-lg-0" action="<?= route('page','search')?>" method="GET">
                  <input className="form-control mr-sm-2" name="key" type="search" placeholder="Search" aria-label="Search" />
                  <input className="btn btn-outline-info my-2 my-sm-0" type="submit" defaultValue="Search" />
                </form>
              </li>
              <li className="nav-item">&nbsp;</li>
              {/*?php if(Session::has('auth')): ?*/}
              <li className="nav-item dropdown">
                <button className="btn btn-outline-info my-2 my-sm-0" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span>
                    {/*?= Session::get('auth')-*/}displayName ?&gt;
                    <i className="fa fa-chevron-down" />
                  </span>
                </button>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="<?= route('page','profile') ?>">Thông tin cá nhân</a>
                  {/*?php if(Session::get('auth')-*/}role == 1): ?&gt;
                  <a className="dropdown-item" href="<?= route('admin','index') ?>">Trang quản trị</a>
                  {/*?php endif; ?*/}
                  <a className="dropdown-item" href="<?= route('page','payhistory') ?>">Lịch sử giao dịch</a>
                  <a className="dropdown-item" href="<?= route('auth','logout') ?>">Đăng xuất</a>
                </div>
              </li>
              {/*?php else: ?*/}
              <a href="<?= route('auth','login') ?>"><button className="btn btn-outline-info my-2 my-sm-0"> Đăng nhập</button></a>
              {/*?php endif; ?*/}
            </ul>
          </div>
        </nav>
      );
    }
  }
  export default header;