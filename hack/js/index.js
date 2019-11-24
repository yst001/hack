$(function () {
    SuspendedBall.Add();//添加悬浮球
    SuspendedBall.BoxHtml("<ul class=\"SMenu\">" + $("#MenuInfo").html() + "</ul>");//添加菜单框的内容当然，具体的样式和里面的内容需要自己去写
    SuspendedBall.Move();//这个就是让悬浮球动起来的方法。为啥单独写个不写到add方法里面呢？因为你可以在页面中直接写入悬浮球的两个div。这个方法里面可以添加一个参数，这个参数是个function。当鼠标抬起的时候会调用到这个方法。
});