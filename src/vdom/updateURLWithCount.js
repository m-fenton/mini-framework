export function updateURLWithCount(count) {
    // Remove any existing count from the pathname
    const basePath = window.location.pathname.replace(/\/\d*$/, ''); // Remove trailing digits
    const newUrl = `${basePath}/${count}`;
    history.replaceState({ count }, '', newUrl);
}