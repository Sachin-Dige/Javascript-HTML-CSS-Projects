$(document).ready(function(){
    $('menu').click(function(){
        $this.tooggleClass('fa-times');
        $('.navbar').tooggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $("#menu").removeclass('fa-times');
        $("#navbar").removeclass('nav-tooggle');
    });
});