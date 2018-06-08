var db = require('./dataAccessObject')

//Them san pham
exports.ThemSanPham= function(sanPham, release)
{
    var query = "INSERT INTO sanpham SET ?";
    db.executeParamsQuery(query, sanPham, function (err, data)
    {
        callback(err, data);
    });
}

//Sua san pham
exports.SuaSanPham = function(sanPham, release)
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
    
	db.executeParamsQuery(query,[sanPham.MaSanPham],function(err,data){
		callback(err,data);
	});
}

//Tim kiem
exports.TimKiem = function(sanPham,callback)
{
    var query = "SELECT * sanpham WHERE ?";
    
	db.executeParamsQuery(query,[sanPham.MaSanPham],function(err,data){
		callback(err,data);
	});
}