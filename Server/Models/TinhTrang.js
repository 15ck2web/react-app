var db=require('./dataAccessObject');

exports.DocTatCaTinhTrangHoaDon=(callback)=>{
    var query="SELECT * FROM tinhtrang WHERE MaTinhTrang=?";
    db.executeParamsQuery(query,(err,data)=>{
        callback(err,data);
    });
}
exports.CapNhatTinhTrangHoaDon=(value,callback)=>{
    var query="UPDATE tinhtrang SET TenTinhTrang=? WHERE MaTinhTrang=?";
    db.executeParamsQuery(query,[value.TenTinhTrang,value.MaTinhTrang],(err,data)=>{
        callback(err,data);
    });
}

