// Варіант 2 — доходи та витрати банків
const date = "202408";        // дата
const time_period = "m";      // період

// Базовий URL НБУ
const baseUrl = "https://bank.gov.ua/NBUStatService/v1/statdirectory/banks_income_expenses";

// Створюємо обʼєкт URL
const url = new URL(baseUrl);

// Додаємо параметри через searchParams
url.searchParams.append("date", date);
url.searchParams.append("period", time_period);
url.searchParams.append("json", "");

// Виводимо URL у консоль
console.log("Constructed URL:", url.toString());
