document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        text = target.textContent;
    var className = target.className;
    if (className === "correct"){
    	var icid = target.id.replace("_c","_ic");
    	var value = target.value;
    	target.value= "Correct!: "+value
    	target.className="";
    	target.className="complete";
    	target.style.backgroundColor="#00d728";
    	document.getElementById(icid).style.display="none";
    	var ic_class = document.getElementsByClassName(target.id.replace("aup_c","ic"))
    	for (c in ic_class){
    		if(ic_class[c].style){
			ic_class[c].style.display="none";
		}
    	}
    } else if (className.search("incorrect")>-1){
    	target.style.backgroundColor="#d72800";
	target.style.color="#fff";
    } else if (className === "audio"){
    	var id = target.id+"a";
    	console.log(id);
    	document.getElementById(id).play();
    }
}, false);


function getAUP(){
	var localAup = chrome.storage.local.get("aup",function(value){
		console.log('Local: '+value);
		return value;
	});
	console.log('Local Aup: '+localAup);
	
	chrome.storage.sync.get("version",function (items) {
		var manifest = chrome.runtime.getManifest();
		var mv = String(manifest.version);
		var version =  items.version
			console.log('version: '+version);	
			console.log('mv: '+mv);	
		if (mv != version){
			chrome.storage.sync.clear();
			console.log('cleared sync')
		}	
		chrome.storage.sync.set({"version":mv})
	})	

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
			  message: "You must answer all of the questions correctly in order to use your Chromebook.",
			  iconUrl: chrome.runtime.getURL("./icon.png")
			},function(){});
		}
		chrome.storage.local.set({"aup":TorF});
}

getAUP();

document.addEventListener('DOMContentLoaded', function() {

	var language = document.getElementById('language')
	if (language!==null){
		language = language.innerHTML;
	
		if (language !== "english"){
			translate("english")
		} else {translate("spanish")}
	
	}

	var language = document.getElementById('language');
	if(language!==null){
		language.addEventListener('click',function(){
			if(language.title==='spanish'){
				language.title="english";
				language.innerHTML="english";
				translate("spanish");
			} else {
				language.title="spanish"
				language.innerHTML="espa&ntilde;ol";
				translate("english");
			}
		});
	}

	var check = document.getElementById("agree");
	if(check!==null){
		check.addEventListener("click", function(){
			var i = n = c = 0, input, inputs = document.getElementsByClassName('complete');
			var notComplete = false;
			if(inputs.length<4){
				notComplete=true
			}
				
    		if (notComplete){
			var language = document.getElementById('language')
			if(language){ 
				language = language.innerHTML;
    				if (language!='english'){
    					alert('Please answer all questions correctly.');
				}else {
					alert('Por favor responde todas las preguntas correctamente.');
				}
			}
    		} else {
				console.log("Complete!!!!!")
    		
    		// RECORD THE AGREEMENT USING THE AUP API.
    		chrome.runtime.sendMessage({email: "get"}, function(response) {
				var email = response.returnEmail;		
				var path = "https://script.google.com/a/cms.k12.nc.us/macros/s/AKfycbw7x05njyCIrBsMrj6AEJFH0nQ5MM0UUW4RtkO2CnN6Jh_hDnI/exec?user="+email.toString();
	    		var xhr = new XMLHttpRequest();
	    		xhr.open("GET", path, true);
	    		try{
	    			xhr.send();
	    			console.log('status:'+xhr.status());
	    		} catch(e){
	    			console.log(e);
	    		}
	    		
	    		console.log('Recorded that '+email+' agreed to the CMS AUP!');
			});

			var main = document.getElementById('main').innerHTML = '<div class="loading"></div>';
			setTimeout(function(){
				updateAUP(true);
      			getAUP();	
      			}, 3000);
    		
    		}
		
	})
}
})	

