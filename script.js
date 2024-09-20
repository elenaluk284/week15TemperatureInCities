// Массив городов
let cities = ["Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург", "Красноярск"];

// Пустой массив для температур
let temperatures = [];

// Запрашиваем у пользователя температуру для каждого города
cities.forEach((city) => {
    let temperature = prompt(`Введите температуру в городе ${city}:`);
    // Проверяем, чтобы пользователь ввел значение
    if (temperature !== null && temperature !== "") {
        // Преобразуем введенное значение в число и добавляем в массив
        temperatures.push(Number(temperature));
    } else {
        // Если пользователь не ввел значение, добавляем NaN в массив
        temperatures.push(NaN);
    }
});

// Находим максимальную и минимальную температуру
let maxTemperature = Math.max(...temperatures.filter(temp => !isNaN(temp)));
let minTemperature = Math.min(...temperatures.filter(temp => !isNaN(temp)));

// Выводим информацию на страницу
const cityTemperaturesDiv = document.getElementById('city-temperatures');
const maxTempSpan = document.getElementById('max-temp');
const minTempSpan = document.getElementById('min-temp');

// Очищаем содержимое перед выводом
cityTemperaturesDiv.innerHTML = '';

// Создаем список городов и их температур
for (let i = 0; i < temperatures.length; i++) {
    let city = cities[i];
    let temperature = temperatures[i];
    let listItem = document.createElement('div');
    listItem.classList.add('city-item');
    listItem.textContent = `${city}: ${temperature}°C`;
    cityTemperaturesDiv.appendChild(listItem);
}

// Выводим максимальную и минимальную температуру
maxTempSpan.textContent = `${maxTemperature}°C`;
minTempSpan.textContent = `${minTemperature}°C`;
