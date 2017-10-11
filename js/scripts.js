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

var conv = function() {
    html2canvas(document.getElementById('topicArea'), {
        onrendered: function(canvas) {
          document.body.appendChild(canvas);
        }
      });
}