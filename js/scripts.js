$( document ).ready(function() {
    console.log( "ready!" );
    var dte = new Date();
    var day = dte.getDate();
    var month = dte.getMonth();
    var year = dte.getYear() + 1990 + 543;
    var hr = dte.getHours();
    var min = dte.getMinutes();
    var sec = dte.getSeconds();

    var mon_thai = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];

    console.log("" + day + " " + month + " " + year + " " + hr + " " + min + " " + sec);

    document.getElementById('datetopic').innerHTML = "" + day + " " + mon_thai[month] + " " + year + " เวลา  " + hr + ":" + min + ":" + sec + " น.";
});

document.getElementById('tags').onkeyup = function() {
    var str = document.getElementById('tags').value;
    var tags = str.trim().split(" ")
    var inner = ""
    for (i in tags) {
        inner = inner + "<a class=\"button tiny\">" + tags[i] + "</a>&nbsp;";
    }
    document.getElementById('tagDisplay').innerHTML = inner;
}

function setFontSize(elm, fontsize) {
    elm.style.fontSize = fontsize;
}

var conv = function() {
    var $wrapper = document.getElementById('topicArea')
    var result = document.getElementById('resultDiv');
    var notify = document.getElementById('savePls')
    html2canvas($wrapper, {
        letterRendering: false,
        taintTest : false, 
        useCORS: true,
        onrendered: function(canvas) {
            notify.innerHTML = "<h4>เซฟรูปไปใช้โลด</h4>"
            if (result.hasChildNodes()) {
                result.removeChild(result.childNodes[0])
            }
            result.appendChild(canvas)
        }
    })
    
    
}