// sách
$("#sua_sach").submit(function(evnet){
    alert("Sửa sách thành công");
  });
  $("#them_sach").submit(function(evnet){
    alert("Thêm sách thành công");
  });
//xóa
$onDeleteSach = $(".table tbody td a.xoasach");
$onDeleteSach.click(function () {
    var id = $(this).attr("data-id");
    
    var request = {
        url: `http://localhost:2000/api/sach/${id}`,
        method: "DELETE",
        
    };
    console.log(request)
    if (confirm("Bạn có muốn xóa sách này không?")) {
        $.ajax(request).done(function (response) {
            alert("Xóa sách thành công!");
            location.reload();
        });
    }
});



// thể loại sách
//thêm
$("#them_theloaisach").submit(function(evnet){
  alert("Thêm thể loại sách thành công");
});
//xóa
$onDeleteTheLoaiSach = $(".table tbody td a.xoatheloaisach");
$onDeleteTheLoaiSach.click(function () {
  var id = $(this).attr("data-id");
  
  var request = {
      url: `http://localhost:2000/api/theloaisach/${id}`,
      method: "DELETE",
  };
  console.log(request)
  if (confirm("Bạn có muốn xóa thể loại sách này không?")) {
      $.ajax(request).done(function (response) {
          alert("Xóa thể loại sách thành công!");
          location.reload();
      });
  }
});
//sửa
$("#sua_theloaisach").submit(function(evnet){
  alert("Sửa thể loại sách thành công");
});

// nhà xuất bản
//sửa
// $("#sua_sach").submit(function(evnet){
//     alert("sửa thành công");
//   });
//thêm
$("#them_nhaxuatban").submit(function(evnet){
  alert("Thêm nhà xuất bản thành công");
});
//xóa
$onDeleteNhaXuatBan = $(".table tbody td a.xoanhaxuatban");
$onDeleteNhaXuatBan.click(function () {
  var id = $(this).attr("data-id");
  
  var request = {
      url: `http://localhost:2000/api/nhaxuatban/${id}`,
      method: "DELETE",
  };
  console.log(request)
  if (confirm("Bạn có muốn xóa nhà xuất bản này không?")) {
      $.ajax(request).done(function (response) {
          alert("Xóa nhà xuất bản thành công!");
          location.reload();
      });
  }
});

// tác giả
//sửa
// $("#sua_sach").submit(function(evnet){
//     alert("sửa thành công");
//   });
//thêm
$("#them_tacgia").submit(function(evnet){
  alert("Thêm tác giả thành công");
});
//xóa
$onDeleteTacGia = $(".table tbody td a.xoatacgia");
$onDeleteTacGia.click(function () {
  var id = $(this).attr("data-id");
  
  var request = {
      url: `http://localhost:2000/api/tacgia/${id}`,
      method: "DELETE",
  };
  console.log(request)
  if (confirm("Bạn có muốn xóa tác giả này không?")) {
      $.ajax(request).done(function (response) {
          alert("Xóa tác giả thành công!");
          location.reload();
      });
  }
});

// chi tiết tác giả
//sửa
// $("#sua_sach").submit(function(evnet){
//     alert("sửa thành công");
//   });
//thêm
$("#them_chitiettacgia").submit(function(evnet){
  alert("Thêm chi tiết tác giả thành công");
});
//xóa
$onDeleteChiTietTacGia = $(".table tbody td a.xoachitiettacgia");
$onDeleteChiTietTacGia.click(function () {
  var id = $(this).attr("data-id");
  
  var request = {
      url: `http://localhost:2000/api/chitiettacgia/${id}`,
      method: "DELETE",
  };
  console.log(request)
  if (confirm("Bạn có muốn xóa chi tiết tác giả này không?")) {
      $.ajax(request).done(function (response) {
          alert("Xóa chi tiết tác giả thành công!");
          location.reload();
      });
  }
});

// khách hàng
//sửa
// $("#sua_sach").submit(function(evnet){
//     alert("sửa thành công");
//   });
//xóa
$onDeleteKhachHang = $(".table tbody td a.xoakhachhang");
$onDeleteKhachHang.click(function () {
  var id = $(this).attr("data-id");
  
  var request = {
      url: `http://localhost:2000/api/khachhang/${id}`,
      method: "DELETE",
  };
  console.log(request)
  if (confirm("Bạn có muốn xóa khách hàng này không?")) {
      $.ajax(request).done(function (response) {
          alert("Xóa khách hàng thành công!");
          location.reload();
      });
  }
});
// bài viết
//sửa
// $("#sua_sach").submit(function(evnet){
//     alert("sửa thành công");
//   });
//thêm
$("#them_baiviet").submit(function(evnet){
  alert("Thêm bài viết thành công");
});
//xóa
$onDeleteBaiViet = $(".table tbody td a.xoabaiviet");
$onDeleteBaiViet.click(function () {
  var id = $(this).attr("data-id");
  
  var request = {
      url: `http://localhost:2000/api/baiviet/${id}`,
      method: "DELETE",
  };
  console.log(request)
  if (confirm("Bạn có muốn xóa bài viết này không?")) {
      $.ajax(request).done(function (response) {
          alert("Xóa bài viết thành công!");
          location.reload();
      });
  }
});