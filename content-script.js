try {
    const eventHandler =  (event) => {
        const URL = window.location.href;
        const re = /^https:\/\/leetcode\.com\/*/;
        if(re.test(URL) && event.ctrlKey && event.key == "s"){
            event.preventDefault();
        }
    };
    
    window.addEventListener("keydown", eventHandler);
} catch (error) {
    console.log("Error while initilizing handler.",error);
}
