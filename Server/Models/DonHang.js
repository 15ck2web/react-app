var db=require('./dataAccessObject');


exports.ThemDonHang=(donhang,release)=>{
    var query="INSERT INTO dondathang SET?";
    db.executeParamsQuery(query,donhang,(err,data)=>{
        callback(err,data);
    });
}

exports.SuaDonHang=(donhang,release)=>{
    var query="UPDATE dondathang SET NgayLap=?,TongThanhTien=?,MaTaiKhoan=?,MaTinhTrang=? WHERE MaDonDatHang=?";
    db.executeParamsQuery(query,[donhang.NgayLap,donhang.TongThanhTien,donhang.MaTaiKhoan,donhang.MaDonDatHang],(err,data)=>{
    callback(err,data);
    });
}

exports.XoaDonHang=(donhang,release)=>{
    var query = "DELETE FROM dondathang WHERE MaDonDatHang =?";
    db.executeParamsQuery(query,[donhang.MaDonDatHang],(err,data)=>{
    callback(err,data);
    });
}