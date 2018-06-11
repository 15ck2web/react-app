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



