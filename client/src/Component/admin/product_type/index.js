class index_product_type extends Component {
    render () {
      return (
  
        <div className="container">
          <div style={{marginTop: '5%', textAlign: 'center'}}>
            <h1>Quản Lí Loại Sản Phẩm</h1>
          </div>
          <div style={{margin: '1% 0', textAlign: 'right'}}>
          {/* <?php include('add.php') ?> */}
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
          {/* <?php foreach(ProductType::all() as $item):?> */}
          <tr>
              <th scope="row">{/*?= $item-*/}MaLoaiSP ?&gt;</th>
              <td>{/*?= $item-*/}TenLoaiSP ?&gt;</td>
              <td style={{textAlign: 'right'}}>
                <button className="btn btn-warning edit">Sửa</button>
                <button onclick="remove(<?= $item->MaLoaiSP ?>)" className="btn btn-danger">Xóa</button>
              </td>
            </tr>
            {/* <?php endforeach ?> */}
            </tbody>
        </table>
      </div>
    );
  }
}
<script src="source/admin/js/product_type.js"></script>
export default index_product_type;