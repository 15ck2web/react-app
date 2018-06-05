import React from 'react';
class Highlight extends React.Component {
  render() {
      return (
        <div>
          <div className="marquee" style={{textAlign: 'center'}}>
            <h3>Sản Phẩm Xem Nhiều Nhất</h3>
          </div>
          <div className="container">
          
            <div className="row">
         
              <div className="col-6">
                <div className="row">
                  <div className="col-md-6">
                    <a href="#">
                      <img src="source/img/product/1/5.jpg" width="90%" height="150px" alt="K load dc" />
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="#" >TenSP </a>
                  
                    <a href="#">>xem thêm</a>
                    <p style={{textAlign: 'center'}}>
                      <a href="#">
                        <button className="btn btn-outline-info" style={{float: 'center'}}>
                          Thêm<span className="fa fa-cart-arrow-down" />
                        </button>
                      </a>
                    </p>
                  </div>
                </div>
                <div>&nbsp;</div>  
              </div>
              {/*?php } ?*/}  
            </div>
            <div style={{height: '10%'}}>&nbsp;</div>
            {/*?php } ?*/}
            <div className="news" style={{textAlign: 'center'}}>
              <h3>Sản Phẩm Mới Nhất</h3>
            </div>
            <div style={{height: '10%'}}>&nbsp;</div>
         
            <div className="row">
           
              <div className="col-6">
                <div className="row">
                  <div className="col-md-6">
                    <a href="#"> <img src="source/img/product/2/1.jpg" width="90%" height="150px" alt="K load dc" /></a>
                  </div>
                  <div className="col-md-6">
                    <a href="#">{/*?= $item-*/}TenSP ?&gt;</a>
                    {/*?= substr($item-*/}MoTa,0,150). '...' ?&gt;
                    <a href="#">xem thêm</a>
                    <p style={{textAlign: 'center'}}>
                      <a href="#">
                        <button className="btn btn-outline-info" style={{float: 'center'}}>
                          Thêm<span className="fa fa-cart-arrow-down" />
                        </button>
                      </a>
                    </p>
                  </div>
                </div>
                <div>&nbsp;</div>
              </div>
          
            </div>
            <div style={{height: '10%'}}>&nbsp;</div>
 
            <div className="news" style={{textAlign: 'center'}}>
              <h3>Sản Phẩm Bán Nhiều Nhất</h3>
            </div>
         
            <div className="row">
          
              <div className="col-6">
                <div className="row">
                  <div className="col-md-6">
                    <a href="#"> <img src="source/img/product/3/1.jpg" width="90%" height="150px" alt="K load dc" /></a>
                  </div>
                  <div className="col-md-6">
                    <a href="#">TenSP </a>
                  
                    <a href="#">xem thêm</a> 
                    <p style={{textAlign: 'center'}}>
                      <a href="#">
                        <button className="btn btn-outline-info" style={{float: 'center'}}>
                          Thêm<span className="fa fa-cart-arrow-down" />
                        </button>
                      </a>
                    </p>
                  </div>
                </div>
                <div>&nbsp;</div>
              </div>
              {/*?php } ?*/}  
            </div>
            <div style={{height: '10%'}}>&nbsp;</div>
            {/*?php } ?*/}
          </div>
        </div>
      );
    }
  }
  export default Highlight;