import React from 'react';
class Profile extends React.Component {
  render() {
      return (
        <div>
          <link rel="stylesheet" href="source/css/profile.css" />
          <aside className="profile-card">
            <header>
              {/* here’s the avatar */}
              <a target="_blank" href="<?= route('page','profile') ?>">
                <img src="source/img/layout/profile.png" className="hoverZoomLink" />
              </a>
              {/* the username */}
              <h1 id="user-name">{/*?= Session::get('auth')-*/}displayName ?&gt;</h1>
              {/* and role or location */}
              <h2>{/*?= Session::get('auth')-*/}roleName ?&gt;</h2>
            </header>
            {/* bit of a bio; who are you? */}
            {/*?php $item = User::find(Session::get('auth')-*/}id) ?&gt;
            <div className="profile-bio">
              <p>
                Địa chỉ: 
                <br />
                Liên hệ: 
                <br />
                Email: 
              </p>
            </div>
            {/* some social links to show off */}
            <ul className="profile-social-links">
              <li>
                <a target="_blank" href="https://www.facebook.com/tranquoc020297">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://twitter.com/tranquoc020297">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/tranquoc020297">
                  <i className="fa fa-github" />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.instagram.com/tranquoc020297">
                  <i className="fa fa-instagram" />
                </a>
              </li>
            </ul>
            <div className="container row">
              <div className="col-4">
                <a style={{float: 'right'}} href="localhost:3000"><i className="fa fa-home" />Trang chủ</a>
              </div>
              <div className="col-4">
                <a style={{float: 'right'}} href="<?=route('auth','logout') ?>"><i className="fa fa-sign-out" />Đăng xuất</a>
              </div>
              <div className="col-4">
                <a href="#" id="loadForm" data-toggle="modal" data-target="#userModal">
                  <i className="fa fa-pencil-square-o" aria-hidden="true" />
                  Sửa thông tin
                </a>
              </div>
            </div>
          </aside>
          <div className="modal fade" id="userModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-md" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Chỉnh sửa thông tin</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form id="uploadForm">
                    <input type="text" name="id" id="id" hidden defaultValue="<?= Session::get('auth')->id ?>" />
                    <div className="row">
                      <div className="form-group col-6">
                        <label htmlFor="tenhienthi" className="col-form-label">Tên Hiển Thị</label>
                        <input className="form-control" type="email" name="tenhienthi" id="tenhienthi" />
                      </div>
                      <div className="form-group col-6">
                        <label htmlFor="diachi" className="col-form-label">Địa Chỉ</label>
                        <input className="form-control" type="text" name="diachi" id="diachi" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-6">
                        <label htmlFor="dienthoai" className="col-form-label">Điện Thoại</label>
                        <input className="form-control" type="text" name="dienthoai" id="dienthoai" />
                      </div>
                      <div className="form-group col-6">
                        <label htmlFor="email">Email</label>
                        <input className="form-control" type="email" name="email" id="email" />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-warning" data-dismiss="modal">Close</button>
                  <button id="saveUser" type="button" className="btn btn-info">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  export default Profile;