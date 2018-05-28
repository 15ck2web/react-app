
import React from 'react';
class index_user_type extends Component {
    render() {
      return (
  
        <div className="container">
          <div style={{marginTop: '5%', textAlign: 'center'}}>
            <h1>Quản Lí Loại Tài Khoản</h1>
          </div>
          <div style={{margin: '1% 0', textAlign: 'right'}}>
            {/*?php include('add.php') ?*/}
          </div>
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>Tên</th>
                <th style={{textAlign: 'right'}}>Thao Tác</th>
              </tr>
            </thead>
            <tbody>
              {/*?php foreach(UserType::all() as $item):?*/}
              <tr>
                <th scope="row">{/*?= $item-*/}MaLoaiTaiKhoan ?&gt;</th>
                <td>{/*?= $item-*/}TenLoaiTaiKhoan ?&gt;</td>
                <td style={{textAlign: 'right'}}>
                  <button className="btn btn-warning edit">Sửa</button>&nbsp;&nbsp;
                  <button onclick="remove(<?= $item->MaLoaiTaiKhoan ?>)" className="btn btn-danger">Xóa</button>
                </td>
              </tr>
              {/*?php endforeach ?*/}
            </tbody>
          </table>
        </div>
      );
    }
  }
  <script src="source/admin/js/user_type.js"></script>
  export default index_user_type;