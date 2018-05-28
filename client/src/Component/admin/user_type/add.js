
import React from 'react';
class add_user_type extends Component {
    render () {
      return (
        <div>
          <button type="button" data-toggle="modal" data-target="#myModal" className="btn btn-primary"><span><i className="fa fa-plus" aria-hidden="true" /> Type</span></button>
          {/* Modal*/}
          <div id="myModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" className="modal fade text-left" style={{display: 'none'}} aria-hidden="true">
            <div role="document" className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 id="exampleModalLabel" className="modal-title">Thêm mới loại tài khoản</h5>
                  <button type="button" data-dismiss="modal" aria-label="Close" className="close"><span aria-hidden="true">×</span></button>
                </div>
                <div className="modal-body">
                  <form>
                    <input type="text" name="id" id="id" hidden defaultValue />
                    <div className="form-group">
                      <label className="col-form-label">Tên</label>
                      <input type="text" placeholder="Nhập tên loại" className="form-control" id="ten" />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" data-dismiss="modal" className="btn btn-warning">Close</button>
                  <button id="saveUserType" type="button" className="btn btn-primary">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  export default add_user_type;