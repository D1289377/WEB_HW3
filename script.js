document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const user = this.elements[0].value;
    alert(`模擬登入成功，歡迎 ${user}！`);
});
