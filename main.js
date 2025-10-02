
const date = "20240801";       
const time_period = "m";      

// Базовий URL НБУ
const baseUrl = "https://bank.gov.ua/NBUStatService/v1/statdirectory/banksincexp";

// Створюємо обʼєкт URL
const url = new URL(baseUrl);


url.searchParams.append("date", date);
url.searchParams.append("period", time_period);
url.searchParams.append("json", "");


console.log("Constructed URL:", url.toString());
