function checkLogin (inputPassword, storedPassword, userRole) {
    if (inputPassword === storedPassword) {
        console.log("Đăng nhập thành công!");
        let message =
         (userRole === "admin") 
            ?"Chào mừng quản trị viên."
             :userRole==="editor" 
             ?"Chào mừng biên tập viên."
             :"Chào mừng thành viên." ;
              console.log(message);

    } else {

        console.log("Mật khẩu sai!");
    }
}
checkLogin(0, "0", "admin");