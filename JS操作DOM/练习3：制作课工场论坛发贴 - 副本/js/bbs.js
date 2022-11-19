// 建立头像数组
var head = new Array("tou01.jpg", "tou02.jpg", "tou03.jpg", "tou04.jpg");
//获取文本域的值
var content = document.getElementById("content");
//显示输题栏
function post() {
    document.getElementById("post").style.display = "block";
    //设置发布为发布按钮
    var input = document.querySelector(".btn")
    console.log(input);
    //设置按钮
    input.setAttribute('type', "button");
}

function postSuccess() {
    //新建li节点
    var li = document.createElement("li");
    //随机获得头像
    var tou = '';
    //新建img节点
    var img = '';
    tou = Math.floor(Math.random() * 3 + 1);
    img = document.createElement("img");
    img.setAttribute("src", "images/" + head[tou]);
    //获取标题
    var title = document.getElementById("title").value;
    //新建标题节点
    var titleH1 = document.createElement("h1");
    //新建两个span标签
    var versions = document.createElement("span");
    //发布时间
    var time = document.createElement("span");
    //获取当前板块
    var plate = document.getElementById("sec").value;
    //P节点
    var p = document.createElement("p");
    //将标题插入h1标签
    titleH1.innerHTML = title;
    //插入板块
    versions.innerHTML = "版本：" + plate;
    //插入当前时间
    time.innerHTML = DateTime();
    console.log(time);
    //获取ul标签
    var ul = document.getElementById("postList");
    //div节点
    var div = document.createElement("div");
    if (title == '' || (plate == '' || plate == '')) {
        alert("不能为空！");
        //暂停程序运行  
        return;
    }
    //追加节点
    div.appendChild(img);
    li.appendChild(div);
    li.appendChild(titleH1);
    p.appendChild(versions);
    p.appendChild(time);
    li.appendChild(p);
    //追加li标签
    ul.insertBefore(li, ul.children[0]);
    //关闭输入页面
    document.getElementById("post").style.display = "none";
    //清空内容
    document.getElementsByClassName("title")[0].value = "";
    //清空板块
    document.getElementById("sec").value = "请选择你要的板块!";
    //清空文本域
    content.value = "";
}

//获取当前发布时间
function DateTime() {
    //获取当前时间
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var time = '';
    //格式化
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    hour = hour < 10 ? '0 ' + hour : hour;
    minute = minute < 10 ? '0 ' + minute : minute;
    time = '&nbsp;&nbsp; 发布时间：' + year + '-' + month + '-' + day + ' ' + hour + ":" + minute;
    //返回当前时间
    return time;

}