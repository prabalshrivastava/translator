    var languageSelector = document.querySelector("#languageSelector");
    languageSelector.addEventListener('change', function() {
        let params = {
            active : true,
            currentWindow : true
        }
        chrome.tabs.query(params,gotTabs);
    });
    function gotTabs(tabs){
        var currentLanguage = languageSelector.value; 
        console.log(tabs,"currentLanguage : " + currentLanguage);
        chrome.tabs.sendMessage(tabs[0].id,currentLanguage);
    }