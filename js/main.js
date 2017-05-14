function getAUP(){
	chrome.storage.sync.get("aup",function(items){
		var aup = items.aup;
		console.log("main aup: "+aup);
	})
}


function updateAUP(TorF){
		chrome.storage.sync.set({"aup":TorF});
		if (TorF){
			console.log("Clicked agree!");
		} else if (TorF === false) {
			console.log("Clicked disagree!");
			chrome.notifications.create( {
			  type: "basic",
			  title: "CMS AUP",
			  message: "You must agree to the AUP in order to use your Chromebook.",
			  iconUrl: chrome.runtime.getURL("icon.png")
			},function(){});
		}
}

getAUP();

document.addEventListener('DOMContentLoaded', function() {
	var check = document.getElementById("agree");
	check.addEventListener("click", function(){
		updateAUP(true);
		getAUP();
	});

})

document.addEventListener('DOMContentLoaded', function() {
	var check = document.getElementById("disagree");
	check.addEventListener("click", function(){
		updateAUP(false);
		getAUP();
	});

})

/////////////////////////////////////////////////////////////////////
//  QUIZ LOGIC
/////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
	var begin = document.getElementById("begin_btn")
		begin.addEventListener("click",function(){
			document.getElementById("begin").style.display='none';
			document.getElementById("quiz1").style.display="block"
		})
	var q1_c = document.getElementById("Q1_c")
		q1_c.addEventListener("click", function(){
			var q1= true;
			var q2 = document.getElementById("quiz2");
			q2.style.display = 'block';
			q1_c.classList.add("btn-primary");
			q1_c.classList.remove("btn-default");
	});
	var q1_i = document.getElementById("Q1_i").addEventListener("click",function(){
		var q1 = false;
	})
	var q2_c = document.getElementById("Q2_c")
		q2_c.addEventListener("click",function(){
			var q2 = true;
			q2_c.classList.add("btn-primary");
			q2_c.classList.remove("btn-default");
			var aup_div = document.getElementById("aup")
			aup_div.style.display = "block";

	})
});
