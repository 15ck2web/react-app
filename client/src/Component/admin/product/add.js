import React from 'react';
class add_product extends Component {
    render() {
      return (
        <div>
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#productModal"><span><i className="fa fa-plus" aria-hidden="true" /> Thêm</span></button>
          <div className="modal fade" id="productModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Sản Phẩm Mới</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form id="uploadForm">
                    <input type="text" id="ma" hidden />
                    <input type="text" id="ngaynhap" hidden />
                    <div className="row">
                      <div className="form-group col-6">
                        <label htmlFor="ten" className="col-form-label">Tên</label>
                        <input className="form-control" type="text" name="name" id="ten" />
                      </div>
                      <div className="form-group col-6">
                        <label htmlFor="gia" className="col-form-label">Giá</label>
                        <input className="form-control" name="gia" id="gia" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-6">
                        <label htmlFor="loai" className="col-form-label">Loại</label>
                        <select name="loai" id="loai" className="form-control">
                        {/* <?php foreach (ProductType::all() as $item): ?>
                           <option value="<?= $item->MaLoaiSP ?>"><?= $item->TenLoaiSP ?></option>
                        <?php endforeach ?> */}
                        </select>
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="nsx" className="col-form-label">Hãng Sản Xuất</label>
                      <select name="hang" id="hang" className="form-control">
                      {/* <?php foreach (Factory::all() as $item): ?>
                           <option value="<?= $item->MaHangSX ?>"><?= $item->TenHangSX ?></option>
                        <?php endforeach ?> */}

                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-6">
                      <label htmlFor="soluongton" className="col-form-label">Số Lượng Tồn</label>
                      <input className="form-control" type="text" name="soluongton" id="soluongton" />
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="soluongban" className="col-form-label">Số Lượng Bán</label>
                      <input className="form-control" type="text" name="soluongban" id="soluongban" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-6">
                      <label htmlFor="bixoa" className="col-form-label">Bị Xóa</label>
                      <select id="bixoa" className="form-control">
                        <option value={0}>Chưa Xóa</option>
                        <option value={1}>Đã Xóa</option>
                      </select>
                    </div>
                    <div className="form-group col-6" id="previewImage">
                      <label htmlFor="file" className="col-form-label">Image</label>
                      <input className="form-control" type="file" name="featureImage" id="featureImage" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-12">
                      <label htmlFor="mota" className="col-form-label">Mô Tả</label>
                      <textarea className="form-control" name="mota" id="mota" cols={30} rows={3} defaultValue={""} />
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-warning" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" id="saveProduct">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default add_product;