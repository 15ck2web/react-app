import React from 'react';
class header extends React.Component {
    render() {
      return (
  
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="http://localhost:3000"><i className="fa fa-home" aria-hidden="true" />Trang Chủ<span className="sr-only" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" >Liên Hệ</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Sản Phẩm
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                
                  <a className="dropdown-item" >{}</a>
                 
                </div>
              </li>	
              
            </ul>
            <ul className="navbar-nav my-auto">
              <li className="nav-item dropdown">
                <button className="btn btn-outline-info my-2 my-sm-0" id="navbarDropdownCart" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span id="cartStatus" className="fa fa-shopping-cart">
                   
                  </span>
                  <i className="fa fa-chevron-down" />
                </button>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownCart">
                  <div id="cartBody">
                    
                    <a className="dropdown-item" >
                      <span><img width={50} src="source/img/product/"/></span>
                  
                      <span className="badge badge-pill badge-warning"><i className="fa fa-times" aria-hidden="true" /></span>
                    </a>
                
                  </div>
          
                  <div className="dropdown-divider" />
                  <div id="totalPrice" className="dropdown-item">Tổng: <span></span></div>
                  <div className="dropdown-divider" />
                  <div id="removeAllCart" className="dropdown-item"><button className="btn btn-outline-warning">Xóa hết giỏ hàng</button></div>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" id="orderCart">
                    <button className="btn btn-info">
                      <span>
                        Đặt hàng
                        <i className="fa fa-angle-right" aria-hidden="true" />
                      </span>
                    </button>
                  </a>
            
                  <div style={{display: 'none'}} className="dropdown-divider" />
                  <div style={{display: 'none'}} id="totalPrice" className="dropdown-item">Tổng:</div>
                  <div style={{display: 'none'}} className="dropdown-divider" />
                  <div style={{display: 'none'}} id="removeAllCart" className="dropdown-item"><button className="btn btn-outline-warning">Xóa hết giỏ hàng</button></div>
                  <div style={{display: 'none'}} className="dropdown-divider" />
                  <a style={{display: 'none'}} className="dropdown-item" id="orderCart">
                    <button className="btn btn-info">
                      <span>
                        Đặt hàng
                        <i className="fa fa-angle-right" aria-hidden="true" />
                      </span>
                    </button>
                  </a>
                  
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
    
              <li className="nav-item dropdown">
                <button className="btn btn-outline-info my-2 my-sm-0" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span>
             
                    <i className="fa fa-chevron-down" />
                  </span>
                </button>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" >Thông tin cá nhân</a>
     
                  <a className="dropdown-item" >Trang quản trị</a>
        
                  <a className="dropdown-item" >Lịch sử giao dịch</a>
                  <a className="dropdown-item" >Đăng xuất</a>
                </div>
              </li>
 
              <a ><button className="btn btn-outline-info my-2 my-sm-0"> Đăng nhập</button></a>
   
            </ul>
          </div>
        </nav>
      );
    }
  }
  export default header;