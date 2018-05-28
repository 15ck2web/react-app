import React from 'react';
class profile extends Component {
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
              <h1>{/*?= Session::get('auth')-*/}displayName ?&gt;</h1>
              {/* and role or location */}
              <h2>{/*?= Session::get('auth')-*/}roleName ?&gt;</h2>
            </header>
            {/*?php $item = User::find(Session::get('auth')-*/}id) ?&gt;
            <div className="profile-bio">
              <p>
                Địa chỉ: {/*?= $item-*/}DiaChi ?&gt;
                <br />
                Liên hệ: {/*?= $item-*/}DienThoai?&gt;
                <br />
                Email: {/*?= $item-*/}Email?&gt;
              </p>
            </div>
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
                <a target="_blank" href="https://www.instagram.com/ln_gach">
                  <i className="fa fa-instagram" />
                </a>
              </li>
            </ul>
            <div className="container row">
              <div className="col-6">
                <a href="<?=route('auth','logout') ?>"><i className="fa fa-home" />Trang chủ</a>
              </div>
              <div className="col-6">
                <a href="<?=route('auth','logout') ?>"><i className="fa fa-sign-out" />Đăng xuất</a>
              </div>
            </div>
          </aside>
        </div>
      );
    }
  }
  export default profile;