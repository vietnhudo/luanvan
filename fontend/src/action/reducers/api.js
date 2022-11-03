import callApi from '../../view/api/callApi'
import { loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess} from "../../redux/khachhang";
export const loginKhachHang = async (khachhang, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        callApi("api/khachhang/dangnhap", "POST", khachhang).then((res) => {
            dispatch(loginSuccess(res.data));
            navigate("/");
            alert("Đăng nhập thành công")
        }).catch((err)=>{
            alert("Đăng nhập không thành công");
        });

    } catch (err) {
        alert("Đăng nhập không thành công!!!");
        dispatch(loginFailed());
    }
};


//navigate là khi đăng ký hay đăng nhập sẽ quay về trang index
export const dangkyKhachHang = async (khachhang, dispatch,navigate) =>{
    dispatch(registerStart());
    try{
        callApi("api/khachhang/dangky","POST",khachhang).then((res)=>{
            dispatch(registerSuccess(res.data));
            navigate("/dangnhap");
        });
    }catch(err){
        dispatch(registerFailed());
    }
}


// export const nguoiDungLienHe = async (nguoidung, dispatch,navigate) =>{
//     dispatch(registerStart());
//     try{
//         callApi("api/khachhang/lienhe","POST",nguoidung).then((res)=>{
//             dispatch(registerSuccess(res.data));
//             navigate("/sach");
//         });
//     }catch(err){
//         dispatch(registerFailed());
//     }
// }