const amount = document.getElementById("amount").value;
const currency = document.getElementById("currency").value;
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

convertBtn.addEventListener("click", () => {
    if (amount === "" || amount === null) {
        result.textContent = "Ошибка: Введите сумму!"
    } else {
        result.textContent = amount;
    }
});