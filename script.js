document.addEventListener("DOMContentLoaded", () => {
    // 密碼顯示/隱藏功能
    const passwordToggle = document.getElementById("password-toggle");
    const passwordInput = document.querySelector(".password-group input");

    if (passwordToggle && passwordInput) {
        let isPasswordVisible = false;

        passwordToggle.addEventListener("click", () => {
            if (isPasswordVisible) {
                passwordInput.type = "password";
                passwordToggle.src = "img/閉眼.jpg";
                isPasswordVisible = false;
            } else {
                passwordInput.type = "text";
                passwordToggle.src = "img/睜眼.jpg";
                isPasswordVisible = true;
            }
        });
    }

    // 登入表單提交
    const loginForm = document.getElementById("login-form"); // 正確 ID
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            window.location.href = "stolen.html"; // 頁面跳轉
        });
    }
});

