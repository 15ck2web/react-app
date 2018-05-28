import React from 'react';
class add_user extends Component {
    render () {
      return (
        <div>
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#userModal">Add User</button>
          <div className="modal fade" id="userModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">New User</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form id="uploadForm">
                    <div className="row">
                      <div className="form-group col-6">
                        <label htmlFor="tendangnhap" className="col-form-label">Tên Đăng Nhập</label>
                        <input className="form-control" type="text" name="tendangnhap" id="tendangnhap" />
                      </div>
                      <div className="form-group col-6">
                        <label htmlFor="matkhau" className="col-form-label">Mật Khẩu</label>
                        <input className="form-control" type="text" name="matkhau" id="matkhau" />
                      </div>
                    </div>
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
                    <div className="row">
                      <div className="form-group col-6">
                        <label htmlFor="bixoa" className="col-form-label">Bị Xóa</label>
                        <select name="bixoa" id="bixoa" className="form-control">
                          <option value={0}>Chưa xóa</option>
                          <option value={1}>Đã Xóa</option>
                        </select>
                      </div>
                      <div className="form-group col-6">
                        <label htmlFor="loaitaikhoan" className="col-form-label">Loại Tài Khoản</label>
                        <select name="loaitaikhoan" id="loaitaikhoan" className="form-control">
                        {/* <?php foreach (UserType::all() as $item): ?>
                        <option value="<?= $item->MaLoaiTaiKhoan ?>"><?= $item->TenLoaiTaiKhoan ?></option>
                        <?php endforeach ?> */}
                        </select>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button id="saveUser" type="button" className="btn btn-primary">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  export default add_user;