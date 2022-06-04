function registerfunction() {
    document.getElementById("contentid").innerHTML="<div>\n" +
        "                <p>账号</p>\n" +
        "                <input class=\"myinput\" type=\"text\">\n" +
        "            </div>\n" +
        "            <div class=\"pwd\">\n" +
        "                <p>密码</p>\n" +
        "                <input class=\"myinput\" type=\"text\">\n" +
        "                <br>\n" +
        "            </div>\n" +
        "            <div class=\"pwd\">\n" +
        "                <p>确认密码</p>\n" +
        "                <input class=\"myinput\" type=\"text\">\n" +
        "                <br>\n" +
        "            </div>\n" +
        "            <div class=\"pwd\">\n" +
        "                <p>电子邮箱</p>\n" +
        "                <input class=\"myinput\" type=\"text\">\n" +
        "                <br>\n" +
        "            </div>\n" +
        "            <div class=\"pwd\">\n" +
        "                <p>年龄</p>\n" +
        "                <input class=\"myinput\" type=\"text\">\n" +
        "                <br>\n" +
        "            </div>\n" +
        "            <div class=\"controls controlsregister\">\n" +
        "                <input type=\"radio\">学生\n" +
        "                <input type=\"radio\">上班族\n" +
        "            </div>\n" +
        "            <br>\n" +
        "            <div class=\"buttondiv\">\n" +
        "                注册\n" +
        "            </div>";
    document.getElementById("loginid").style.backgroundColor="white";
    document.getElementById("Registerid").style.backgroundColor="aqua";
}

function loginfunction() {
    document.getElementById("contentid").innerHTML="        <div>\n" +
        "                <p>账号</p>\n" +
        "                <input class=\"myinput\" type=\"text\">\n" +
        "            </div>\n" +
        "            <div class=\"pwd\">\n" +
        "                <p>密码</p>\n" +
        "                <input class=\"myinput\" type=\"text\">\n" +
        "                <br>\n" +
        "            </div>\n" +
        "            <div class=\"controls\">\n" +
        "                <input type=\"checkbox\">记住密码\n" +
        "            </div>\n" +
        "            <br>\n" +
        "            <div class=\"buttondiv\">\n" +
        "                登录\n" +
        "            </div>\n" +
        "            <div class=\"forgetpwdregister\">\n" +
        "                <p> <a href=\"#\">找回密码</a> | 还没有注册帐号？ <a href=\"#\">立即注册</a> </p>\n" +
        "            </div>";
    document.getElementById("loginid").style.backgroundColor="aqua";
    document.getElementById("Registerid").style.backgroundColor="white";
}