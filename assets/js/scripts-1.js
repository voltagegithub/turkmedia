$("header.main .icon-menu").on("click", function () {
    $("header.main nav").toggle();
});


$("div.main .icon-arrow-down").on("click", function () {
    var windowHeight = $(window).height();
    $("html, body").animate({
        scrollTop: windowHeight
    }, 2000);
});


$(document).ready(function () {
    // $.getJSON("http://jsonip.com/?callback=?", function (data) {
    //     if (data.ip == "88.255.77.180") {
    //         $("#esmedya-project").append('<a style="font-size:14px; font-weight:700" target="_blank" href="http://gazeteler.esmedya.com.tr/">GAZETELER</a>')
    //     };
    // });
   
});

$('#submit1').click(function () {

    if ($('#name')[0].checkValidity()) {
        $('#name').removeClass("notValid");
    } else {
        $('#name').addClass("notValid");
    } 

    if ($('#mail')[0].checkValidity()) {
        $('#mail').removeClass("notValid");
    } else {
        $('#mail').addClass("notValid");
    }

    if ($('#textarea')[0].checkValidity()) {
        $('#textarea').removeClass("notValid");
    } else {
        $('#textarea').addClass("notValid");
    }

    if ($('form')[0].checkValidity()) {

        var name = $("section.contact #name").val();
        var mail = $("section.contact #mail").val();
        var subject = $("section.contact #subject").val();
        var textarea = $("section.contact #textarea").val();
        var site = $("section.contact #site").val();
        var jsonData = JSON.stringify({
            site: site,
            name: name,
            mail: mail,
            subject: subject,
            textarea: textarea 
        })
        $.ajax({
            type: "POST",
            url: "//forms.turkmedya.com.tr/FormKayit", 
            contentType: 'application/json',
            data: jsonData,
            success: function () {
                $("section.contact .alert").html("Mailiniz başarılı bir şekide gönderildi.");
                setTimeout(function () {
                    $("section.contact .alert").html("");
                }, 2000);
            },
            fail: function () {
                $("section.contact .alert").html("Bir hata oluştu.");
                setTimeout(function () {
                    $("section.contact .alert").html("");
                }, 2000);
            },
        });

    } else {
        $("section.contact .alert").html("Lütfen zorunlu alanları doldurunuz.");
        setTimeout(function () {
            $("section.contact .alert").html("");
        }, 2000);
    }

});