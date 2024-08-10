function slideToggle(element, duration = 400) {
    const computedStyle = window.getComputedStyle(element);
    const display = computedStyle.display;

    if (display === 'none') {
       
        element.style.display = 'block';
        const height = element.scrollHeight;
        element.style.height = '0';
        element.style.overflow = 'hidden';
        element.style.transition = `height ${duration}ms ease-in-out`;

        
        requestAnimationFrame(() => {
            element.style.height = `${height}px`;
        });

       
        setTimeout(() => {
            element.style.height = '';
            element.style.overflow = '';
            element.style.transition = '';
        }, duration);

    } else {
        
        const height = element.scrollHeight;
        element.style.height = `${height}px`;
        element.style.overflow = 'hidden';
        element.style.transition = `height ${duration}ms ease-in-out`;

       
        requestAnimationFrame(() => {
            element.style.height = '0';
        });

       
        setTimeout(() => {
            element.style.display = 'none';
            element.style.height = '';
            element.style.overflow = '';
            element.style.transition = '';
        }, duration);
    }
}

export default slideToggle