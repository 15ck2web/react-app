var db=require('./dataAccessObject');

exports.DocTaCaLoaiTaiKhoan=(callback)=>{
    var query="SELECT * FROM loaitaikhoan WHERE MaLoaiTaiKhoan =?";
    db.executeParamsQuery(query,(err,data)=>{
        callback(err,data);
    });
}
exports.ThemLoaiTaiKhoan=(value,callback)=>{
    var query="INSERT INTO loaitaikhoan SET ?";
    db.executeParamsQuery(query,value,(err,data)=>{
        callback(err,data);
    });
}
exports.SuaLoaiTaiKhoan=(value,callback)=>{
    var query="UPDATE loaitaikhoan SET TenLoaiTaiKhoan=? WHERE MaLoaiTaiKhoan=?";
    db.executeParamsQuery(query,[value.TenLoaiTaiKhoan,value.MaLoaiTaiKhoan],(err,data)=>{
        callback(err,data);
    });
}
exports.XoaLoaiTaiKhoan=(value,callback)=>{
    var query="DELETE FROM loaitaikhoan WHERE MaLoaiTaiKhoan=?";
    db.executeParamsQuery(query,value,(err,data)=>{
        callback(err,data);
    });
}