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
exports.ThemSanPham=(req,res)=>{
    var value=req.body;
    sanphammodels.ThemSanPham(value,(err,data)=>{
        if(err){
            res.status(400).send(data);
            return;
        }
        res.send(data);
    });
};
exports.SuaSanPham=(req,res)=>{
    var value=req.body;
    sanphammodels.SuaSanPham(value,(err,data)=>{
        if(err){
            res.status(400).send(data);
            return;
        }
        res.send(data);
    });
};
exports.XoaSanPham=(req,res)=>{
    var value=req.body;
    sanphammodels.XoaSanPham(value,(err,data)=>{
        if(err){
            res.status(400).send(data);
            return;
        }
        res.send(data);
    });
};
exports.TimKiemMotSanPham=(req,res)=>{
    var IDProduct=req.params.IDProduct;
    sanphammodels.TimKiemMotSanPham(IDProduct,(err,data)=>{
        if(err){
            res.status(400).send(data);
            return;
        }
        res.send(data);
    });
};
exports.TimKiemMaSanPhamChinh=(req,res)=>{
    var IDKeyProduct=req.params.IDKeyProduct;
    sanphammodels.TimKiemMaSanPhamChinh(IDKeyProduct,(err,data)=>{
        if(err){
            res.status(400).send(data);
            return;
        }
        res.send(data);
    });
};
exports.TimKiemSanPhamTheoHSX=(err,data)=>{
    var IDHSX=req.params.IDHSX;
    sanphammodels.TimKiemSanPhamTheoHSX(IDHSX,(err,data)=>{
        if(err){
            res.status(400).send(data);
            return;
        }
        res.send(data);
    });
};
exports.TimKiemMotSanPhamHSX=(req,res)=>{
    var IDName=req.params.IDName;
    sanphammodels.TimKiemMotSanPhamHSX(IDName,(err,data)=>{
        if(err){
            res.status(400).send(data);
            return;
        }
        res.send(data);
    });
};
exports.TimKiemSanPhamTheoGia=(req,res)=>{
    var GiaBD=req.params.GiaBD;
    var GiaKT=req.params.GiaKT;
    sanphammodels.TimKiemTrangSanPhamGia(GiaBD,GiaKT,(err,data)=>{
        if(err){
            res.status(400).send(data);
            return;
        }
        res.send(data);
    });
};
exports.TimKiemSanPhamTHeoLoai=(req,res)=>{
    var IDLoaiSanPham=req.params.IDLoaiSanPham;
    sanphammodels.TimKiemSanPhamTHeoLoai(IDLoaiSanPham,(err,data)=>{
        if(err){
            res.status(400).send(data);
            return;
        }
        res.send(data);
    });

};

exports.TimKiemTrangSanPhamHSX=(req,res)=>{
    var IDPageHSX=req.params.IDPageHSX;
    var IDNameHSX=req.params.IDNameHSX;
    sanphammodels.TimKiemTrangSanPhamHSX(IDNameHSX,IDPageHSX,(err,data)=>{
        if(err){
            res.status(400).send(data);
            return;
        }
        res.send(data);
    });
};
exports.TimKiemTrangSanPhamGia=(req,res)=>{
    var IDPageGia=req.params.IDPageGia;
    var GiaBD=req.params.GiaBD;
    var GiaKT=req.params.GiaKT;
    sanphammodels.TimKiemTrangSanPhamGia(IDPageGia,GiaBD,GiaKT,(err,data)=>{
        if(err){
            res.status(400).send(data);
            return;
        }
        res.send(data);
    });
};
exports.TimKiemTrangSanPhamLoai=(req,res)=>{
    var IDPageLoai=req.params.IDPageLoai;
    var IDLoai=req.req.params.IDLoai;
    sanphammodels.TimKiemTrangSanPhamLoai(IDLoai,IDPageLoai,(err,data)=>{
        if(err){
            res.status(400).send(data);
            return;
        }
        res.send(data);
    });
};
exports.TimTrangSanPham=(req,res)=>{
    var PageSanPHam=req.params.PageSanPHam;
    sanphammodels.TimTrangSanPham(PageSanPHam,(err,data)=>{
        if(err){
            res.status(400).send(data);
            return;
        }
        res.send(data);
    });
};
exports.TimSoTrangSanpham=(req,res)=>{
    sanphammodels.TimSoTrangSanPham((err,data)=>{
        if(err){
            res.status(400).send(data);
            return;
        }
        res.send(data);
    });
};