function coupon() {
    $("#coupon1").click(function () {
        $(this).removeClass("bgcColor").siblings().addClass("bgcColor")
        $(".use").show()
        $(".user").hide()
        $(".box2_left").show()
        $(".box2_right").hide()
    })
    $("#coupon2").click(function () {
        $(this).removeClass("bgcColor").siblings().addClass("bgcColor")
        $(".user").show()
        $(".use").hide()
        $(".box2_left").hide()
        $(".box2_right").show()
    })
    $("#use1").click(function () {
        $(this).addClass("bottom_color").siblings().removeClass("bottom_color")
        $(".left_1").show()
        $(".left_2").hide()
    })
    $("#use2").click(function () {
        $(this).addClass("bottom_color").siblings().removeClass("bottom_color")
        $(".left_2").show()
        $(".left_1").hide()
    })
    $("#use3").click(function () {
        $(this).addClass("bottom_color").siblings().removeClass("bottom_color")
        $(".right_1").show()
        $(".right_2").hide()
    })
    $("#use4").click(function () {
        $(this).addClass("bottom_color").siblings().removeClass("bottom_color")
        $(".right_2").show()
        $(".right_1").hide()
    })
}

function barter() {
    $("#barter1").click(function () {
        $(this).removeClass("bgcColor").siblings().addClass("bgcColor")
        $(".barter_use").show()
        $(".barter_user").hide()
        $(".barter_left").show()
        $(".barter_right").hide()
    })
    $("#barter2").click(function () {
        $(this).removeClass("bgcColor").siblings().addClass("bgcColor")
        $(".barter_user").show()
        $(".barter_use").hide()
        $(".barter_left").hide()
        $(".barter_right").show()
    })
    $("#use11").click(function () {
        $(this).addClass("bottom_color").siblings().removeClass("bottom_color")
        $(".left_11").show()
        $(".left_22").hide()
    })
    $("#use22").click(function () {
        $(this).addClass("bottom_color").siblings().removeClass("bottom_color")
        $(".left_22").show()
        $(".left_11").hide()
    })
    $("#use33").click(function () {
        $(this).addClass("bottom_color").siblings().removeClass("bottom_color")
        $(".right_11").show()
        $(".right_22").hide()
    })
    $("#use44").click(function () {
        $(this).addClass("bottom_color").siblings().removeClass("bottom_color")
        $(".right_22").show()
        $(".right_11").hide()
    })
}

















