var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <div className="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{margin: '5% 0'}}>
            <h1 className="gallery-title">Tìm Kiếm</h1>
          </div>
          <div id="resultSearch"><h3 className="alert alert-success">{/*?= count($this-*/}items) ?&gt; Kết quả</h3></div>
          <div className="row" style={{margin: '5% 0'}} id="searchBody">
            {/*?php foreach($this-*/}items as $item): ?&gt;
            <div className="col-6">
              <div className="row">
                <div className="col-md-6">
                  <a href="<?= route('page','detail',$item->MaSP) ?>"> <img src="source/img/product/<?= $item->MaLoaiSP?>/<?= $item->HinhSP ?>" width="90%" height="150px" alt="K load dc" /></a>
                </div>
                <div className="col-md-6">
                  <a href="<?= route('page','detail',$item->MaSP) ?>">{/*?= $item-*/}TenSP ?&gt;</a>
                  {/*?= substr($item-*/}MoTa,0,150). '...' ?&gt;
                  <a href="<?= route('page','detail',$item->MaSP) ?>">xem thêm</a> 
                </div>        
              </div>
              <div>&nbsp;</div>
              <p style={{textAlgin: 'center'}}>
                <a href="javascript:" onclick="addCart(<?= $item->MaSP ?>)">
                  <button className="btn btn-outline-info" style={{float: 'center'}}>
                    Thêm<span className="fa fa-cart-arrow-down" />
                  </button>
                </a>
              </p>
            </div>
            {/*?php endforeach; ?*/}
            <div className="clearfix" />
          </div>
          { /* load ajax */}
          { /* <div style="text-align:center;margin-bottom: 5%">
            <button id="ajax-load" class="btn btn-outline-info">More</button>
            </div> */
          }
        </div>
      );
    }
  });