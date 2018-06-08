var db=require('./dataAccessObject')

exports.ThemLoaiSanPham=(loaisanpham,release)=>{
    var query="INSERT INTO loaisanpham SET ?";
    db.executeParamsQuery(query,loaisanpham,(err,data)=>{
        callback(err,data);
    });
}

exports.SuaLoaiSanPham=(loaisanpham,release)=>{
    var query="UPDATE loaisanpham SET TenLoaiSanPham=?,BiXoa=? WHERE MaLoaiSanPham=?";
    db.executeParamsQuery(querym[loaisanpham.ThemLoaiSanPham,
    loaisanpham.BiXoa,
    loaisanpham.MaLoaiSanPham],(err,data)=>{
    callback(err,data);
    });
}
exports.XoaLoaiSanPham=(loaisanpham,release)=>{
    var query ="DELETE FROM loaisanpham WHERE MaLoaiSanPham=?";
    db.executeParamsQuery(query,[loaisanpham.MaLoaiSanPham],(err,data)=>{
    callback(err,data);
    });
}