//设置按钮自增
function add(num) {
    //获得中间文本框的value
    var text = parseFloat(document.getElementsByName('amount')[num].value);
    document.getElementsByName('amount')[num].value = text + 1;
    updatePrice();
}
//设置按钮自减
function minus(num) {
    var text = parseFloat(document.getElementsByName('amount')[num].value);
    if (text <= 1) {
        alert('商品数量不能低于1')
    } else {
        document.getElementsByName('amount')[num].value = text - 1;
    }
    updatePrice();
}
//计算总和函数
function judge() {
    var judge = confirm('你是否结算');
    if (judge) {
        //显示文本的值
        setInfo();
    }

}
//两个商品的子节点
var li1 = 0;
var li2 = 0;
//商品总价
var sum = 0;
//数量
var count1 = 0;
var count2 = 0;
//两个商品的单价
var price1 = 0;
var price2 = 0;

//实时更新商品的价格的函数
// setInterval(updatePrice, 1);

function updatePrice() {
    //两个商品的单价
    price1 = document.getElementsByName('price')[0].value;
    price2 = document.getElementsByName('price')[1].value;
    //数量
    count1 = parseInt(document.getElementsByName('amount')[0].value);
    count2 = parseInt(document.getElementsByName('amount')[1].value);
    //计算结果
    var price3 = ' ¥ ' + parseFloat(price1 * count1).toFixed(2);
    var price4 = ' ¥ ' + parseFloat(price2 * count2).toFixed(2);
    //商品总值
    sum = parseFloat((price1 * count1) + (price2 * count2));
    console.log(sum);
    //获取第一个商品的父节点
    var ul1 = document.getElementById('price0').parentNode;
    //获取第二个商品的父节点
    var ul2 = document.getElementById('price1').parentNode;
    //更改两个商品的值
    li1 = ul1.children[4].innerHTML = price3;
    li2 = ul2.children[4].innerHTML = price4;
    document.getElementById('totalPrice').innerHTML = '¥' + sum.toFixed(2);


}
//显示各个商品的价格和所有商品的总价的信息的函数
function setInfo() {
    updatePrice();
    //1 获取id
    var info = document.getElementById('info');
    //显示商品信息
    info.innerHTML = '你本次购买的商品信息如下：' + '</br>白岩说：白说' + li1 + '</br>岛上书店' + li2 + '</br>商品共计：' + sum.toFixed(2);
    //修改样式
    info.style.cssText = 'width: 810px; height: 100px; border: 1px solid #f00';
}
//删除节点方法
function del(num) {
    //获取父级
    //删除节点
    var flag = confirm('你是否要删除此商品：');
    //获取要删除的节点
    var delNode = document.getElementsByClassName('divinfo')[num];
    var text = parseFloat(document.getElementsByName('amount')[num].value);
    document.getElementsByName('amount')[num].value = text = 0;
    updatePrice();
    if (flag) {
        // delNode.parentNode.removeChild(delNode);
        delNode.style.display = 'none';
    }


}