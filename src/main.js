// Work in this directory: src
//1. Declare a variable and assign a string as a value. Make sure the string is at least 6 characters long. Print the variable to the console.
let firstName = "JavaScript";
console.log(firstName);

//2. What is the difference between "5" and 5?
//"5" - სტრინგი, 5 - ჩვეულებრივი ციფრი

//3.Declare a variable and assign a number as a value. Make sure the number is greater than 9. Print the variable to the console.
let a = 17;
console.log(a);

//4. Declare a variable and assign a boolean as a value. Print the variable to the console.
let isNight = true;
console.log(isNight);

//5. What operators give us a boolean result?
//A. Comparison Operators (like ==, ===, >, <) compare values and return a boolean.
//B. Logical Operators (&&, ||, !) combine or negate conditions and return a boolean.
//C. Ternary Operator (condition ? true : false) also gives a boolean result based on the condition.

//6. Declare a variable with the value of "Hello". Covert the value to upper case and print the converted value to the console.
let greetings = "Hello".toUpperCase();
console.log(greetings);

//7. Declare another variable with the value of "World". Convert the value to lower case and print the converted value to the console.
let universe = "World".toLowerCase();
console.log(universe);

//8
let text = 'Hello';
text.toUpperCase();
console.log(text);
//What is the value of the variable text before and after the method is called?
// სანამ .toUpperCase() გამოვიძახებდით, text-ის მნიშვნელობა იყო, `Hello`, თუმცა მას შემდეგ რაც გამოვიძახეთ .toUpperCase(), ტექსტის მნიშვნელობა დარჩა იგივე, ანუ ისევ `Hello`, უბრალოდ ასოები გახდნენ დიდები(`HELLO`).

//9. 
let text;
console.log(text);
//What is the value of the variable text?
//ამ შემთხვევაში text ცვლადი არსებობს, თუმცა მას არ აქვს რაიმე მნიშვნელობა მინიჭებული, ამიტომ მისი მნიშვნელობა იქნება განუსაზღვრელი ანუ undefind-ს.

//10 Find an error in the following code:
let text = 'Hello';
console.log(text.toLowercase());
//.toLowercase() წერია არასწორად, რადგან js-ში წერის დროს ვიყენებთ მეთოდს, სახელად CamelCase რაც ნიშნავს იმას, რომ ყოველი შემდეგი სიტყვა უნდა დაიწყოს დიდი ასოთი, აქედან გამომდინარე, კოდი იმუშავბს თუ ასე დავწერთ .toLowerCase ("C" დიდი ასოთი).

//11 Find and fix the error in the following code:
/let age = prompt('How old are you?');
let nextAge = age + 1;
console.log(`Next year you will be ${nextAge}`);
//the corect form, for the code:
let age = prompt('How old are you?');
let nextAge = Number(age) + 1; 
console.log(`Next year you will be ${nextAge}`);
//ამ კოდში შეცდომა ის იყო, რომ prompt() მეთოდი აბრუნებს სტრიქონს, და როდესაც ასაკს 1-ს ვუმატებთ, ის რეალურად აერთიანებს სტრიქონს და არ ასრულებს შეკრებას. ამის გამოსასწორებლად, აუცილებელია ასაკი გარდავქმნათ რიცხვად, ისე როგორც მეორე შემთხვევაშია მოცემული.

//12 Finish the code:
let name = prompt('What is your name?');
let age = Number(prompt('How old are you?'));
let isInSixties  = age >= 60 && age <= 69;
console.log(`${name} is in sixties: ${isInSixties}`);

//13 What is the value of x?
let x = 5;
console.log(x++);
console.log(x);
//x++ ოპერატორი ჯერ ბეჭდავს x-ის მნიშვნელობას, შემდეგ კი ზრდის. ასე რომ, console.log(x++) ბეჭდავს 5-ს და ამიტომ x ხდება 6, ხოლო მეორე console.log(x) ბეჭდავს უკვე ახალ მნიშვნელობას, 6."

//14. What is the value of y?
let y = 5;
console.log(++y);
console.log(y);
//"++y არის წინასწარი გაზრდის ოპერატორი("pre-increment operator"), რაც ნიშნავს, რომ y გაიზრდება მანამ სანამ მის მნიშვნელობას დავწერთ. ანუ როდესაც console.log(++y) ვწერთ, y იზრდება 5-დან 6-მდე ბეჭვდის პროცესში, მაშასადამე, ის ბეჭდავს 6-ს. ამის შემდეგ, როდესაც ვიყენებთ console.log(y), ის ბეჭდავს y-ის განახლებულ მნიშვნელობას, რომელიც ჯერ კიდევ არის 6."

//15. What is x++ and x--?
// x++ - კონსოლზე გამოაქვს, x-ის მიმდინარე მნიშვნელობა და შემდეგ ზრდის 1-ით, მაგალითად:
// let x = 5;
// console.log(x++);  // გამოაქვს 5, შემდეგ x გახდება 6
// console.log(x);    // გამოაქვს 6

// ხოლო, x-- - კონსოლზე გამოაქვს, x-ის მიმდინარე მნიშვნელობა და შემდეგ აკლებს 1-ს, მაგალითად:
// let x = 5;
// console.log(x--);  // გამოაქვს 5, შემდეგ x გახდება 4
// console.log(x);    // გამოაქვს 4

//16. What is the difference between ++x and x++?
// ++x - თავიდანვე გაზრდის x-ის მნიშვნელობას და შემდეგ უკვე გაზრდილ მნიშვნელობას გამოიტანს, მაგალითად:
// let x = 5;
// console.log(++x);  // გამოაქვს 6
// console.log(x);    // გამოაქვს 6

// ხოლო, ++x - ჯერ გამოიტანს მიმდინარე მნიშვნელობას და შემდეგ გაზრდილს, მაგალითად:
// let x = 5;
// console.log(x++);  // გამოაქვს 5
// console.log(x);    // გამოაქვს 6

//17. If we try to declare variable without any value, what will be the value of the variable in the console?
// როდესაც ცვლადს ვწერთ, თუმცა არ ვანიჭებთ მნიშვნელობას, ამ შემთხვევაში მისი მნიშვნელობა განუსაზღვრელი იქნება (undefined).

//18. Show the example of equality operator.
let a = 5;
let b = '5';

console.log(a == b);  // გამოაქვს: true

//19. Show the example of not equal operator.
let a = 5;
let b = '5';

console.log(a != b);  // Outputs: false


//20. What's going on when we try to add string and number?
// როდესაც სტრიქონს და რიცხვს ვამატებთ ერთანეთს, რიცხვი ავტომატურად გარდაიქმნება string-ად და ამ შემთხვევაში ხდება string-ის შედარება და არა მათემატიკური ოპერაცია.






