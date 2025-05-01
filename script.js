// 密碼顯示/隱藏功能
document.addEventListener("DOMContentLoaded", () => {
    const passwordToggle = document.querySelector(".password-toggle")
    const passwordInput = document.querySelector(".password-group input")

    if (passwordToggle && passwordInput) {
        passwordToggle.addEventListener("click", () => {
            if (passwordInput.type === "password") {
                passwordInput.type = "text"
            } else {
                passwordInput.type = "password"
            }
        })
    }

    // 表單驗證
    const loginForm = document.getElementById("login-form")
    const inputs = loginForm.querySelectorAll("input")

    // 初始顯示錯誤訊息
    inputs.forEach((input) => {
        input.classList.add("invalid")
    })

    // 輸入時移除錯誤狀態
    inputs.forEach((input) => {
        input.addEventListener("input", function () {
            if (this.value.trim() !== "") {
                this.removeAttribute("invalid")
            } else {
                this.setAttribute("invalid", "")
            }
        })
    })

    // 登入表單提交
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault()

            let isValid = true

            // 檢查所有必填欄位
            inputs.forEach((input) => {
                if (input.value.trim() === "") {
                    input.setAttribute("invalid", "")
                    isValid = false
                } else {
                    input.removeAttribute("invalid")
                }
            })

            if (isValid) {
                const username = inputs[0].value
                alert(`模擬登入成功，歡迎 ${username}！`)
            }
        })
    }
})

const passwordInput = document.getElementById('password-input');
const passwordToggle = document.getElementById('password-toggle');

passwordToggle.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordToggle.src = 'img/睜眼.jpg'; // 切換為睜眼圖片
    } else {
        passwordInput.type = 'password';
        passwordToggle.src = 'img/閉眼.jpg'; // 切換為閉眼圖片
    }
});