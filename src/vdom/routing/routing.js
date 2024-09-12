export function routing() {
    // const basePath = window.location.pathname
    // console.log("basePath:", basePath)

    // const fullUrl = window.location.href;  
    // console.log("Full URL:", fullUrl);


    // Function to check the current hash
    const checkHash = () => {
        if (window.location.hash === "#/completed") {
            console.log("You are on the /completed route");
        } else {
            console.log(`You are on the ${window.location.hash} route`);

        }
    };
    // Initial check when the function is first called
    checkHash()

    // Assign the handler to the hashchange event directly
    window.onhashchange = checkHash;

    // If you're using history-based routing, handle popstate as well
    window.onpopstate = checkHash;
}