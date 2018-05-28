import React from 'react';
class detail extends Component {
  render() {
      return (
        <div>
          <div className="container">
            <p>
              <a href="javascript:" onclick="addCart(<?= $this->item->MaSP ?>)">
                <button onclick="addCart(<?= $item->MaSP ?>)" className="btn btn-outline-info" style={{float: 'right'}}>
                  Thêm<span className="fa fa-cart-arrow-down" />
                </button>
              </a>
            </p>
            <p> {/*?= $this-*/}item-&gt;TenSP ?&gt;</p>
            <p>Giá: {/*?= number_format($this-*/}item-&gt;GiaSP) ?&gt;&nbsp;VNĐ</p>
            <p> {/*?= $this-*/}item-&gt;MoTa ?&gt;</p>
            <p> Lượt Xem {/*?= $this-*/}item-&gt;SoLuotXem ?&gt;</p>
            <p> Số Lượng Đã Bán {/*?= $this-*/}item-&gt;SoLuongBan?&gt;</p>
            <p><img src="source/img/product/<?= $this->item->MaLoaiSP ?>/<?= $this->item->HinhSP ?>" width="90%" alt="K load dc" /></p>
          </div>
          <div className="container">
            <div className="clearfix" style={{margin: '5% 0'}} />
            <h3 style={{textAlign: 'center'}}>Sản Phẩm Cùng Loại</h3>
            <div className="row">
              {/*?php foreach($this-*/}sameItems as $item): ?&gt;
              <div className="col-sm-2">
                <a href="<?= route('page','detail',$item->MaSP) ?>">
                  <img src="source/img/product/<?= $item->MaLoaiSP ?>/<?= $item->HinhSP ?>" alt height={80} width={170} />
                </a>
                <p /><h5>{/*?= $item-*/}TenSP ?&gt;</h5><p />
                <p /><h6>{/*?= number_format($item-*/}GiaSP) ?&gt; VNĐ</h6><p />
                <a className="btn btn-info" href="<?= route('page','detail',$item->MaSP) ?>">Chi tiết <i className="fa fa-chevron-right" /></a>
                <a className="btn btn-info" onclick="addCart(<?= $item->MaSP ?>)" href="javascipt:;"><i className="fa fa-shopping-cart" /></a>
                <div className="clearfix" style={{margin: '5% 0'}} />
              </div>
              {/*?php endforeach; ?*/}
            </div>
          </div>
          <div className="container">
            <div className="clearfix" style={{margin: '5% 0'}} />
            <h3 style={{textAlign: 'center'}}>Sản Phẩm Khác Loại</h3>
            <div className="row">
              {/*?php foreach($this-*/}otherItems as $item): ?&gt;
              <div className="col-sm-2">
                <a href="<?= route('page','detail',$item->MaSP) ?>">
                  <img src="source/img/product/<?= $item->MaLoaiSP ?>/<?= $item->HinhSP ?>" alt height={80} width={170} />
                </a>
                <p /><h5>{/*?= $item-*/}TenSP ?&gt;</h5><p />
                <p /><h6>{/*?= number_format($item-*/}GiaSP) ?&gt; VNĐ</h6><p />
                <a className="btn btn-info" href="<?= route('page','detail',$item->MaSP) ?>">Chi tiết <i className="fa fa-chevron-right" /></a>
                <a className="btn btn-info" onclick="addCart(<?= $item->MaSP ?>)" href="javascipt:;"><i className="fa fa-shopping-cart" /></a>
                <div className="clearfix" style={{margin: '5% 0'}} />
              </div>
              {/*?php endforeach; ?*/}
            </div>
          </div>
        </div>
      );
    }
  }
  export default detail;