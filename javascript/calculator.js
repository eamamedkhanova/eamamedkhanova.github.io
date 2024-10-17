function calculateBMI() {

    var weight = parseFloat(document.getElementById("weight").value);
    
    var height = parseFloat(document.getElementById("height").value) / 100; // переводим см в метры
    
    var bmi = weight / (height * height);
    
    var result = document.getElementById("result");
    
    if (!isNaN(bmi)) {
    
    result.innerHTML = "Ваш ИМТ " + bmi.toFixed(2);
    
    } else {
    
    result.innerHTML = "Введите валидные данные";
    
    }
    
    }