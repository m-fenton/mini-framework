const handleDoubleClickEdit = (event) => {
    const item = event.target;
    const originalText = item.textContent;

    const input = document.createElement('input');
    input.type = 'text';
    input.value = originalText;
    item.replaceWith(input);

    input.addEventListener('blur', () => {
        const newValue = input.value.trim() || originalText;
        input.replaceWith(document.createTextNode(newValue));
        console.log(`Item edited to: ${newValue}`);
    });

    input.focus();
};

// Example of registering the event
registerEvent('dblclick', 'label', handleDoubleClickEdit);


//NEEDS TO BE CHANGED MASSIVELY TO WORK, JUST A PLACEHOLDER FORM CHAT