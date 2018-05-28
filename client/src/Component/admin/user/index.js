import React from 'react';

class index_user extends Component {
    render () {
      return (
        <div>
          <div className="container">
            <div style={{marginTop: '5%', textAlign: 'center'}}>
              <h1>Quản Lí Sản Phẩm</h1>
            </div>
            <div style={{margin: '1% 0', textAlign: 'right'}}>
              {/*?php include('add.php') ?*/}
            </div>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tên Đăng Nhập</th>
                  <th>Tên Hiển Thị</th>
                  <th>Điện Thoại</th>
                  <th>Email</th>
                  <th>Quyền</th>
                  <th style={{textAlign: 'right'}}>Thao Tác</th>
                </tr>
              </thead>
              <tbody>
                {/*?php foreach(User::all() as $item):?*/}
                <tr>
                  <th scope="row">{/*?= $item-*/}MaTaiKhoan ?&gt;</th>
                  <td>{/*?= $item-*/}TenDangNhap ?&gt;</td>
                  <td>{/*?= $item-*/}TenHienThi ?&gt;</td>
                  <td>{/*?= $item-*/}DienThoai ?&gt;</td>
                  <td>{/*?= $item-*/}Email ?&gt;</td>
                  <td>
                    <button onclick="editRole('<?= $item->MaTaiKhoan ?>')" data-toggle="modal" data-target="#myModal" className="btn btn-info">
                      <i className="fa fa-cog" aria-hidden="true" />
                      {/*?= $item-*/}TenLoaiTaiKhoan ?&gt;
                    </button>
                  </td>
                  <td style={{textAlign: 'right'}}>
                    <button className="btn btn-info show">Xem</button>&nbsp;
                    <button className="btn btn-warning edit">Sửa</button>&nbsp;
                    <button className="btn btn-danger remove">Xóa</button>
                  </td>
                </tr>
                {/*?php endforeach ?*/}
              </tbody>
            </table>
          </div>
          <div id="myModal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-sm">
              <div className="modal-content">
                <div className="modal-header">
                  <h4>Thay đổi quyền hạn</h4>
                </div>
                <div className="modal-body">
                  <input id="idUser" type="text" defaultValue hidden />
                  <select className="form-control" name="role" id="role">
                    {/*?php foreach(UserType::all() as $item): ?*/}
                    <option value="<?= $item->MaLoaiTaiKhoan ?>">{/*?= $item-*/}TenLoaiTaiKhoan ?&gt;</option>
                    {/*?php endforeach; ?*/}
                  </select>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-warning" data-dismiss="modal">Thoát</button>
                  <button id="saveRole" className="btn btn-info">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  <script src="source/admin/js/user.js"></script>
  export default index_user;