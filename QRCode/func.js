function send() {
	var t = $("#textBox").val();
	$.ajax({
		url: "https://cli.im/api/qrcode/code",
		data: { text: t},
		type: "GET",
		success: function(data)
		{
			var starter = "qrcode_plugins_img =";
			var start = data.indexOf(starter) + starter.length + 1;
			var end = data.indexOf("\"", start);
			var url = data.substring(start, end);
			$("#container").html('<img width="200px" height="200px" src="http:' + url + '"/>');
		},
		error: function(data)
		{
			
		}
	});
}

$(function() {
	chrome.tabs.getSelected(function(tab){
		console.log(tab.url);
		console.log("ready");
		$("#submit").bind('click', send);
		$("#textBox").val(tab.url);
	});
});
