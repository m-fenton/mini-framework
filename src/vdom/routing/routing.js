export function routing() {

    // Select all <li> elements inside the <ul> with the class "todo-list"




    // Function to check the current hash
    const checkHash = () => {
        // Get all the list items (this will be used in all cases)
        let todoListItems = document.querySelectorAll('.todo-list li');
        
        switch (window.location.hash) {
            case "#/":
                console.log("You are on the All route");

                // Show all list items
                todoListItems.forEach(item => {
                    item.style.display = 'list-item'; // Restore the display for all items
                });
                break;

            case "#/active":
                console.log("You are on the Active route");

                // Show only items that don't have the class "completed"
                todoListItems.forEach(item => {
                    if (item.classList.contains('completed')) {
                        item.style.display = 'none';  // Hide completed items
                    } else {
                        item.style.display = 'list-item';  // Show active (non-completed) items
                    }
                });
                break;

            case "#/completed":
                console.log("You are on the Completed route");

                // Show only items that have the class "completed"
                todoListItems.forEach(item => {
                    if (item.classList.contains('completed')) {
                        item.style.display = 'list-item';  // Show completed items
                    } else {
                        item.style.display = 'none';  // Hide active (non-completed) items
                    }
                });
                break;

            default:
                console.log("Unknown route");
        }
    };

    // Initial check when the function is first called
    checkHash()

    // Assign the handler to the hashchange event directly
    window.onhashchange = checkHash;

    // If you're using history-based routing, handle popstate as well
    window.onpopstate = checkHash;
}