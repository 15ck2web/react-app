class index_factory extends Component {
  render() {
      return (
  
        <div className="container">
          <div style={{marginTop: '5%', textAlign: 'center'}}>
            <h1>Quản Lí Hãng Sản Xuất</h1>
          </div>
          <div style={{margin: '1% 0', textAlign: 'right'}}>
          {/* <?php include('add.php') ?> */}
          </div>
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên</th>
              <th>Logo</th>
              <th style={{textAlign: 'right'}}>Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            {/* <?php foreach(Factory::all() as $item):?>
                <tr>
                    <th scope="row"><?= $item->MaHangSX ?></th>
                    <td><?= $item->TenHangSX ?></td>
                    <td><?= $item->HinhHangSX ?></td>
                    <td style="text-align:right">
                        <button class="btn btn-warning edit">Sửa</button>
                        <button onclick="remove(<?= $item->MaHangSX ?>)" class="btn btn-danger">Xóa</button>
                    </td>
                </tr>
            <?php endforeach ?> */}
          </tbody>
        </table>
      </div>
    );
  }
}
<script src="source/admin/js/factory.js"></script>
export default index_factory;