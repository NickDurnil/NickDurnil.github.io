$('.caption').each(function(){
    var tag = $(this);
    var tagParent = $(this).parent();
    var origHeight = tagParent.offset().top;

    function fadeAway(){
        var tagY = tagParent.offset().top;
        var tagH = tagParent.innerHeight();
        var winY = $(this).scrollTop();

        var opacityPer = 100 - winY / tagH * 100 * 2;
        tag.css({
            opacity: opacityPer + "%"
        })
    }

    $(document).on({
    scroll: function(){
        fadeAway();
    }
    });
})

$('.image-parallax').each(function(){
var img = $(this);
var imgParent = $(this).parent();

function parallaxImage(){
    var speed = img.data('speed');
    var imgY = imgParent.offset().top;
    var winY = $(this).scrollTop();
    var winH = $(this).height();
    var parentH = imgParent.innerHeight();

    var winBottom = winY + winH;

    if(winBottom >= imgY && winY < imgY + parentH){
        var imgBottom = (winBottom - imgY) * speed;

        var imgTop = winH + parentH;

        var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
    }
    img.css({
        top: imgPercent + "%",
        transform: 'translate(-50%, -' + imgPercent + '%)'
    });
}

function updateHeight(){
    var height = window.innerHeight;
    var width = window.innerWidth;
    if(width > height){
        height += (width - height) / 2;
    }
    else{
        height += 100;
    }
    img.css({
        height: height + "px",
    })
}

$(document).on({
    scroll: function(){
        parallaxImage();
    }
});
$(window).on({
    load: function(){
        parallaxImage();
        updateHeight();
    },
    resize: function(){
        if(!window.matchMedia("(pointer: coarse)").matches) {
            updateHeight();
        } 
    }
});

screen.orientation.addEventListener("change", function(e) {
    updateHeight();
});

})