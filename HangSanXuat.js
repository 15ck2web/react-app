var hsxmodels=require('../Models/HangSanXuat');

exports.ThemHangSanXuat=(req,res)=>{
    var value=req.body;
    hsxmodels.ThemHangSanXuat(value,(err,data)=>{
        if(err){
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};
exports.SuaHangSanXuat=(req,res)=>{
    var value=req.body;
    hsxmodels.SuaHangSanXuat(value,(err,data)=>{
        if(err){
            res.status(400).send(err);
            return ;
        }
        res.send(data);
    });
};
exports.XoaHangSanXuat=(req,res)=>{
    var value=req.body;
    hsxmodels.XoaHangSanXuat(value,(err,data)=>{
        if(err){
            res.status(400).send(data);
            return;
        }
        res.send(data);

    });
};
exports.DocTaCahangSanXuat=(req,res)=>{
    var IDhsx=res.params.IDhsx;
    hsxmodels.DocTatCaHangSanXuat(IDhsx,(err,data)=>{
        if(err){
            res.status(400).send(data);
            return;
        }
        res.send(data);
    });
};