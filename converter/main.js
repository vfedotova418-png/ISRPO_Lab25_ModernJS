const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

convertBtn.addEventListener("click", () => {
    let amount = document.getElementById("amount").value;
    let currency = document.getElementById("currency").value;
    if (amount === "" || amount === null) {
        result.textContent = "Ошибка: Введите число";
        return;
    }
    amount = parseFloat(amount);
    if (isNaN(amount) || amount <= 0) {
        result.textContent = "Ошибка: Некорректный ввод";
        return;
    }
    if (currency === "EUR") {
        result.textContent = `Итог: ${(amount * 0.0107).toFixed(4)} ${currency}`;
    }
    if (currency === "USD") {
        result.textContent = `Итог: ${(amount * 0.0123).toFixed(4)} ${currency}`;
    }
});