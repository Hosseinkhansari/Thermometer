let base_temp = document.getElementById("temp_base")
let convert_temp = document.getElementById("convert_base")
let input = document.getElementById("num")
let res = document.getElementById("res")
let convert_btn = document.getElementById("convert")
let reset_btn = document.getElementById("reset")
let res_str = ""
let temp = 0


// انجام عملیات

convert_btn.addEventListener("click", () =>{
    // تبدیل کلوین به بقیه
    if (base_temp.value == "Kelvin(K)") {
        let k = Number(input.value)

        // کمتر از صفر مطلق نباشه
        if (k < 0)
            res_str = "Temperature cannot be below absolute zero(0 K)."

        // کلوین به کلوین
        else if (convert_temp.value == "Kelvin(K)"){
            temp = k
            temp = Number(temp.toFixed(2))
            res_str = `${k}(K) is: ${temp}(K)`
        }

        // کلوین به سلسیوس
        else if (convert_temp.value == "Celsius(°C)"){
            temp = k - 273.15
            temp = Number(temp.toFixed(2))
            res_str = `${k}(K) is: ${temp}(°C)`
        }


        // کلوین به فارنهایت
        else{
            temp = (k * 9 / 5) - 459.67
            temp = Number(temp.toFixed(2))
            res_str = `${k}(K) is: ${temp}(°F)`
        }

    }


        // تبدیل سلسیوس به بقیه
    else if (base_temp.value == "Celsius(°C)"){
        let c = Number(input.value)

        // کمتر از صفر مطلق نباشه
        if (c < -273.15)
            res_str = "Temperature cannot be below absolute zero(-273.15 °C)."

        // سلسیوس به سلسیوس
         else if (convert_temp.value == "Celsius(°C)"){
            temp = c
            temp = Number(temp.toFixed(2))
            res_str = `${c}(°C) is: ${temp}(°C)`
        }

        // تبدیل سلسیوس به کلوین
        else if (convert_temp.value == "Kelvin(K)"){
            temp = c + 273.15
            temp = Number(temp.toFixed(2))
            res_str = `${c}(°C) is: ${temp}(K)`
        }

        // تبدیل سلسیوس به فارنهایت
        else{
            temp = (c * 9 / 5) + 32
            temp = Number(temp.toFixed(2))
            res_str = `${c}(°C) is: ${temp}(°F)`
        }
    }


    // تبدیل فارنهایت به بقیه
    else if (base_temp.value == "Fahrenheit(°F)"){
        let f = Number(input.value)

        // کمتر از صفر مطلق نباشه
        if (f < -459.67)
            res_str = "Temperature cannot be below absolute zero(-459.67 °F)."

        // فارنهایت به فارنهایت
        else if (convert_temp.value == "Fahrenheit(°F)"){
            temp = f
            temp = Number(temp.toFixed(2))
            res_str = `${f}(°F) is: ${temp}(°F)`
        }

        // فارنهایت به کلوین
        else if (convert_temp.value == "Kelvin(K)"){
            temp = ((f - 32) * 5 / 9) + 273.15
            temp = Number(temp.toFixed(2))
            res_str = `${f}(°F) is: ${temp}(K)`
        }

        // فارنهایت به سلسیوس
        else{
            temp = (f - 32) * 5 / 9
            temp = Number(temp.toFixed(2))
            res_str = `${f}(°F) is: ${temp}(°C)`
        }
    }

    res.innerHTML = res_str
    res.style.display = "block"
})


// دکمه ریست

reset_btn.addEventListener("click", () =>{
    base_temp.value = "Kelvin(K)"
    convert_temp.value = "Kelvin(K)"
    input.value = 0
    res.style.display = "none"
})