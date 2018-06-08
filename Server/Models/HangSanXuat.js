var db=require('./dataAccessObject')


exports.ThemHangSanXuat=(hangsanxuat,release)=>{
    var query ="INSERT INTO hangsanxuat SET ?";
    db.executeParamsQuery(query,hangsanxuat,(err,data)=>{
        callback(err,data);
    });
}
exports.SuaHangSanXuat=(hangsanxuat,release)=>{
    var query ="UPDATE hangsanxuat SET TenHangSanXuat=?,LogoURL=?,BiXoa=? WHERE MaHangSanXuat=?";
    db.executeParamsQuery(query,
    [hangsanxuat.TenHangSanXuat,
    hangsanxuat.LogoURL,
    hangsanxuat.BiXoa,
    hangsanxuat.MaHangSanXuat],(err,data)=>{
    callback(err,data);
    });
}
exports.XoaHangSanXuat=(hangsanxuat,release)=>{
    var query="DELETE FROM hangsanxuat WHERE MaHangSanXuat=?";
    db.executeParamsQuery(query,[hangsanxuat.MaHangSanXuat],(err,data)=>{
    callback(err,data);
    });
}