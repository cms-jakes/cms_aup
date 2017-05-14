
chrome.storage.sync.get("aup",function(items){
	var aup = items.aup;
	if (aup){ //load agreed.html as popup
		chrome.browserAction.setPopup({popup:'agreed.html'})
	}
});

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
  	init();
  }
});


//document.addEventListener('DOMContentLoaded', init)
function init(){
	    	chrome.storage.sync.get("aup",function(items){
			var aup = items.aup;
			if (aup!=true){
				console.log("Hasn't agreed to terms.  Cannot navigate the internet.");
				preventPages();
			}
			if(aup) {
				console.log("Agreed to terms. Can navigate the internet.");
			}
			});
}

chrome.storage.onChanged.addListener(function(changes, area) {
	if (area == "sync" && "aup" in changes) {
		chrome.runtime.reload();
	}
});

/*
function init(){
	chrome.storage.sync.get("aup",function(items){
		var aup = items.aup;
		if (aup!=true){
			console.log("Hasn't agreed to terms.  Cannot navigate the internet.");
			preventPages();
		}
		if(aup) {
			console.log("Agreed to terms. Can navigate the internet.");
			chrome.runtime.reload();
		}
	});
}
*/

function preventPages(){
//Gets the information about the active tab that has just been loaded/reloaded
	chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab) {		
		if (tab.title === "CMS AUP"){  //Checks title of current page against CMS AUP page title.
			//	AUP page do not change
		    console.log("On the aup page, no change.");
		} else { 
			//  Replace current tab url with the AUP page. 	
			chrome.tabs.update(tab.id, {url:"aup.html"});
			console.log("Redirected to aup page.");
		}
	});
}
