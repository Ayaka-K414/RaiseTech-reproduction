$(function(){
    $(".hamburger-menu").on("click",function(){
        $(this).toggleClass("active");
        $(".gmenu").toggleClass("active");
    });
});


$(function(){
    $(".gmenu-main__items01").hover(
        function(){
            $(".gmenu-sub01").slideDown(230);
        },
        function(){
            $(".gmenu-sub01").hide();
        }
    );
});

$(function(){
    $(".gmenu-main__items02").hover(
        function(){
            $(".gmenu-sub02").slideDown(230);
        },
        function(){
            $(".gmenu-sub02" ).hide();
        }
    );
});

$(function(){
    $(".gmenu-main__items03").hover(
        function(){
            $(".gmenu-sub03").slideDown(230);
        },
        function(){
            $(".gmenu-sub03" ).hide();
        }
    );
});

$(function(){
    $(".gmenu-main__items04").hover(
        function(){
            $(".gmenu-sub04").slideDown(230);
        },
        function(){
            $(".gmenu-sub04" ).hide();
        }
    );
});

$(function(){
    $(".gmenu-main__items05").hover(
        function(){
            $(".gmenu-sub05").slideDown(230);
        },
        function(){
            $(".gmenu-sub05" ).hide();
        }
    );
});

$(function(){
    $('.hover-mark').hover(
        function(){
            $(this).removeClass('close');
        },
        function(){
            $(this).addClass('close');
        }
    );
});