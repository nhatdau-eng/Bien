function showWelcome(user) {
    let name = user.name || "Khách";
    let badge = user.isVip ? "*" : "";

    console.log("Chào mừng " + name + " " + badge);
}