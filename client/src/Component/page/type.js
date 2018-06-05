import React from 'react';
class Type extends React.Component {
  render() {
      return (
        <div>
          <div className="container" style={{padding: 5}}>
            <div className="row">
              <div className="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{margin: '5% 0'}}>
                <h1 className="gallery-title">Sản Phẩm</h1>
              </div>
   
              <div className="col-6">
                <div>&nbsp;</div>
                <div className="row">
                  <div className="col-6">
                    <a href="<?= route('page','detail',$item->MaSP) ?>">
                      <img src="source/img/product/4/4.jpg" width="90%" alt="K load dc" />
                    </a>
                  </div>
                  <div className="col-6">
                    mota
                    {/*?= substr($item-*MoTa,0,150). '...' ?&*/}
                    <a href="<?= route('page','detail',$item->MaSP) ?>">Xem Chi Tiết
                    </a>
                    <p style={{textAlign: 'center'}}>
                      <a href="javascript:" onclick="addCart(<?= $item->MaSP ?>)">
                        <button className="btn btn-outline-info" style={{float: 'center'}}>
                          Thêm<span className="fa fa-cart-arrow-down" />
                        </button>
                      </a>
                    </p>
                  </div>
                  <div style={{height: '10%'}}>&nbsp;</div>
                </div>
              </div>
              {/*?php endforeach; ?*/}
            </div>
          </div>
          <center>
            {/* <?php
            $item=$this->types[0];
            $sum=$this->phantrang;
            $sumtong=count($sum);
            $sumtrang=ceil($sumtong/4);   
        ?>
            <?php for($i=1; $i<=$sumtrang;$i++): ?>
            <a href="<?= route('page','type',$item->MaLoaiSP)?>&<?= $i ?>"><?= $i ?></a>
        
        <?php endfor; ?> */}
          </center>
        </div>
      );
    }
  }
  export default Type;