import React from 'react';
class Addauth extends React.Component {
    render() {
      return (
        <div>
          <button style={{float: 'right'}} type="button" className="btn btn-info" data-toggle="modal" data-target="#signUpModal">Đăng Ký</button>
          <div className="modal fade" id="signUpModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-md" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Tài khoản mới</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <h4 id="message" />
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="tendangnhap" className="label-custom">Tên Đăng Nhập</label>
                        <input type="text" name="tendangnhap" id="tendangnhap" />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="tenhienthi" className="label-custom">Tên Hiển Thị</label>
                        <input type="text" name="tenhienthi" id="tenhienthi" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <label htmlFor="ngaysinh" className="label-custom">Ngày Sinh</label>
                        <input type="text" name="ngaysinh" id="ngaysinh" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="matkhau" className="label-custom">Mật Khẩu</label>
                        <input type="password" name="matkhau" id="matkhau" />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="nhaplaimatkhau" className="label-custom">Nhập Lại Mật Khẩu</label>
                        <input type="password" name="nhaplaimatkhau" id="nhaplaimatkhau" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="diachi" className="label-custom">Địa Chỉ</label>
                        <input type="text" name="diachi" id="diachi" />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="dienthoai" className="label-custom">Điện Thoại</label>
                        <input type="text" name="dienthoai" id="dienthoai" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="email" className="label-custom">Email</label>
                        <input type="email" name="email" id="email" />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="captcha" className="label-custom">Captcha</label>
                        <input type="text" name="captcha" id="captcha" />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <img id="captchaImage" src="source/captcha/bj.jpg" width={100} alt="k thể tải captcha" />
                  <a href="javascript:;"><img id="reload" src="source/captcha/reload.png"  /></a>
                  <button type="button" className="btn btn-warning" data-dismiss="modal">Thoát</button>
                  <button id="signUp" type="button" className="btn btn-primary">Đăng ký</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  export default Addauth;