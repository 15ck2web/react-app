var db = require('./dataAccessObject')

//Them san pham
exports.DocTatCaSanPham=(callback)=>{

    db.executeParamsQuery("SELECT * from sanpham",(err,data)=>{
        callback(err,data);
    });
}
exports.ThemSanPham= function(sanPham, callback)
{
    var query = "INSERT INTO sanpham SET ?";
    db.executeParamsQuery(query, sanPham,  (err, data)=>
    {
        callback(err, data);
    });
}

//Sua san pham
exports.SuaSanPham = function(sanPham, callback)
{
    var query = "UPDATE sanpham SET TenSanPham=?, HinhURL=?, GiaSanPham=?, NgayNhap=?, SoLuongTon =?, SoLuongBan =?, SoLuotXem =?, MoTa =?, BiXoa =?, MaLoaiSanPham =?, MaLoaiSanXuat =? WHERE MaSanPham =?";

    db.executeParamsQuery(query, [sanPham.TenSanPham,
        sanPham.TenSanPham,
        sanPham.GiaSanPham,
        sanPham.NgayNhap,
        sanPham.SoLuongTon,
        sanPham.SoLuongBan,
        sanPham.SoLuotXem,
        sanPham.MoTa,
        sanPham.BiXoa,
        sanPham.MaLoaiSanPham,
        sanPham.MaLoaiSanXuat,
        sanPham.MaSanPham], function(err, data){
		callback(err, data);
    });
}

//Xoa san Pham
exports.XoaSanPham = function(sanPham,callback)
{
    var query = "DELETE FROM sanpham WHERE MaSanPham = ?";
    
	db.executeParamsQuery(query,sanPham,(err,data)=>{
		callback(err,data);
	});
}

//Tim kiem
exports.TimKiemMotSanPham = function(sanPham,callback)
{
    var query = "SELECT * sanpham WHERE MaSanPham=?";
    
	db.executeParamsQuery(query,sanPham,(err,data)=>{
		callback(err,data);
	});
}
exports.TimKiemMaSanPham =(sanPham,callback)=>{
    var query="SELECT * FROM sanpham WHERE 'KEY' =?";
    db.executeParamsQuery(query,sanPham,(err,data)=>{
        callback(err,data);
    });
}
exports.TimKiemSanPhamTheoHSX=(callback)=>{
    var query="SELECT MaHangSanXuat FROM sanpham GROUP BY (MaHangSanXuat)";
    db.executeParamsQuery(query,(err,data)=>{
        callback(err,data);
    });
}
exports.TimKiemMotSanPhamHSX=(ten,callback)=>{
    var query="SELECT FLOOR(COUNT(*)/9) AS kq FROM sanpham WHERE MaHangSanXuat =?";
    db.executeParamsQuery(query,ten,(err,data)=>{
        callback(err,data);
    });
}
exports.TimKiemSanPhamTheoGia=(GiaBD,GiaKT,callback)=>{
    var query="SELECT FLOOR(COUNT(*)/9) AS kq FROM sanpham WHERE GiaSanPham >=? AND GiaSanPham <=?";
    db.executeParamsQuery(query,[GiaBD,GiaKT],(err,data)=>{
        callback(err,data);
    });
}
exports.TimSanPhamTheoLoai=(sanPham,callback)=>{
    var query="SELECT FLOOR(COUNT(*)/9) AS kq FROM sanpham WHERE MaLoaiSanPham=?";
    db.executeParamsQuery(query,sanPham,(err,data)=>{
        callback(err,data);
    });
}
exports.TimKiemTrangSanPhamHSX=(ten,MaTrang,callback)=>{
    var offset = MaTrang === 1 ? 0 : MaTrang * 9;
	var limit = 9;
    var query="SELECT * FROM sanpham WHERE MaHangSanXuat=? limit?,? ";
    db.executeParamsQuery(query,[ten,offset,limit],(err,data)=>{
        callback(err,data);
    });
}
exports.TimKiemTrangSanPhamGia=(GiaBD,GiaKT,MaTrang,callback)=>{
    var offset=MaTrang===1?0:MaTrang*9;
    var limit=9;
    var query="SELECT * FROM sanpham WHERE GiaSanPham >=? AND GiaSanPham <= ? limit ?,?";
    db.executeParamsQuery(query,[GiaBD,GiaKT,offset,limit],(err,data)=>{
        callback(err,data);
    });
}
exports.TimKiemTrangSanPhamLoai=(sanPham,MaTrang,callback)=>{
    var offset = MaTrang === 1 ? 0 : MaTrang * 9;
    var limit = 9;
    var query = "SELECT * FROM sanpham WHERE MaLoaiSanPham = ? limit ?, ?";
    console.log(sanPham);
    db.executeParamsQuery(query,[sanPham,offset,limit],(err,data)=>{
        callback(err,data);
    });

}
exports.TimTrangSanPham=(sanPham,callback)=>{
    var MaTrang=Number(sanPham);
    var offset=MaTrang===1 ? 0 : MaTrang * 9;
    var limit=9;
    var query="SELECT *from sanpham limit?,?";
    console.log(sanPham);
    db.executeParamsQuery(query,[offset,limit],(err,data)=>{
        callback(err,data);
    });
}
exports.TimSoTrangSanPham=(callback)=>{
    var query="SELECT FLOOR(COUNT(*)/9) AS kq FROM sanpham";
    db.executeParamsQuery(query,(err,data)=>{
        callback(err,data);
    });
}
