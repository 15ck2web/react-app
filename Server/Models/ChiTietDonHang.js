var db=require('./dataAccessObject');


exports.DocTatCaHoaDon=(ChiTietHoaDon,callback)=>{
    var query="SELECT * FROM chitietdondathang WHERE MaDonDatHang=?";
    db.executeParamsQuery(query,ChiTietHoaDon,(err,data)=>{
        callback(err,data);
    });
}

exports.ThemChiTietHoadDon=(ChiTietHoaDon,callback)=>{
    var query="INSERT INTO chitietdondathang SET?";
    db.executeParamsQuery(query,ChiTietHoaDon,(err,data)=>{
        callback(err,data);
    });
}
exports.CapNhatChiTietHoaDon=(ChiTietHoaDon,callback)=>{
    var query="UPDATE chitietdondathang SET MaTrangThai=? WHERE MaChiTietHoaDon=?";
    db.executeParamsQuery(query,[ChiTietHoaDon.MaTrangThai,Number(ChiTietHoaDon.MaChiTietDonDatHang)],(err,data)=>{
        callback(err,data);
    });
}