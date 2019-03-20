function onClickHandler(info, tab) {
	var tab = chrome.tabs.create({
		url: "https://verizonconnect.my.salesforce.com/_ui/search/ui/UnifiedSearchResults?asPhrase=1&searchType=2&str=" + info.selectionText
	});
};
chrome.contextMenus.onClicked.addListener(onClickHandler);
chrome.runtime.onInstalled.addListener(function() {
	var contexts = ["selection"];
	for (var i = 0; i < contexts.length; i++) {
		var context = contexts[i];
		var title = "Search Salesforce for \"%s\"";
		var id = chrome.contextMenus.create({
			"title": title,
			"contexts": [context],
			"id": "context" + context
		});
	}
});