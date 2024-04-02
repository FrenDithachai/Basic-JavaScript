// 1 เงื่อนไข


// blank = 5000;
// money = 2000;
// if(money<=blank){
//     console.log("คุณมีเงินน้อยกว่าธนาคาร",blank-money);
//     console.log('ฝากเงินเข้าธนาคาร =',money);
//     console.log('เงินคงเหลือ =',blank+money)
// }

// 2 เงื่อนไข

// blank = 5000;
// money = 2000;
// Withdraw = 1000;
// if(blank<=Withdraw){
//     console.log("คุณมีเงินน้อยกว่าธนาคาร",blank-money);
//     console.log('ฝากเงินเข้าธนาคาร =',money);
//     console.log('เงินคงเหลือ =',blank+money)
// }else{
//     console.log('ยอดเงินของคุณไม่พอ', Withdraw-blank);
// }


// แบบหลายเงื่อนไข

let dolla = 45;

if(dolla>50){
    console.log("ค่าเท่ากับ =",dolla);
}else if(dolla>40){
    console.log("ได้ระดับ =A")
}

//if else แบบลดรูป (Ternary Operator)

let num =60;
let pass;

// if(num> 50){
//     pass = 'ผ่าน';
// }
// else{
//     pass ='ไม่ผ่าน';
// }

pass = num> 50 ? "ผ่าน":"ไม่ผ่าน";
console.log(pass);


// if ซ้อน if

let gom =16;  
if(gom <= 15){
    if(gom == 15){
        console.log("ม.3");
    }
    
}else{
    console.log('ม.ปลายขึ้นไป')
}