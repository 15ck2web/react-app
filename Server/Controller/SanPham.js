var sanphammodels=require('../Models/SanPham');


exports.DocTatCaSanPham=(req,res)=>{
    var IDsanpham=req.params.IDsanpham;
    sanphammodels.DocTatCaSanPham(IDsanpham,(err,data)=>{
        if(err){
            res.status(400).send(data);
        }
        res.send(data);
    });
};



var tinhtrangmodels=require('../Models/TinhTrang');

exports.DocTatCaTinhTrangHoaDon=(req,res)=>{
    var IDtinhtrang=req.params.IDtinhtrang;
    tinhtrangmodels.DocTatCaTinhTrangHoaDon(IDtinhtrang,(err,data)=>{
        if(err){
            res.status(400).send(data);
            return;
        }
        res.send(data);
    });
};
exports.CapNhatTinhTrangHoaDon=(req,res)=>{
    var value=req.body;
    tinhtrangmodels.CapNhatTinhTrangHoaDon(value,(err,data)=>{
        if(err){
            res.status(400).send(data);
            return;

        }
        res.send(data);
    });
};
