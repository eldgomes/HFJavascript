function makeTimer(doneMessage, n) {
    setTimeout(
        function() {
            alert(doneMessage);
        },
        n
    );
}

makeTimer("Cookies are done!", 1000);