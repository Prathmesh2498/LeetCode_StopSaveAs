try{
    function injectScript(file_path, tag) {
        let node = document.getElementsByTagName(tag)[0];
        let script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('src', file_path);
        node.appendChild(script);
    }
    
    injectScript(chrome.runtime.getURL('content-script.js'), 'body');
} catch (error){
    console.log("Error in injecting script");
}
