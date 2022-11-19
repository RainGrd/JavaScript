var flag = 0;

function collect() {
    flag = confirm('移入收藏后,将不在购物车显示，是否继续操作！');
    if (flag) {
        alert('收藏成功！')
    }
}
//删除
function del() {
    flag = confirm('你确定要删除此商品：');
    if (flag) {
        alert('删除成功！')
    }
}

function commodityInfo() {
    flag = confirm('你本次购买的商品信息如下：\n商品名称：白岩松：白说、岛上书店！\n商品数量：2件；\n商品总计：46.00;\n运算：0元;\n请确认以上信息是否有误！')
    if (flag) {
        alert('您的订单已提交！');
    }
}