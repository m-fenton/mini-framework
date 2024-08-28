export function removeElementHandler(event, elementClickedOnClassOrId, elementToRemove) {
    if (event.target.classList.contains(elementClickedOnClassOrId) || (event.target.id === elementClickedOnClassOrId)) {
      // Remove the parent element of the target (usually a list item)
      const listItem = event.target.closest(elementToRemove);
      if (listItem) {
        listItem.remove();
      }
    }
  }