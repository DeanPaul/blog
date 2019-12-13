function divide(a,b){
    var alen=a.length;
    var quotient=0,remainder=0;
    var result=[],temp=0 ;
    for(var i=0;i<alen;i++){
        temp=remainder*10+parseInt(a[i]);
        if(temp<b){
            remainder=temp;
            result.push(0);
        }else{
            quotient=parseInt(temp/b);
            remainder=temp%b;
            result.push(quotient);
        }

    }
    return [result.join("").replace(/\b(0+)/gi,""),remainder];//结果返回[商，余数]
}
function plus(a,b){
    var min_str=a.length<b.length?a.split("").reverse():b.split("").reverse();
    var max_str=a.length>=b.length?a.split("").reverse():b.split("").reverse();
    var quotient=0,remainder=0;
    var resutl=[];
    var temp=0;
    for(var i=0;i<min_str.length;i++){
        temp=parseInt(min_str[i])+parseInt(max_str[i])+quotient;
        quotient=parseInt(temp/10);//进位
        remainder=temp%10;//余数
        resutl.push(remainder);
    }
    for(i;i<max_str.length;i++){
        temp=parseInt(max_str[i])+quotient;
        quotient=temp/10;//进位
        remainder=temp%10;//余数
        resutl.push(remainder);
        if(temp<10&&i<max_str.length-1){
            return max_str.slice(i+1).reverse().join("")+resutl.slice().reverse().join("");
        }
    }
    return resutl.reverse().join("");
}