var NewComponent = React.createClass({
    render: function() {
      return (
  
        <div className="container">
          <div style={{marginTop: '5%', textAlign: 'center'}}>
            <h1>Lịch sử thanh toán</h1>
          </div>
          id) as $item):?&gt;
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>Mã Hóa Đơn</th>
                <th>Ngày Lập</th>
                <th>Tổng Thành Tiền</th>
                <th>Mã Tài Khoản</th>
                <th>Tình Trạng</th>
              </tr>
            </thead>
            <tbody>
              {/*?php foreach(Bill::getByUserID(Session::get('auth')-*/}<tr>
                <th scope="row">{/*?= $item-*/}MaHD ?&gt;</th>
                <td>{/*?= $item-*/}NgayLap ?&gt;</td>
                <td>{/*?= number_format($item-*/}TongTien) ?&gt;</td>
                <td>{/*?= $item-*/}MaTK ?&gt;</td>
                <td>
                  {/*?= $item-*/}TenTinhTrang ?&gt;
                </td>
              </tr>
              {/*?php endforeach ?*/}
            </tbody>
          </table>
        </div>
      );
    }
  });