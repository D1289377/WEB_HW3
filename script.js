// 密碼顯示/隱藏功能
document.addEventListener("DOMContentLoaded", () => {
    const passwordToggle = document.getElementById("password-toggle")
    const passwordInput = document.querySelector(".password-group input")

    if (passwordToggle && passwordInput) {
        let isPasswordVisible = false

        passwordToggle.addEventListener("click", () => {
            if (isPasswordVisible) {
                // 切換回密碼模式
                passwordInput.type = "password"
                passwordToggle.src = "img/閉眼.jpg"
                isPasswordVisible = false
            } else {
                // 切換到文字模式
                passwordInput.type = "text"
                passwordToggle.src = "img/睜眼.jpg"
                isPasswordVisible = true
            }
        })
    }

    // 登入表單提交
    const loginForm = document.getElementById("login-form")
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault()
            const inputs = this.querySelectorAll("input")
            const username = inputs[0].value
            alert(`模擬登入成功，歡迎 ${username}！`)
        })
    }
})

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // 阻止表單的預設提交行為
    window.location.href = 'stolen.html'; // 跳轉到新的畫面
});

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // 阻止表單的預設提交行為
            window.location.href = "stolen.html"; // 跳轉到新的畫面
        });
    }
});