
document.addEventListener('DOMContentLoaded', function() {		
	var check = document.getElementById("agree");
	check.addEventListener("click", function(){
		chrome.browserAction.setPopup({popup:'agreed.html'})
	})
});


document.addEventListener('DOMContentLoaded', function() {
	var check = document.getElementById("dclaunch");
	check.addEventListener("click", function(){
		chrome.tabs.create({"url":"https://cms.instructure.com/courses/76037"}, function(tab){
    		updateTab(tab.id);
		});
	});
});