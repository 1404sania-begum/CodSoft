(function () {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.button');
    let equal = document.querySelector('.js-equal');
    let deleteButton = document.querySelector('.js-delete');
    let clear = document.querySelector('.js-clear');



    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            screen.textContent += value;
        })

    });
    equal.addEventListener('click', function (e) {
        console.log("value")
        if (screen.textContent === "") {
            screen.textContent = "please enter";
        }
        else {
            let answer = eval(screen.textContent);
            screen.textContent = answer;
        }
    })

    deleteButton.addEventListener('click', function (e) {
        let currentText = screen.textContent;
        let previousText = currentText.slice(0, -1);
        screen.textContent = previousText;
    })

    clear.addEventListener('click', function (e) {
        screen.textContent = "";
    })


})();