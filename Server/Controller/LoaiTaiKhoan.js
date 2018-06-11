var loaitaikhoanmodels=require('../Models/LoaiTaiKhoan');
exports.DocTatCaLoaiTaiKhoan=(req,res)=>{
    var IDtaikhoan=req.params.IDtaikhoan;
    loaitaikhoanmodels.DocTatCaLoaiTaiKhoan(IDtaikhoan,(err,data)=>{
        if(err){
            res.status(400).send(data);
            return;
        }
        res.send(data);
    });
};

exports.ThemLoaiTaiKhoan=(req,res)=>{
    var value=req.body;
    loaitaikhoanmodels.ThemLoaiTaiKhoan(value,(err,data)=>{
        if(err){
            res.status(400).send(data);
            return;
        }
        res.send(data);
    });
};
exports.SuaLoaiTaiKhoan=(req,res)=>{
    var value=req.body;
    loaitaikhoanmodels.SuaLoaiTaiKhoan(value,(err,data)=>{
        if(err){
            res.status(400).send(data);
            return;
        }
        res.send(data);
    });
};
exports.XoaLoaiTaiKhoan=(req,res)=>{
    var value=req.body;
    loaitaikhoanmodels.XoaLoaiTaiKhoan(value,(err,data)=>{
        if(err){
            res.status(400).send(data);
            return;
        }
        res.send(data);
    });
};