
    function getUserDashboard(user) {
        // 1. Xử lý hiển thị tên (Lỗi: Welcome, undefined)
        let displayName = user?.profile?.name || "Guest";
        console.log("Welcome, " + displayName);
        // 2. Xử lý hiển thị ảnh đại diện (Lỗi: Sập hệ thống nếu user.profile null)
        let avatarImg= user?.profile?.avatar ||"default-avatar.png";
        // 3. Xử lý hiển thị nút quản trị (Rất rối rắm)
        let adminPanel = 
        user?.isLoggedIn && user?.role === "ADMIN" 
        ? "OPEN ADMIN PANEL "
        :"Please Login";
        // 4. Xử lý màu sắc hiển thị dựa trên trạng thái (Dùng if-else dài dòng)
        let statusColor=
        user?.status === "active"
        ? "green"
        : "gray";

    console.log("------------------------------------------");
    console.log("Welcome, " + displayName);
    console.log("Avatar: " + avatarImg);
    console.log("Status Color: " + statusColor);
    console.log("Action: " + adminPanel);
    console.log("------------------------------------------");
}
