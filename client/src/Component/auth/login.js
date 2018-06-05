import React from 'react';
class Login extends React.Component {
  render() {
      return (
        <div>
          {/*?php
  if(Session::has('auth'))
    header("location:".route('admin','index'));
  ?*/}
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <title>Đăng Nhập Tài Khoản</title>
          {/* <meta name="description" content />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="all,follow" />
          <base href="<?= asset() ?>" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" />
          theme stylesheet */}
          <link rel="stylesheet" href="source/admin/css/style.default.css" id="theme-stylesheet" />
          Favicon
          <link rel="shortcut icon" href="favicon.png" />
          <div className="page login-page">
            <div className="container">
              <div className="form-outer text-center d-flex align-items-center">
                <div className="form-inner" id="loginBox">
                  <div className="logo text-uppercase"><strong className="text-primary">Đăng Nhập</strong><strong><span className="text-info">Tài Khoản</span></strong></div>
                  <form id="login-form" method="post">
                    <div className="form-group">
                      <label htmlFor="login-username" className="label-custom">Tài Khoản</label>
                      <input id="login-username" type="text" name="loginUsername" required="Vui lòng nhập tên tài khoản" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="login-password" className="label-custom">Mật Khẩu</label>
                      <input id="login-password" type="password" name="loginPassword" required="Vui lòng nhập mật khẩu" />
                    </div>
                  </form>
                  <button id="login" className="btn btn-primary">Đăng Nhập</button>
                  <a href="#" className="forgot-pass">Quên Mật Khẩu?</a>
                  {/*?php include('add.php') ?*/}
                  <div style={{minHeight: 50}} />
                  <div className="alert alert-danger" role="alert" id="error" hidden>
                    Invalid username or password
                  </div>
                </div>
                <div className="copyrights text-center">
                  <p>Design by <a href="https://bootstrapious.com" className="external">Bootstrapious</a></p>
                </div>
              </div>
            </div>
          </div>
            {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js"></script>
            <script src="source/admin/js/front.js"></script>
            <script src="source/admin/vendor/jquery-validation/jquery.validate.min.js"></script>
            <script src="source/admin/vendor/jquery.cookie/jquery.cookie.js"> </script>
            <script src="source/admin/js/grasp_mobile_progress_circle-1.0.0.min.js"></script>
            <script src="source/admin/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
            <script src="source/js/auth.js"></script>
            <script type="text/javascript">
            $(document).ready(function(){
                $("#matkhau").keyup(function() {
                passwordStrength($(this).val());
                });
            });
            </script> */}
       
        </div>
      );
    }
  }


  export default Login;