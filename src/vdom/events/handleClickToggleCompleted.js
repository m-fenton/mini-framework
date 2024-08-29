
export const handleClickToggleCompleted = (event) => {

    if (!event.target.classList.contains("toggle")) { return }
    const listItem = event.target.closest('li');
    if (listItem) {
        ;
        if (!listItem.classList.contains("completed")) {
            listItem.classList.add("completed")
        } else {
            listItem.classList.remove("completed")
        }
    }
}


