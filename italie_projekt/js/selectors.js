$(function () {
    $(".btn-danger").on("click", () => {
        $("#uvodniobrazek").css({ "background-image": "url('image/uvod_pizza.png')" });
        $(".centered").text("Klikni na obrázek");
        $(".centered").css({ "font-size": "700%" });
        $("nav").hide(1);
        $("footer").hide(1);
        $("html, body").animate({
            scrollTop: $(document).height(1)
        }, 1);
    });

    $(".bg-img").on("click", () => {
        $("body").css({ "background-image": "linear-gradient(white, white, green, white, white, red)" });
        $("#uvodniobrazek").css({ "background-image": "url('image/nav_photo.jpg')", "filter": "invert(1)" });
        $(".centered").css({ "font-size": "270%", "color": "black"});
        $(".centered").text("Pizzerie je z důvodu šíření pandemie zavřená!");
        $("#umisteni").attr("src", "image/planeta_zeme.png");
        $("#umisteni").css({"position": "relative", "animation-name": "otocka", "animation-duration": "2s", "animation-iteration-count": "3000"});
        $("#vlajka").attr("src", "image/vlajka_rouska.png");
        $("#vlajka_odkaz").attr("href", "https://www.drmax.cz/ustenka-chirurgicka-s-gumickami-2ks-steriwund");        
        $("#vlajka").css({"position": "relative", "animation-name": "pohyb", "animation-duration": "2s", "animation-iteration-count": "3000"});
        $(".zelena").css({"position": "relative", "animation-name": "pulse", "animation-duration": "2s", "animation-iteration-count": "3000"});
        $(".cervena").css({"position": "relative", "animation-name": "pulse", "animation-duration": "2s", "animation-iteration-count": "3000"});
        $(".cervena:first").text("Vlajka šitá na míru");
        $(".cervena").eq(1).text("klikem zrychli rotaci");
        $(".text").css({"position": "relative", "animation-name": "zmenabarvy", "animation-duration": "2s", "animation-iteration-count": "3000"});
        $("b").css({"position": "relative", "animation-name": "posunpodnadpisu", "animation-duration": "5s", "animation-iteration-count": "3000"});
        $("tr").toggleClass('glow');
    });

    $("#umisteni").on("click", () => {       
        $("#umisteni").css({"position": "relative", "animation-name": "otocka", "animation-duration": "0.25s", "animation-iteration-count": "3000"});
        $(".cervena").eq(1).text("A přece se točí...");
    });
})

