var chitietdonhangmodels=require('../Models/ChiTietDonHang');

exports.DocTatCaHoaDon=(req,res)=>{
    var MaDonHang=req.params.MaDonHang;
    console.log(MaDonHang);
    chitietdonhangmodels.DocTatCaHoaDon(MaDonHang,(err,data)=>{
        if(err){
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};

exports.ThemChiTietHoaDon=(req,res)=>{
    var value=req.body;
    chitietdonhangmodels.ThemChiTietHoaDon(value,(err,data)=>{
        if(err){
            res.status(400).send(err);
            return ;
        }
        res.send(data);
    });
};
exports.CapNhatChiTietHoaDon=(req,res)=>{
    var value=req.body;
    chitietdonhangmodels.CapNhatChiTietHoaDon(value,(err,data)=>{
        if(err){
            res.status(400).send(err);
            return ;
        }
        res.send(data);
    });
};