var db=require('./dataAccessObject');

exports.DocTatCaLoaiSanPham=(callback)=>{
    var query="SELECT * FROM loaisanpham WHERE MaLoaiSanPham =? ";
    db.executeParamsQuery(query,(err,data)=>{
        callback(err,data);
    });
}
exports.ThemLoaiSanPham=(loaisanpham,callback)=>{
    var query="INSERT INTO loaisanpham SET ?";
    db.executeParamsQuery(query,loaisanpham,(err,data)=>{
        callback(err,data);
    });
}

exports.SuaLoaiSanPham=(loaisanpham,callback)=>{
    var query="UPDATE loaisanpham SET TenLoaiSanPham=?,BiXoa=? WHERE MaLoaiSanPham=?";
    db.executeParamsQuery(querym[loaisanpham.ThemLoaiSanPham,
    loaisanpham.BiXoa,
    loaisanpham.MaLoaiSanPham],(err,data)=>{
    callback(err,data);
    });
}
exports.XoaLoaiSanPham=(loaisanpham,callback)=>{
    var query ="DELETE FROM loaisanpham WHERE MaLoaiSanPham=?";
    db.executeParamsQuery(query,[loaisanpham.MaLoaiSanPham],(err,data)=>{
    callback(err,data);
    });
}