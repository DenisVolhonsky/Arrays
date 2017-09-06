// Задание 1
// Дан массив
// var m = [7, [7, 8,9], 17]
// Как вывести на экран число 9 из данного массива?
var arr1 = [7, [7, 8,9], 17];
console.log('%c%s', 'color: red; font-size: 15px;','Task1: ');
console.log(arr1[1][2]);

// Задание 2
// Дан массив
// var m = [5, {“one”: 2000, “two”: 4000}, 56]
// Как вывести на экран число 4000 из данного массива? Число 56?
var arr2 = [5, {'one': 2000, 'two': 4000}, 56];
console.log('%c%s', 'color: red; font-size: 15px;','Task2: ' );
console.log(arr2[1]['two']+', '+arr2[2]);

// Задание 3
// Дан массив
// var m ={“one”: 5, “two”: [23, 45]}
// Как вывести на экран число 45 из данного массива?
var arr3 ={'one': 5, 'two': [23, 45]}
console.log('%c%s', 'color: red; font-size: 15px;','Task3: ');
console.log(arr3['two'][1]);


// Задание 4
// Дан массив
// var m ={“one”: 5, “two”: {“kkk”:23,”mmm”: 45}}
// Как вывести на экран число 45 из данного массива?
var arr4 ={'one': 5, 'two': {'kkk':23,'mmm': 45}}
console.log('%c%s', 'color: red; font-size: 15px;','Task4: ');
console.log(arr4.two.mmm);


// Задание 5
// Дан массив
// var m =[{“mts”: “+38050556677”, “life”: “+093445566”}, {“mts”:
// “+38050665544”, “life”: “+093112233”} ]
// С помощью цикла for выведите на экран все телефоны mts.
// Затем, все life и mts.
var arr5 =[{'mts': '+38050556677', 'life': '+093445566'}, {'mts':
'+38050665544', 'life': '+093112233'} ]
console.log('%c%s', 'color: red; font-size: 15px;','Task5: ');
for(var i=0; i<arr5.length; i++) {
	console.log('mts:' +arr5[i]['mts']);
}
console.log('Все life и mts:');
for(var i=0; i<arr5.length; i++) {
	console.log('life: ' +arr5[i]['life']);
}
for(var i=0; i<arr5.length; i++) {
	console.log('mts:' +arr5[i]['mts']);
}

// Задание 6
// Дан массив
// var m ={
// “phone1” : {“mts”: “+38050556677”, “life”: “+093445566”},
// “phone2”: {“mts”: “+38050665544”, “life”: “+093112233”}
// }
// С помощью цикла for выведите на экран все телефоны mts.
// Затем, все life и mts.
var arr6 ={
'phone1' : {'mts': '+38050556670', 'life': '+093445569'},
'phone2': {'mts': '+38050665540', 'life': '+093112239'}
}
console.log('%c%s', 'color: red; font-size: 15px;','Task6: ');
for(var key in arr6) {
	console.log('mts: ' +arr6[key]['mts']);
}
console.log ('Все life и mts:');
for(var key in arr6) {
	console.log('mts: ' +arr6[key]['mts']);
}
for(var key in arr6) {
	console.log('life: ' +arr6[key]['life']);
}

// Задание 7
// Дан массив
// var m =[[ “+38050556677”, “+093445566”], [ “+38050665544”,
// “+093112233”]]
// С помощью цикла for выведите на экран все телефоны.
var arr7 =[[ '+38050556677', '+093445566'], [ '+38050665544', '+093112233']]
console.log('%c%s', 'color: red; font-size: 15px;','Task7: ');
for(var i=0; i<arr7.length; i++) {
	for(var j=0; j<arr7.length; j++){
		console.log(arr7[i][j]);	

	}
}

// Задание 8
// Дан массив var mas = [2, 3, 4, 5, 6, 4, 77, 32, 4]; Выведите его на страницу в
// формате “индекс” –“значение”.
console.log('%c%s', 'color: red; font-size: 15px;','Task8: ');
var mas8 = [2, 3, 4, 5, 6, 4, 77, 32, 4];
for (var i=0; i<mas8.length; i++) {
console.log(i +' - '+ mas8[i]);
}

// Задание 9
// Дан массив
// var a = [4, 5, 6, 7, 8, 12, 32, 21, 41, 34, 25, 15, 11, 'hello'];
// Выведите те элементы массива, которые меньше 35.
console.log('%c%s', 'color: red; font-size: 15px;','Task9: ');
var arr9 = [4, 5, 6, 7, 8, 12, 32, 21, 41, 34, 25, 15, 11, 'hello'];

for(var i=0; i<arr9.length; i++) {
	if(arr9[i]<35) {
		console.log(arr9[i]);
	}
}

// Задание 10
// Дан массив
// var b = {
// {"name" : "Alex", "age": 17},
// {"name" : "Ivan", "age": 27},
// {"name" : "Sergey", "age": 28},
// {"name" : "Vitaliy", "age": 30},
// {"name" : "Olga", "age": 24},
// }
// Выведите с помощью цикла for-in только имена людей из данного
// массива.
console.log('%c%s', 'color: red; font-size: 15px;','Task10: ');
var arr10 =[
{"name" : "Alex", "age": 17},
{"name" : "Ivan", "age": 27},
{"name" : "Sergey", "age": 28},
{"name" : "Vitaliy", "age": 30},
{"name" : "Olga", "age": 24}
];

	for (var i=0; i<arr10.length; i++) { 
	console.log(arr10[i]['name']);
}

// Задание 11
// Используя массив из предыдущей задачи.
// Создайте input, куда пользователь может ввести возраст человека. При
// нажатии кнопки показываются имена тех людей, чей возраст равен или
// меньше указанного.

var arr11 =[
{"name" : "Alex", "age": 17},
{"name" : "Ivan", "age": 27},
{"name" : "Sergey", "age": 28},
{"name" : "Vitaliy", "age": 30},
{"name" : "Olga", "age": 24}
];

document.getElementById('btn').onclick = age;

function age() {

	var inp = document.getElementById('inp').value;
	var rezult = document.getElementById('rezult');

	for (var i=0; i<arr11.length; i++) {
		if(arr11[i]['age']<=inp) {
			rezult.innerHTML += ' ' +arr11[i]['name']+ ' '; 
		}
	}
}

// Задание 12
// Используя массив из предыдущей задачи.
// Создайте input, куда пользователь может ввести имя человека. При
// нажатии кнопки показывается возраст человека.
var arr12 = [
	{"name" : "Alex", "age": 17},
	{"name" : "Ivan", "age": 27},
	{"name" : "Sergey", "age": 28},
	{"name" : "Vitaliy", "age": 30},
	{"name" : "Olga", "age": 24}
	];

document.getElementById('btn_name').onclick = AgeByName;

function AgeByName(){

    var inp1 = document.getElementById('inp_name').value;
	var rezult1 = document.getElementById('rezult_age');

	 
	for (var i=0; i<arr12.length; i++) {
		if(arr12[i]['name'] == inp1) {
			rezult1.innerHTML += ' ' +arr12[i]['age']+ ' '; 
		 }
	}
}

// Задание 13
// Создайте произвольный ассоциативный массив. Напишите скрипт,
// который считает количество элементов массива.
console.log('%c%s', 'color: red; font-size: 15px;','Task13: ');
var arr13 = {
	"name" : "Alex", 
	"age": 17,
	"name1" : "Ivan",
	"age1": 27,
	"name2" : "Sergey",
	"age2": 28,
	"name3" : "Vitaliy",
	"age3": 30,
	"name4" : "Olga", 
	"age4": 24
}	
	var i=0;
	for (var key in arr13) {
		i++;
	}
	console.log(i);

	