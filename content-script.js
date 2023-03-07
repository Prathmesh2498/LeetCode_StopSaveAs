try {
    var Flag = true;
    const eventHandler =  (event) => {
        const URL = window.location.href;
        const reLeetCode = /^https:\/\/leetcode\.com\/*/;
        
        if(reLeetCode.test(URL) && event.ctrlKey && event.key == "s"){
            event.preventDefault();
        }
    };

    const autoSiteHandler = (event) => {
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
            const ad = document.getElementById("masthead-ad");
            if (ad) {
                ad.parentNode.removeChild(ad);
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

        /*MEDIUM*/
       /*  const reMedium = /^https:\/\/[a-zA-Z0-9\-\.]*medium[a-zA-Z0-9\-\.]*\.com\/*;
        const className = "ab cb cc"
        if(reMedium.test(URL)){
            const sidePanel = document.getElementsByClassName(className)[0];
            console.log(sidePanel);
            const childToRemove = sidePanel.children?.length >= 2 ? sidePanel.children[1] : null;
            if (childToRemove) {
                childToRemove.parentNode.removeChild(childToRemove);
            }
        } else { 
            console.log("Broke")
        } */
    }

    window.addEventListener("keydown", eventHandler);
    window.addEventListener("onload", eventHandler);
    
    let observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (!mutation.addedNodes) return
          autoSiteHandler({})  
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
