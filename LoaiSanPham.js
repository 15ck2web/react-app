var loaisanphammodels=require('../Models/LoaiSanPham');

exports.DocTatCaLoaiSanPham=(req,res)=>{
    var IDloaisp=req.params.IDloaisp;
    loaisanphammodels.DocTatCaLoaiSanPham(IDloaisp,(err,data)=>{
        if(err){
            res.status(400).send(data);
            return;
        }
        res.send(data);
    });
};
exports.ThemHangSanXuat=(req,res)=>{
    var value=req.body;
    loaisanphammodels.ThemLoaiSanPham(value,(err,data)=>{
        if(err){
            res.status(400).send(data);
            return;
        }
        res.send(data);
    });
};
exports.SuaLoaiSanPham=(req,res)=>{
    var value=req.body;
    loaisanphammodels.SuaLoaiSanPham(value,(err,data)=>{
        if(err){
            res.status(400).send(data);
            return;
        }
        res.send(data);
    });
};
exports.XoaLoaiSanPham=(req,res)=>{
    var value=req.body;
    loaisanphammodels.XoaLoaiSanPham(value,(err,data)=>{
        if(err){
            res.status(400).send(data);
            return;
        }
        res.send(data);
    });
};

