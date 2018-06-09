var db=require('./dataAccessObject');


exports.ThemDonHang=(donhang,callback)=>{
    var query="INSERT INTO dondathang SET?";
    db.executeParamsQuery(query,donhang,(err,data)=>{
        callback(err,data);
    });
}

exports.SuaDonHang=(donhang,callback)=>{
    var query="UPDATE dondathang SET MaTinhTrang=? WHERE MaDonDatHang=?";
    db.executeParamsQuery(query,[
        donhang.MaDonDatHang,
        donhang.MaTinhTrang],(err,data)=>{
        callback(err,data);
    });
}

exports.DocTatCaHoaDon=(donhang,callback)=>{
    var query="SELECT * FROM dondathang WHERE MaTaiKhoan =?";
    db.executeParamsQuery(query,donhang,(err,data)=>{
        callback(err,data);
    });

}