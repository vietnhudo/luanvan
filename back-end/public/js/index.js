// sách
// $("#sua_sach").submit(function(evnet){
//     alert("sửa thành công");
//   });
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
//sửa
// $("#sua_sach").submit(function(evnet){
//     alert("sửa thành công");
//   });
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