var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <div className="marquee" style={{textAlign: 'center'}}>
            <h3>Sản Phẩm Xem Nhiều Nhất</h3>
          </div>
          <div className="container">
            {/*?php 
          $products = Product::mostView();
          $mangsp = array_chunk($products,2);
  
     
          foreach($mangsp as $sp){
           ?*/}
            <div className="row">
              {/*?php
              foreach($sp as $item){
          ?*/}
              <div className="col-6">
                <div className="row">
                  <div className="col-md-6">
                    <a href="<?= route('page','detail',$item->MaSP) ?>">
                      <img src="source/img/product/<?= $item->MaLoaiSP?>/<?= $item->HinhSP ?>" width="90%" height="150px" alt="K load dc" />
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="<?= route('page','detail',$item->MaSP) ?>">{/*?= $item-*/}TenSP ?&gt;</a>
                    {/*?= substr($item-*/}MoTa,0,150). '...' ?&gt;
                    <a href="<?= route('page','detail',$item->MaSP) ?>">xem thêm</a>
                    <p style={{textAlign: 'center'}}>
                      <a href="javascript:" onclick="addCart(<?= $item->MaSP ?>)">
                        <button className="btn btn-outline-info" style={{float: 'center'}}>
                          Thêm<span className="fa fa-cart-arrow-down" />
                        </button>
                      </a>
                    </p>
                  </div>
                </div>
                <div>&nbsp;</div>  
              </div>
              {/*?php } ?*/}  
            </div>
            <div style={{height: '10%'}}>&nbsp;</div>
            {/*?php } ?*/}
            <div className="news" style={{textAlign: 'center'}}>
              <h3>Sản Phẩm Mới Nhất</h3>
            </div>
            <div style={{height: '10%'}}>&nbsp;</div>
            {/*?php 
          $products = Product::news();
          $mangsp = array_chunk($products,2);
  
     
          foreach($mangsp as $sp){
           ?*/}
            <div className="row">
              {/*?php
              foreach($sp as $item){
          ?*/}
              <div className="col-6">
                <div className="row">
                  <div className="col-md-6">
                    <a href="<?= route('page','detail',$item->MaSP) ?>"> <img src="source/img/product/<?= $item->MaLoaiSP?>/<?= $item->HinhSP ?>" width="90%" height="150px" alt="K load dc" /></a>
                  </div>
                  <div className="col-md-6">
                    <a href="<?= route('page','detail',$item->MaSP) ?>">{/*?= $item-*/}TenSP ?&gt;</a>
                    {/*?= substr($item-*/}MoTa,0,150). '...' ?&gt;
                    <a href="<?= route('page','detail',$item->MaSP) ?>">xem thêm</a>
                    <p style={{textAlign: 'center'}}>
                      <a href="javascript:" onclick="addCart(<?= $item->MaSP ?>)">
                        <button className="btn btn-outline-info" style={{float: 'center'}}>
                          Thêm<span className="fa fa-cart-arrow-down" />
                        </button>
                      </a>
                    </p>
                  </div>
                </div>
                <div>&nbsp;</div>
              </div>
              {/*?php } ?*/}  
            </div>
            <div style={{height: '10%'}}>&nbsp;</div>
            {/*?php } ?*/}
            <div className="news" style={{textAlign: 'center'}}>
              <h3>Sản Phẩm Bán Nhiều Nhất</h3>
            </div>
            {/*?php 
          $products = Product::mostBuy();
          $mangsp = array_chunk($products,2);
  
     
          foreach($mangsp as $sp){
           ?*/}
            <div className="row">
              {/*?php
              foreach($sp as $item){
          ?*/}
              <div className="col-6">
                <div className="row">
                  <div className="col-md-6">
                    <a href="<?= route('page','detail',$item->MaSP) ?>"> <img src="source/img/product/<?= $item->MaLoaiSP?>/<?= $item->HinhSP ?>" width="90%" height="150px" alt="K load dc" /></a>
                  </div>
                  <div className="col-md-6">
                    <a href="<?= route('page','detail',$item->MaSP) ?>">{/*?= $item-*/}TenSP ?&gt;</a>
                    {/*?= substr($item-*/}MoTa,0,150).'...' ?&gt;
                    <a href="<?= route('page','detail',$item->MaSP) ?>">xem thêm</a> 
                    <p style={{textAlign: 'center'}}>
                      <a href="javascript:" onclick="addCart(<?= $item->MaSP ?>)">
                        <button className="btn btn-outline-info" style={{float: 'center'}}>
                          Thêm<span className="fa fa-cart-arrow-down" />
                        </button>
                      </a>
                    </p>
                  </div>
                </div>
                <div>&nbsp;</div>
              </div>
              {/*?php } ?*/}  
            </div>
            <div style={{height: '10%'}}>&nbsp;</div>
            {/*?php } ?*/}
          </div>
        </div>
      );
    }
  });