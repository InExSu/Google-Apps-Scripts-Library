function z() {
    if (typeof DEBUG !== 'undefined') {
        // DEBUG определена, ваш код здесь
        console.log('DEBUG is defined:', DEBUG);
    } else {
        // DEBUG не определена
        console.log('DEBUG is not defined');
    }
}