let color =["ขาว", "อม", "ส้ม", "ขอเหลือง", "ฟ้า"];

// let x = color.length;       //TODO นับจำนวนสมาชิก

// let v = color.sort();   //TODO เรียงลำดับตาม พยัญชนะ

// console.log(color.sort());
// console.log(color.reverse());       //todo ตรงข้ามกับ sort();
// console.log(color.length);
// color.push("สีดำ");
// console.log(color.sort());

// let first = color[0];   //แสดงตัวแรก
// let last = color[color.length-1];   //แสดงตัวสุดท้าย
// console.log(first);
// console.log(last );

//todo เข้าถึงสมาชิกด้วย For Loop

for(let i = 0;i<color.length;i++ ){
    console.log("ชื่อ",color[i],"ลำดับที่",(i+1));
     
}
 
//todo เข้าถึงสมาชิกด้วย ForEach

// color.forEach(Data);

// function Data(item){
//     console.log("สี",item);
// }

//todo แปลง Array > String

// let x = color.toString("*");
// console.log(typeof(x));

// let y = color.join("*");
// console.log(y);

// color.pop();    //todo เอาตัวสุดท้ายออก
// console.log(color);

//todo การรวม Array

// let leage = ["Eng","indie","thai"];
// let team =["LIV","MAN","MID","AJJ"];

// let football = team.concat(leage,color);  // คำสั่ง concat.เพื่อรวม
// console.log(football);

//todo เรียงลำดับใน Aray

// let point =[50,60,-41,52,-5,-4,8,140];
// point.sort(function (a,b){
//     return b-a;         //มาไปน้อย
//     // return a-b;      //น้อยไปมาก
// });
// console.log(point);

