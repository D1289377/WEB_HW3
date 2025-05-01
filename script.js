document.addEventListener("DOMContentLoaded", () => {
    // 密碼顯示/隱藏功能
    const passwordToggle = document.getElementById("password-toggle");
    const passwordInput = document.querySelector(".password-group input");

    if (passwordToggle && passwordInput) {
        let isPasswordVisible = false;

        passwordToggle.addEventListener("click", () => {
            isPasswordVisible = !isPasswordVisible;
            passwordInput.type = isPasswordVisible ? "text" : "password";
            passwordToggle.src = isPasswordVisible ? "img/睜眼.jpg" : "img/閉眼.jpg";
        });
    }

    // 登入驗證
    const loginForm = document.getElementById("login-form");
    const inputs = document.querySelectorAll(".login-input");
    const errorMessages = document.querySelectorAll(".error-message");

    // 初始：隱藏錯誤訊息
    errorMessages.forEach(msg => msg.style.display = "none");

    // ✅ 即時監聽輸入，輸入後隱藏對應的錯誤訊息
    inputs.forEach((input, index) => {
        input.addEventListener("input", () => {
            if (input.value.trim()) {
                errorMessages[index].style.display = "none";
            }
        });
    });

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault(); // 先阻止預設送出
            let isValid = true;

            inputs.forEach((input, index) => {
                const errorMsg = errorMessages[index];
                if (!input.value.trim()) {
                    errorMsg.style.display = "block";
                    isValid = false;
                } else {
                    errorMsg.style.display = "none";
                }
            });

            if (isValid) {
                window.location.href = "stolen.html";
            }
        });
    }
});
