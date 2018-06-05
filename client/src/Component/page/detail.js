import React from 'react';
class Detail extends React.Component {
  
  render() {
    const color = {
      color:'red'
    };
  
      return (
        <div>
          <div className="container"style={color}>
            <p>
              <a href="#" onclick="()">
                <button onclick="()" className="btn btn-outline-info" style={{float: 'right'}}>
                  Thêm<span className="fa fa-cart-arrow-down" />
                </button>
              </a>
            </p>
            <p > TenSP </p>
            <p>Giá: &nbsp;VNĐ</p>
            <p> Mota</p>
            <p> Lượt Xem </p>
            <p> Số Lượng Đã Bán </p>
            <p><img src="source/img/product/5/1.jpg" width="90%" alt="K load dc" /></p>
          </div>
          <div className="container">
            <div className="clearfix" style={{margin: '5% 0'}} />
            <h3 style={{textAlign: 'center'}}>Sản Phẩm Cùng Loại</h3>
            <div className="row">
  
              <div className="col-sm-2">
                <a href="#">
                  <img src="source/img/product/4/1.jpg" alt height={80} width={170} />
                </a>
                <p /><h5>TenSP</h5><p />
                <p /><h6> VNĐ</h6><p />
                <a className="btn btn-info" href="#">Chi tiết <i className="fa fa-chevron-right" /></a>
                <a className="btn btn-info" onclick="()" href="javascipt:;"><i className="fa fa-shopping-cart" /></a>
                <div className="clearfix" style={{margin: '5% 0'}} />
              </div>
           
            </div>
          </div>


            <div className="container">
                <div className="clearfix" style={{margin: '5% 0'}} />
                  <h3 style={{textAlign: 'center'}}>Sản Phẩm Khác Loại</h3>
                <div className="row">
                  <div className="col-sm-2">
                    <a href="#">
                        <img src="source/img/product/6/1.jpg" alt height={80} width={170} />
                    </a>
                    <p /><h5>TenSP </h5><p />
                      <p /><h6>GiaSP VNĐ</h6><p />
                      <a className="btn btn-info" href="#">Chi tiết <i className="fa fa-chevron-right" /></a>
                      <a className="btn btn-info" onclick="()" href="javascipt:;"><i className="fa fa-shopping-cart" /></a>
                  <div className="clearfix" style={{margin: '5% 0'}} />
                </div>

                </div>
            </div>
        </div>
      );
    }
  }
  export default Detail;

