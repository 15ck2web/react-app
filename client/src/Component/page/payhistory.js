import React from 'react';
class Payhistory extends React.Component {
  render() {
      return (
  
        <div className="container">
          <div style={{marginTop: '5%', textAlign: 'center'}}>
            <h1>Lịch sử thanh toán</h1>
          </div>
         
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
              <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  
                </td>
              </tr>
           
            </tbody>
          </table>
        </div>
      );
    }
  }
  export default Payhistory;