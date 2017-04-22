jQuery(function($) {
    $(".date").datepicker({
        maxDate : 0,
	dateFormat: "yy-mm-dd",

	onSelect: function(dateText) {
	    var _date = new Date();
	    var _userOffset = _date.getTimezoneOffset()*60*1000; // user's offset time
	    var _centralOffset = 5*60*60*1000; // 5 for Eastern time
	    var d = new Date(_date.getTime() - _userOffset + _centralOffset); // redefine variable
	    var datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
	    var attempt = $(this).datepicker('getDate');

	    if (today(attempt)) {
                $("#cnn").attr("src", hprefix +  dt_now() + "/www.cnn.com-phantomjs.png#toolbar=0&amp;scrollbar=0&amp;zoom=45");
                $("#fox").attr("src", hprefix +  dt_now() + "/www.foxnews.com-wkh.pdf#toolbar=0&amp;scrollbar=0&amp;zoom=45");
                $("#nyt").attr("src", hprefix +  dt_now() + "/www.nytimes.com-wkh.pdf#toolbar=0&amp;scrollbar=0&amp;zoom=45");
		$("#wsj").attr("src", hprefix +  dt_now() + "/www.wsj.com-wkh.pdf#toolbar=0&amp;scrollbar=0&amp;zoom=45");
                $("#cnnl").attr("src", hprefix +  dt_now() + "/www.cnn.com-phantomjs.png#toolbar=0&amp;scrollbar=0&amp;zoom=45");
                $("#foxl").attr("src", hprefix +  dt_now() + "/www.foxnews.com-wkh.pdf#toolbar=0&amp;scrollbar=0&amp;zoom=45");
                $("#nytl").attr("src", hprefix +  dt_now() + "/www.nytimes.com-wkh.pdf#toolbar=0&amp;scrollbar=0&amp;zoom=45");
		$("#wsjl").attr("src", hprefix +  dt_now() + "/www.wsj.com-phantomjs.pdf#toolbar=0&amp;scrollbar=0&amp;zoom=45");
           } else {
                $("#cnn").attr("src", hprefix + this.value + ".23/www.cnn.com-phantomjs.pdf#toolbar=0&amp;scrollbar=0");
                $("#fox").attr("src", hprefix + this.value + ".23/www.foxnews.com-wkh.pdf#toolbar=0&amp;scrollbar=0&amp;zoom=45");
                $("#nyt").attr("src", hprefix + this.value + ".23/www.nytimes.com-wkh.pdf#toolbar=0&amp;scrollbar=0&amp;zoom=45");
                $("#wsj").attr("src", hprefix + this.value + ".23/www.wsj.com-wkh.pdf#toolbar=0&amp;scrollbar=0&amp;zoom=45");
                $("#cnnl").attr("src", hprefix + this.value + ".23/www.cnn.com-phantomjs.pdf#toolbar=0&amp;scrollbar=0&amp;zoom=45");
                $("#foxl").attr("src", hprefix + this.value + ".23/www.foxnews.com-wkh.pdf#toolbar=0&amp;scrollbar=0&amp;zoom=45");
                $("#nytl").attr("src", hprefix + this.value + ".23/www.nytimes.com-wkh.pdf#toolbar=0&amp;scrollbar=0&amp;zoom=45")
		$("#wsjl").attr("src", hprefix + this.value + ".23/www.wsj.com-wkh.pdf#toolbar=0&amp;scrollbar=0&amp;zoom=45")
		}
	}
    }).on("change", function() {
	var attempt = $(this).datepicker('getDate');
	if (today(attempt)) {
            $("#cnn").attr("src", hprefix +  dt_now() + "/www.cnn.com-phantomjs.png#toolbar=0&amp;scrollbar=0&amp;zoom=45");
            $("#fox").attr("src", hprefix +  dt_now() + "/www.foxnews.com-wkh.pdf#toolbar=0&amp;scrollbar=0&amp;zoom=45");
            $("#nyt").attr("src", hprefix +  dt_now() + "/www.nytimes.com-wkh.pdf#toolbar=0&amp;scrollbar=0&amp;zoom=45");
	    $("#wsj").attr("src", hprefix +  dt_now() + "/www.wsj.com-wkh.pdf#toolbar=0&amp;scrollbar=0&amp;zoom=45");
            $("#cnnl").attr("src", hprefix +  dt_now() + "/www.cnn.com-phantomjs.png#toolbar=0&amp;scrollbar=0&amp;zoom=45");
            $("#foxl").attr("src", hprefix +  dt_now() + "/www.foxnews.com-wkh.pdf#toolbar=0&amp;scrollbar=0&amp;zoom=45");
            $("#nytl").attr("src", hprefix +  dt_now() + "/www.nytimes.com-wkh.pdf#toolbar=0&amp;scrollbar=0&amp;zoom=45");
	    $("#wsjl").attr("src", hprefix +  dt_now() + "/www.wsj.com-phantomjs.pdf#toolbar=0&amp;scrollbar=0&amp;zoom=45");
        } else {
            $("#cnn").attr("src", hprefix + this.value + ".23/www.cnn.com-phantomjs.pdf#toolbar=0&amp;scrollbar=0");
            $("#fox").attr("src", hprefix + this.value + ".23/www.foxnews.com-wkh.pdf#toolbar=0&amp;scrollbar=0&amp;zoom=45");
            $("#nyt").attr("src", hprefix + this.value + ".23/www.nytimes.com-wkh.pdf#toolbar=0&amp;scrollbar=0&amp;zoom=45");
            $("#wsj").attr("src", hprefix + this.value + ".23/www.wsj.com-wkh.pdf#toolbar=0&amp;scrollbar=0&amp;zoom=45");
            $("#cnnl").attr("src", hprefix + this.value + ".23/www.cnn.com-phantomjs.pdf#toolbar=0&amp;scrollbar=0&amp;zoom=45");
            $("#foxl").attr("src", hprefix + this.value + ".23/www.foxnews.com-wkh.pdf#toolbar=0&amp;scrollbar=0&amp;zoom=45");
            $("#nytl").attr("src", hprefix + this.value + ".23/www.nytimes.com-wkh.pdf#toolbar=0&amp;scrollbar=0&amp;zoom=45");
	    $("#wsjl").attr("src", hprefix + this.value + ".23/www.wsj.com-wkh.pdf#toolbar=0&amp;scrollbar=0&amp;zoom=45");
	}
	display("Got change event from field");
}).datepicker("setDate", new Date());
    var prefix = "news-clips/";
    var hprefix = prefix;
    function dt_now() {
	var lT = moment().tz('America/New_York');
	var lTnew = lT.format('hh:mm:ss a');
	var mins = lT.minutes();
	if (mins < 15) {
	    lT.subtract(1, 'hours');
	}

	var hrs = lT.hours();
        var rounded = hrs < 6 ? 0 : hrs < 9? 6 :  hrs < 12 ? 9 : hrs < 18 ? 12 : hrs < 21 ? 18 : hrs < 23 ? 21 : 23 ;
	if (rounded == 0) {
		lT.subtract(1, 'days');
		rounded = 23;
        }
	lT.hours(rounded);
	var yr = lT.year();
	var mon = lT.months();
	var day = lT.date();
//	alert(lT.format("YYYY-MM-DD") + "." + lT.hours());
	return(lT.format("YYYY-MM-DD.HH"));
	
    }

  function today(td){
      var d = new Date();
      return td.getDate() == d.getDate() && td.getMonth() == d.getMonth() && td.getFullYear() == d.getFullYear();
  }

    function tweek(td){
	var d = new Date();
	var tdn = td.getDate();
	var dn = d.getDate();
	return tdn <= dn && tdn >= dn -7;
    }
     
});

       
$(document).ready(function () {
 var prefix = "news-clips/";
    var hprefix = prefix;
    function dt_now() {
	var lT = moment().tz('America/New_York');
	var lTnew = lT.format('hh:mm:ss a');
	var mins = lT.minutes();
	if (mins < 15) {
	    lT.subtract(1, 'hours');
	}

	var hrs = lT.hours();
        var rounded = hrs < 6 ? 0 : hrs < 9? 6 :  hrs < 12 ? 9 : hrs < 18 ? 12 : hrs < 21 ? 18 : hrs < 23 ? 21 : 23 ;
	if (rounded == 0) {
		lT.subtract(1, 'days');
		rounded = 23;
        }
	lT.hours(rounded);
	var yr = lT.year();
	var mon = lT.months();
	var day = lT.date();
//	alert(lT.format("YYYY-MM-DD") + "." + lT.hours());
	return(lT.format("YYYY-MM-DD.HH"));
	
    }
    $("#mydate").datepicker().datepicker( "setDate", new Date());
    alert('here');
    $("#cnn").attr("src", hprefix +  dt_now() + "/www.cnn.com-phantomjs.png#toolbar=0&amp;scrollbar=0&amp;zoom=45");
    $("#fox").attr("src", hprefix +  dt_now() + "/www.foxnews.com-wkh.pdf#toolbar=0&amp;scrollbar=0&amp;zoom=45");
    $("#nyt").attr("src", hprefix +  dt_now() + "/www.nytimes.com-wkh.pdf#toolbar=0&amp;scrollbar=0&amp;zoom=45");
    $("#wsj").attr("src", hprefix +  dt_now() + "/www.wsj.com-wkh.pdf#toolbar=0&amp;scrollbar=0&amp;zoom=45");
        $("#cnnl").attr("src", hprefix +  dt_now() + "/www.cnn.com-phantomjs.png#toolbar=0&amp;scrollbar=0&amp;zoom=45");
        $("#foxl").attr("src", hprefix +  dt_now() + "/www.foxnews.com-wkh.pdf#toolbar=0&amp;scrollbar=0&amp;zoom=45");
        $("#nytl").attr("src", hprefix +  dt_now() + "/www.nytimes.com-wkh.pdf#toolbar=0&amp;scrollbar=0&amp;zoom=45");
	$("#wsjl").attr("src", hprefix +  dt_now() + "/www.wsj.com-phantomjs.pdf#toolbar=0&amp;scrollbar=0&amp;zoom=45");

});
