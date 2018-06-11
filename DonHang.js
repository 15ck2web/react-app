var donhangmodels=require('../Models/DonHang');


exports.ThemDonHang=(req,res)=>{
    var value=req.body;
    donhangmodels.ThemDonHang(value,(err,data)=>{
        if(err){
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};
exports.SuaDonHang=(req,res)=>{
    var value=req.body;
    donhangmodels.SuaDonHang(value,(err,data)=>{
        if(err){
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};

exports.DocTatCaHoaDon=(req,res)=>{
    var IDDonHang=req.params.IDDonHang;
    donhangmodels.DocTatCaHoaDon(IDDonHang,(err,data)=>{
        if(err){
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};
