
document.addEventListener('DOMContentLoaded', function() {		
	var check = document.getElementById("agree");
	if(check!==null){
		check.addEventListener("click", function(){
			chrome.browserAction.setPopup({popup:'agreed.html'})
		})
	}
});


document.addEventListener('DOMContentLoaded', function() {
	var check = document.getElementById("srrcdhlaunch");
	if(check!==null){
		check.addEventListener("click", function(){
			chrome.tabs.create({"url":"https://4.files.edl.io/76bd/08/01/19/142424-0ef34709-deab-4657-8dae-cfeffbe2d3ca.pdf"}, function(tab){
    			updateTab(tab.id);
			});
		});
		var checkSpn = document.getElementById("srrcdhlaunch_span");
		checkSpn.addEventListener("click", function(){
			chrome.tabs.create({"url":"https://4.files.edl.io/df08/08/01/19/142428-4993cf7b-61ef-425a-b92e-7ac6d838b40e.pdf"}, function(tab){
    			updateTab(tab.id);
			});
		});
	}
});

