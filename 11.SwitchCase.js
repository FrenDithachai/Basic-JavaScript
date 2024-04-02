let light = 0;

// if( light ==0 ){
//     console.log("ปิด")
// }else if(light == 1 ){
//     console.log("ไฟเปิด")
// }else{
//     console.log("ไม่พบข้อมูล")
// }


switch(light){
    case 0 :light ="ปิดไฟ";
        //  break;
    case 1 :light ="เปิดไฟ"
    //     break;
    default : light= "กด 1 หรือ 0"
}
console.log(light);