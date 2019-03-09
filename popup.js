var languageSelector = document.querySelector("#languageSelector");
let params = {
    active : true,
    currentWindow : true
}

window.onload=function(){
    chrome.tabs.query(params,sendDetectLangRequest);
};
function sendDetectLangRequest(tabs) {
    chrome.tabs.sendMessage(tabs[0].id,'detectMyLang');
}

languageSelector.addEventListener('change', function() {
    chrome.tabs.query(params,gotTabs);
});
function gotTabs(tabs){
    var currentLanguage = languageSelector.value; 
    console.log(tabs,"currentLanguage : " + currentLanguage);
    chrome.tabs.sendMessage(tabs[0].id,currentLanguage);
}



chrome.runtime.onMessage.addListener(displayCurrentLanguage);

function displayCurrentLanguage(message,sender,sendResponse){
    console.log("inside displayCurrentLanguage",message);
    var currLangElement = document.querySelector('#currentLanguage');
    currLangElement.innerHTML="The Current Language is : "  + message.data;
}