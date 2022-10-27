// sách
// $("#sua_sach").submit(function(evnet){
//     alert("sửa thành công");
//   });
//   $("#them_dulieusach").submit(function(evnet){
//     alert("Thêm dữ liệu thành công");
//   });
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
            alert("Xóa thành công!");
            location.reload();
        });
    }
});