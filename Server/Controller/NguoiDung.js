var nguuoidungmodels=require('../Models/NguoiDung');
exports.DocTatCaNguoiDung=(req,res)=>{
    var IDnguoidung=req.params.IDnguoidung;
    nguuoidungmodels.DocTatCaNguoiDung(IDnguoidung,(err,data)=>{
        if(err){
            res.status(400).send(data);
            return;
        }
        res.send(data);
    });
};


exports.ThemNguoiDung=(req,res)=>{
    var value=req.body;
    nguuoidungmodels.ThemNguoiDung(value,(err,data)=>{
        if(err){
            res.status(400).send(data);
            return;
        }
        res.send(data);
    });
};
exports.CapNhatNguoiDung=(req,res)=>{
    var value=req.body;
    nguuoidungmodels.CapNhatNguoiDung(value,(err,data)=>{
        if(err){
            res.status(400).send(data);
            return;
        }
        res.send(data);
    });
};
exports.XoaNguoiDung=(req,res)=>{
    var value=req.body;
    nguuoidungmodels.XoaNguoiDung(value,(err,data)=>{
        if(err){
            res.status(400).send(data);
            return ;
        }
        res.send(data);
    });
};