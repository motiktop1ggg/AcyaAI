document.addEventListener('DOMContentLoaded', function() {
    // Запрет контекстного меню (правой кнопки мыши)
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        alert('Копирование контента запрещено');
    });
    
    // Запрет выделения текста
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
    });
    
    // Запрет копирования через Ctrl+C
    document.addEventListener('keydown', function(e) {
        // Ctrl+C, Ctrl+U, Ctrl+S, F12
        if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 85 || e.keyCode === 83) || e.keyCode === 123) {
            e.preventDefault();
            alert('Копирование контента запрещено');
        }
    });
    
    // Добавление водяного знака при копировании (если обходят защиту)
    document.addEventListener('copy', function(e) {
        const selectedText = window.getSelection().toString();
        e.clipboardData.setData('text/plain', selectedText + '\n\nИсточник: ' + window.location.href + '\n© Все права защищены');
        e.preventDefault();
    });
});