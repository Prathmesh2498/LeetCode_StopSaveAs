chrome.runtime.onInstalled.addListener(()=>{
    
});

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {
        console.log("Found Tab", tab.url);
        try { 
            await chrome.scripting.executeScript({
                target: { tabId: tabId },
                files: ["injectScript.js"]
            }); 
        } catch (error) {
            console.log("Error while initializing injection",error);
        }
    }
});
