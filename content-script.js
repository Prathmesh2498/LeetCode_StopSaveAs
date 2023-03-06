try {
    var Flag = true;

    const eventHandler =  (event) => {
        const URL = window.location.href;
        const re = /^https:\/\/leetcode\.com\/*/;
        
        if(re.test(URL) && event.ctrlKey && event.key == "s"){
            event.preventDefault();
        }
    };

    const ytHandler = (event) => {
        const URL = window.location.href;
        const re2 = /^https:\/\/www.youtube\.com\/$/;
        if(re2.test(URL)){
            const guideskeleton = document.getElementById("guide-skeleton");
            if(guideskeleton){
                guideskeleton.parentNode.removeChild(guideskeleton);
            }
            const homeContentSkeleton = document.getElementById("home-container-skeleton");
            if(homeContentSkeleton){
                homeContentSkeleton.parentNode.removeChild(homeContentSkeleton);
            }
            const contents = document.getElementById("contents");
            if(contents && contents.getAttribute("class") != "style-scope ytd-section-list-renderer"){
                contents.parentNode.removeChild(contents);
            }
            const chips = document.getElementById("chips");
            if(chips){
                chips.parentNode.removeChild(chips);
            }
            const guide = document.getElementById("guide");
            if(guide){
                if (guide.opened && Flag) {
                    guide.removeAttribute("opened");
                    Flag = false;
                }
            } 
            const rightArrow = document.getElementById("right-arrow");
            if(rightArrow){
                rightArrow.parentNode.removeChild(rightArrow);
            }
            /*
            UNCOMMENT IF YOU WANT TO REMOVE THE OPTIONS BUTTON TO SHOW PLAYLISTS 
            const guideIcon = document.getElementById("guide-icon");
            if(guideIcon){
                guideIcon.parentNode.removeChild(guideIcon);
            } */
        }
        const re3 = /^https:\/\/www.youtube\.com\/*/;
        if (!re2.test(URL) && re3.test(URL)){
            const secondary = document.getElementById("secondary");
            if(secondary){
                secondary.parentNode.removeChild(secondary);
            }
        }
    }

    window.addEventListener("keydown", eventHandler);
    window.addEventListener("onload", eventHandler);
    
    const URL = window.location.href;
    const re2 = /^https:\/\/www.youtube\.com\/$/;
    
    //setTimeout(ytHandler, 40);

    let observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (!mutation.addedNodes) return
          ytHandler({})  
        })
      })
      
      observer.observe(document.body, {
          childList: true
        , subtree: true
        , attributes: false
        , characterData: false
      })
      
} catch (error) {
    console.error("Error while initilizing handler.",error);
}
