var db = require('./dataAccessObject')
exports.ThemNguoiDung=(Nguoidung,release)=>{
    var query="INSERT INTO taikhoan SET ?";
    db.executeParamsQuery(query,taikhoan,(err,data)=>{
        callback(err,data);
    });


}
exports.ThemNguoiDung=(Nguoidung,release)=>{
    var query ="update taikhoan SET TenDangNhap=?,MatKhau=?,TenHienThi=?,NgaySinh=?,DiaChi=?,DienThoai=?,Email=?,BiXoa=?,MaLoaiTaiKhoan WHERE MaTaiKhoan=?";
    db.executeParamsQuery(query,[Nguoidung.TenDangNhap,
    Nguoidung.MatKhau,
    Nguoidung.TenHienThi,
    Nguoidung.NgaySinh,
    Nguoidung.DiaChi,
    Nguoidung.DienThoai,
    Nguoidung.Email,
    Nguoidung.BiXoa,
    Nguoidung.MaLoaiTaiKhoan,
    Nguoidung.MaTaiKhoan],(err,data)=>{
    callback(err,data);
    });
}

exports.XoaNguoiDung=(Nguoidung,callback)=>{
    var query="DELETE FROM taikhoan Where MaTaiKhoan=?";
    db.executeParamsQuery(query,[Nguoidung.MaTaiKhoan],(err,data)=>{
    callback(err,data);
    });
}
