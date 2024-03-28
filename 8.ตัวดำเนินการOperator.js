// +, -, *, /, % ตัวดำเนินการทางคณิตศาสตร์
// let a = 10,b = 2;

// console.log("ผลบวก =" ,5 + 10);
// console.log("ผลลบ =" ,25 + 10);
// console.log("ผลคูณ =" ,5 * 10);
// console.log("ผลหาร =" ,5 / 10);
// console.log("ผลหารเศษ =" ,10 % 3);
// console.log("ยกกำลัง =", a**b);


// ==,!= , > , < , >= , <= ตัวดพเนินการเปรียบเทียบ  boolean

// console.log("a เท่ากับ b =", a == b );
// console.log("a ไม่เท่ากับ b =", a != b);
// console.log("a มากกว่า b =", 150 > 20 );
// console.log("a น้อยกว่า b =", 150 < 20);
// console.log("a มากกว่าหรือเท่ากับ b =", 50 >= 50 );
// console.log("a น้อยกว่าหรือเท่ากับ b =", 50 <= 10 );

// && = AND , || = OR , ! = NOT ---ตัวดำเนินการทางตรรกศาสตร์

let score = 80 ;
    console.log(score >= 50 && score <= 70 ,"A");
    console.log(score >= 69 && score <=60 ,"B");
    console.log(score >= 59 && score <= 50 ,"C");
    console.log(score >= 49 && score <= 0 ,"D");

//++a(Prefix) , a++(Postfix) ,--a(Prefix) , a--(Postfix) เพิ่มค่าลดค่า

let E = 5;
let R = 7;

console.log("Prefix",++E);
console.log("Postfix",E++);
console.log("ค่าปัจจุบัน",E)
console.log("Prefix",--R);
console.log("Postfix",R--);
console.log("ค่าปัจจุบัน",R);