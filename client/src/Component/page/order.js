import React from 'react';
class Order extends React.Component {
  render() {
      return (
  
        <div style={{margin: '10% 0'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                {/*?php if(!Session::has('auth')): ?*/}
                <form id="formDangNhap" action="<?= route('auth','login') ?>">
                  <h3 className="alert alert-warning">Đăng nhập để tiếp tục</h3>
                  <label htmlFor="login-username">Tài khoản</label>
                  <input className="form-control" type="text" id="login-username" name="login-username" placeholder="Tài khoản" required />
                  <label htmlFor="login-password">Mật khẩu</label>
                  <input className="form-control" type="password" id="login-password" name="login-password" placeholder="Mật khẩu" required />
                </form>
                <input id="login" className="btn btn-outline-info" type="button" defaultValue="Đăng nhập" />
                <button type="button" className="btn btn-outline-warning" data-toggle="modal" data-target="#signUpModal">Chưa có tài khoản?</button>
                <div className="modal fade" id="signUpModal" tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-md">
                    <div className="modal-content">
                      <div className="modal-body">
                        <form id="formDangky" action="<?= route('auth','save') ?>">
                          <h4 id="message" />
                          <div className="row form-group">
                            <div className="col-md-3">
                              <label htmlFor="tenhienthi">Họ tên</label>
                            </div>
                            <div className="col-md-9">
                              <input className="form-control" type="text" id="tenhienthi" name="tenhienthi" placeholder="Họ tên" required />
                            </div>
                          </div>
                          <div className="row form-group">
                            <div className="col-md-3">
                              <label htmlFor="email">Email</label>
                            </div>
                            <div className="col-md-9">
                              <input className="form-control" type="email" id="email" name="email" placeholder="email" required />
                            </div>
                          </div>
                          <div className="row form-group">
                            <div className="col-md-3">
                              <label htmlFor="ngaysinh">Ngày sinh</label>
                            </div>
                            <div className="col-md-9">
                              <input className="form-control" type="date" name="ngaysinh" id="ngaysinh" />
                            </div>
                          </div>
                          <div className="row form-group">
                            <div className="col-md-3">
                              <label htmlFor="diachi">Địa chỉ</label>
                            </div>
                            <div className="col-md-9">
                              <input className="form-control" type="text" id="diachi" name="diachi" placeholder="địa chỉ" required />
                            </div>
                          </div>
                          <div className="row form-group">
                            <div className="col-md-3">
                              <label htmlFor="dienthoai">Điện thoại</label>
                            </div>
                            <div className="col-md-9">
                              <input className="form-control" type="text" id="dienthoai" name="dienthoai" placeholder="điện thoại" required />
                            </div>
                          </div>
                          <div className="row form-group">
                            <div className="col-md-3">
                              <label htmlFor="tendangnhap">Tên đăng nhập</label>
                            </div>
                            <div className="col-md-9">
                              <input className="form-control" type="text" id="tendangnhap" name="tendangnhap" placeholder="Tên đăng nhập" />
                            </div>
                          </div>
                          <div className="row form-group">
                            <div className="col-md-3">
                              <label htmlFor="matkhau">Mật khẩu</label>
                            </div>
                            <div className="col-md-9">
                              <input className="form-control" type="password" id="matkhau" name="matkhau" placeholder="Mật khẩu" />
                              <div className="progress">
                                <div className="progress-bar jak_pstrength" role="progressbar" style={{width: '0%', lineHeight: '70%'}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                              </div>
                            </div>
                          </div>
                          <div className="row form-group">
                            <div className="col-md-3">
                              <label htmlFor="matkhau">Nhập lại mật khẩu</label>
                            </div>
                            <div className="col-md-9">
                              <input className="form-control" type="password" id="nhaplaimatkhau" name="matkhau" placeholder="Nhập lại mật khẩu" />
                            </div>
                          </div>
                          <div className="row form-group">
                            <div className="col-md-3">
                              <label htmlFor="name">Mã xác nhận</label>
                            </div>
                            <div className="col-md-9 row">
                              <div className="col-md-5">
                                <input className="form-control" type="text" name="captcha" id="captcha" />
                              </div>
                              <div className="col-md-7">
                                <img id="captchaImage" src="source/captcha/bj.jpg" width={100} alt="k thể tải captcha" />
                                <a href="javascript:;"><img id="reload" src="source/captcha/reload.png" /></a>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-warning" data-dismiss="modal" aria-label="Close">
                          Thoát
                        </button>
                        <input id="signUp" className="btn btn-info" type="button" defaultValue="Đăng ký" />
                      </div>
                    </div>
                  </div>
                </div>
             
                <h4>Xin chào </h4>
                <h5>Đây là giỏ hàng của bạn</h5>
 
              </div>
              <div className="col-md-7">
                <div className="container">
                  <h2>Chi Tiết Đơn Hàng</h2>
                  <div id="ordered-item">
            
                    <div className="row">
                    
                      <div className="col-md-4">
                        <div className=" ordered-cart thumbnail">
                          <a className="x-cart" onclick="removeOrderedItem(<?= $item['item']->MaSP ?>)" href="javascript:;"><i className="fa fa-times" aria-hidden="true" /></a>
                          <a href="<?= route('page','detail',$item['item']->MaSP) ?>" target="_blank">
                            <img src="source/img/product/3/1.jpg" alt="Lights" height={100} style={{width: '100%'}} />
                            <div className="caption">
                              <p className="text-animate">Giá: </p>
                            </div>
                          </a>
                        </div>
                      </div>
                 
                    </div>
                    <h4 id="ordered-price">Tổng tiền: VNĐ</h4>
                    
                    <input id="checkout" type="submit" defaultValue="Đặt hàng" className="btn btn-outline-info" />
                   
                    <input id="checkout" type="submit" defaultValue="Đặt hàng" className="btn btn-outline-info" disabled />
                
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  export default Order;