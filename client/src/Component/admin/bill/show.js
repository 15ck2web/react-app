class show_bill extends Component {
  render() {
      return (
  
        <div id="detailModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" className="modal fade text-left" style={{display: 'none'}} aria-hidden="true">
          <div role="document" className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 id="detalModalLabel" className="modal-title">Thông Tin Hóa Đơn </h5>
                <button type="button" data-dismiss="modal" aria-label="Close" className="close"><span aria-hidden="true">×</span></button>
              </div>
              <div className="modal-body">
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Số Lượng</th>
                      <th style={{textAlign: 'center'}}>Giá Bán</th>
                      <th>Mã Đơn Đặt Hàng</th>
                      <th>Mã Sản Phẩm</th>
                    </tr>
                  </thead>
                  <tbody id="detailBody">
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button type="button" data-dismiss="modal" className="btn btn-warning">Close</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  export default show_bill;