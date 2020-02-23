
function common() {
    var t = "";
    for (let i = 0; i < country.length; i++) {
        t += `<option value="">` + country[i].name + `</option>`
    }
    $("#select1").append(t)
    function f() {
        var index = $("#select1").children('option:selected').index() - 1
        $("#select2").children().not(':eq(0)').remove()
        var len = country[index].city.length;
        var q = '';
        for (let i = 0; i < len; i++) {
            q += `<option value="">` + country[index].city[i].name + `</option>`
        }
        $("#select2").append(q)
    }

    function g() {
        var key = $("#select1").children('option:selected').index() - 1
        var item = $("#select2").children('option:selected').index() - 1
        var leng = country[key].city[item].area.length;
        $("#select3").children().not(':eq(0)').remove()
        var r = '';
        for (let i = 0; i < leng; i++) {
            r += `<option value="">` + country[key].city[item].area[i] + `</option>`
        }
        $("#select3").append(r)
    }

    $("#select1").click(function () {
        $(this).css("color", "black")
    })
    $("#select2").click(function () {
        $(this).css("color", "black")
    })
    $("#select3").click(function () {
        $(this).css("color", "black")
    })
}





/*截取字符串*/
function GetRequest() {
    let url = location.search; //获取url中"?"符后的字串
    let theRequest = new Object();
    if (url.indexOf("?") != -1) {
        let str = url.substr(1);
        let strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
Requestnormal = GetRequest();//把所有参数打包成数组，如果用里面的某个元素直接用Requestnormal.name


















