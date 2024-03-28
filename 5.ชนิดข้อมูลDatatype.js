// let mes ='Fren';
// let dari ="Bam";
// let money = 500+500;
// let price =99.9;
// let chek= false;
// let age ="20"; //กลายเป็น string

// console.log(typeof(money)); /*การเช็คชนิดข้อมูล */
// console.log(price);
// console.log(mes);
// console.log(dari);
// console.log(typeof(age));
// console.log(typeof(chek));

// let x = parseInt("25"); //number
let x = +"25";  //การแปลงข้อมูล Str > number
console.log(x)
console.log(typeof(x));

// let price = 99.9+"";    //การแปลงข้อมูล number > Str
let price = 99.9.toString();
console.log(price)
console.log(typeof(price));

let food =[ 1, 2, 3, 4, 5];
console.log(food);
console.log("ตัวแรก", food[0]) //การก่ล่าวถึง

let colors = ["ขาวส้ม","ส้ม","เขียว","น้ำเงิน","น้ำตาล"]
console.log(colors);
colors[2] = "ดำ";        //การเปลี่ยนค่า
console.log(colors)

lom = {             //opj
    fudt:'melon',
    water:'pepsi',
    wight:'10'
};
console.log(lom);