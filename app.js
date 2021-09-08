form.addEventListener("submit", function (el) {
  el.preventDefault();

  const dollar_to_sum = 10696.27; // 1 $ = 10696.27 sum
  const euro_to_sum = 12658.39; // 1 euro = 12658.39 sum

  let input_1 = document.getElementById("first_char");
  let input_2 = document.getElementById("third_char");

  let value_input_1 = input_1.value.trim() - 0;
  let value_input_2 = input_2.value.trim() - 0;

  let currency_1 = document.getElementById("second_char");
  let currency_2 = document.getElementById("forth_char");

  let value_currency_1 = currency_1.value - 0;
  let value_currency_2 = currency_2.value - 0;

  // console.log(input_1);
  // console.log(input_2);

  if (value_currency_1 === value_currency_2 ) {
    input_2.value = input_1.value;
    

  } else if (value_currency_1 === 2 && value_currency_2 === 1) {
    input_2.value = (input_1.value / dollar_to_sum).toFixed(6);

  } else if (value_currency_1 === 2 && value_currency_2 === 3){
    input_2.value = (input_1.value / euro_to_sum).toFixed(6);

  }else if (value_currency_1 === 1 && value_currency_2 === 2) {
    input_2.value = (input_1.value * dollar_to_sum).toFixed(2);

  } else if (value_currency_1 === 3 && value_currency_2 === 2) {
    input_2.value = (input_1.value * euro_to_sum).toFixed(2);
    
  } else if (value_currency_1 === 1 && value_currency_2 === 3) {
    input_2.value = (input_1.value * (dollar_to_sum / euro_to_sum)).toFixed(2);
  }
});
