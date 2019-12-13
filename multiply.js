/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
let multiply = function(num1, num2) {
    //判断输入是不是数字
    if(isNaN(num1) || isNaN(num2)) return '';
    let len1 = num1.length,
        len2 = num2.length;
    let ans = [];

    //这里倒过来遍历很妙,不需要处理进位了
    for (let i = len1 - 1; i >= 0; i--) {
        for (let j = len2 - 1; j >= 0; j--) {
            let index1 = i + j,
                index2 = i + j + 1;
            let mul = num1[i] * num2[j] + (ans[index2] || 0);
            ans[index1] = Math.floor(mul / 10) + (ans[index1] || 0);
            ans[index2] = mul % 10
        }
    }

    //去掉前置0
    let result = ans.join('').replace(/^0+/,'');

    //不要转成数字判断，否则可能会超精度！
    return !result ? '0' : result;
};