chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message,sender,sendResponse){
	console.log("inside content.js",message);
	var elems = document.querySelectorAll('p,h1,span,a,li,h2,h3,h4,h5,h6,br,strong,b,i');
	var language = message;
	

	for(var i=0;i<elems.length;i++){
		let params =  { 
			textToBeTranslated : elems[i],
			languageToBeConverted : message
		}
		translateText(params);
	}
}



var url = "https://translate.yandex.net/api/v1.5/tr.json/translate",
    keyAPI = "trnsl.1.1.20190129T104509Z.19da32aea4fd0882.38079319cc582f918794c8d76f68ec39472d3c32";

function translateText(params) {
	console.log(params,params.textToBeTranslated.innerText);
	var textToBeTranslated =JSON.stringify(params.textToBeTranslated.innerText);
	var languageToBeConverted = params.languageToBeConverted;
    var xhr = new XMLHttpRequest(),
    data = "key="+keyAPI+"&text="+textToBeTranslated+"&lang="+languageToBeConverted;
    xhr.open("POST",url,true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(data);
    xhr.onreadystatechange = function() {
        if (this.readyState==4 && this.status==200) {
            var res = this.responseText;
            console.log(res);
            var json = JSON.parse(res);
            if(json.code == 200) {
				params.textToBeTranslated.innerText = JSON.parse(json.text[0]);
            }
            else {
                //document.querySelector('#output').innerHTML = "Error Code: " + json.code;
            }
        }
    }
}