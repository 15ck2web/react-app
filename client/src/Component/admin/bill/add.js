import React from 'react';

class add_bill extends Component {
  render() {
      return (
  
        {/* Modal*/}
        <div>
        <div id="myModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" className="modal fade text-left" style={{display: 'none'}} aria-hidden="true">
          <div role="document" className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 id="exampleModalLabel" className="modal-title">Chỉnh sửa tình trạng</h5>
                <button type="button" data-dismiss="modal" aria-label="Close" className="close"><span aria-hidden="true">×</span></button>
              </div>
              <div className="modal-body">
                <form>
                  <input id="billID" type="text" defaultValue hidden />
                  <div className="form-group">
                    <label className="col-form-label">Tình Trạng</label>
                    <select className="form-control" name="tinhtrang" id="tinhtrang">
                    {/* <?php foreach(BillState::all() as $key => $item): ?>
                        <option value="<?= $item->MaTinhTrang ?>" <?= $key==0?'selected':'' ?>><?= $item->TenTinhTrang ?></option>
                        <?php endforeach; ?> */}

                    </select>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" data-dismiss="modal" className="btn btn-warning">Close</button>
                <button id="saveBillState" type="button" className="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  

  export default add_bill;
