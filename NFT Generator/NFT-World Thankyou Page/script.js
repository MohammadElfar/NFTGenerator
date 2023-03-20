$(window).on('load',function(){
    var url_string = window.location.href ; 
    var url = new URL(url_string);
    var c = url.searchParams.get("lang");
    if (c.toLowerCase()=="ar"){
        $(".hero-text").html('');
        $(".hero-text").append('<p class="cairo fz-40 my-5 rtl">تهانينا!</br>لقد تم اشتراكك بنجاح!</p> <p class="fz-24 cairolight rtl">اهلا بك في NFT World, للوصول الى محتوى الجدمة , الرجاء التأكد من الرابط في رسالة SMS. <p>');
    } 
    else
    {
        $(".hero-text").html('');
        $(".hero-text").append('<p class="gilroybold fz-40 my-5">Congratulations! </br> YOU ARE SUCCESSFULLY SUBSCRIBED!</p> <p class="fz-24 gilroylight"> Welcome to NFT World service, to have access to the service, kindly check the link sent to your SMS inbox <p>');
    }
});
