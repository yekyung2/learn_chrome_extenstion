function get_source(document_body){
    return document_body.innterText;
}

chrome.extension.sendMessage({
    action: "getSource", 
    source: get_source(document.body)
});