
// Варіант 2 — доходи та витрати банків
const date = "202408";        
const time_period = "m";     


const baseUrl = "https://bank.gov.ua/NBUStatService/v1/statdirectory/banks_income_expenses";

// Створюємо обʼєкт URL
const url = new URL(baseUrl);


url.searchParams.append("date", date);
url.searchParams.append("period", time_period);
url.searchParams.append("json", "");


console.log("Constructed URL:", url.toString());

