// ЗАДАНИЕ 
// Високосный год.
// Написать функцию, которая выводит true or false в ответ на введенный год
// И функцию, которая выводит все високосные годы в 21 веке

function leap_year(year) {
	var answer;
	if (year%4 == 0 && year%100 !=0 || year%400 ==0) {
		answer = true;
	} else {
		answer = false;
	}
	return year +" год високосный? Ответ: "+ answer;
}

function all_leap_years() {
	var j=1;
	for (var i=2001; i<2100; i++){ 
			if (leap_year(i)) {
				console.log(`${j++} високосный год в 21 веке: ${i}`);
			}
		}
}

console.log(leap_year(1600));
all_leap_years()
