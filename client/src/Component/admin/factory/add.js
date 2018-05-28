class add_factory extends Component {
  render() {
      return (
        <div>
          <button type="button" data-toggle="modal" data-target="#myModal" className="btn btn-primary"><span><i className="fa fa-plus" aria-hidden="true" /> Thêm</span></button>
          {/* Modal*/}
          <div id="myModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" className="modal fade text-left" style={{display: 'none'}} aria-hidden="true">
            <div role="document" className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 id="exampleModalLabel" className="modal-title">Thêm mới hãng sản xuất</h5>
                  <button type="button" data-dismiss="modal" aria-label="Close" className="close"><span aria-hidden="true">×</span></button>
                </div>
                <div className="modal-body">
                  <form>
                    <input id="id" type="text" hidden defaultValue />
                    <div className="form-group">
                      <label className="col-form-label">Tên</label>
                      <input type="text" placeholder="Nhập tên hãng" className="form-control" id="ten" />
                    </div>
                    <div className="form-group" id="previewImage">
                      <label className="col-form-label">Logo</label>
                      <input type="file" placeholder="Nhập tên loại" className="form-control" id="featureImage" />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" data-dismiss="modal" className="btn btn-warning">Close</button>
                  <button id="saveFactory" type="button" className="btn btn-primary">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  export default add_factory;