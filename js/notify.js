
function notify(){
	chrome.notifications.create( {
	  type: "basic",
	  title: "CMS AUP",
	  message: "You must agree to the AUP in order to use your Chromebook.",
	  iconUrl: chrome.runtime.getURL("icon.png")
	},function(){});
	
	var date = new Date();
	console.log('notified:', date);
}

notify();
