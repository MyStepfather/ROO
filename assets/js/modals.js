let body = document.querySelector('body');
let html = document.querySelector('html');
let bcg = document.querySelector('.overlay');
let form = document.querySelector('#form-main');

/* function price () {
    let buttons = document.querySelectorAll('.accordeon__item');
    let modals = document.querySelectorAll('.prices');
    let cross = document.querySelectorAll('.modal__cross');
    
    function openModal(index) {
        body.classList.add('overflow-y-hidden');
        html.classList.add('overflow-y-hidden');    
        modals[index].classList.add('show');
        bcg.classList.add('show');
        let priceBtn = modals[index].querySelector('.btn-green');
        let form = document.querySelector('#form-main');
        priceBtn.addEventListener('click', function() {
            modals[index].classList.remove('show');
            form.classList.add('show');
        })
    }
    
    function closeModal(index) {
        body.classList.remove('overflow-y-hidden');
        html.classList.remove('overflow-y-hidden');
        modals[index].classList.remove('show');
        bcg.classList.remove('show');
    }

    buttons.forEach((button, index) => {
        button.addEventListener('click', function() {
            if(button.classList.contains('accordeon__item--active')){
                openModal(index);
            } else {
                return;
            }
            
        });
        cross[index].addEventListener('click', function() {
            closeModal(index);
        });
        bcg.addEventListener('click', function() {
            closeModal(index);
        });
    });
} */

/* function article() {
    let buttons = document.querySelectorAll('.topic__btn');
    let modal = document.querySelectorAll('.article');
    let cross = document.querySelectorAll('.article__cross');
    
    buttons.forEach((button, index) => {
        function closeModal() {
            body.classList.remove('overflow-y-hidden');
            html.classList.remove('overflow-y-hidden');
            modal[index].classList.remove('show');
            bcg.classList.remove('show');
        }
        function openModal() {
            body.classList.add('overflow-y-hidden');
            html.classList.add('overflow-y-hidden');
            modal[index].classList.add('show');
            bcg.classList.add('show');
            let a = modal[index].querySelector('.span-green');
            if(a) {
                a.addEventListener('click', closeModal);
            }
        }
        button.addEventListener('click', openModal);
        bcg.addEventListener('click', closeModal);
    });
    
    cross.forEach(crossElement => {
        crossElement.addEventListener('click', () => {
            body.classList.remove('overflow-y-hidden');
            html.classList.remove('overflow-y-hidden');
            modal.forEach(m => m.classList.remove('show'));
            bcg.classList.remove('show');
        });
    });
} */

function forma() {
    let buttons = document.querySelectorAll('.form-trig-btn');
    let form = document.querySelector('#form-main');
    let cross = document.querySelector('.form__cross');
    let nav = document.querySelector('#nav');
    let burger = document.querySelector('.burger-pic');
    let sendBtn = document.querySelector('.oko-buttom-wrapper');

    buttons.forEach(button => {
        function openModal() {
            body.classList.add('overflow-y-hidden');
            html.classList.add('overflow-y-hidden');
            form.classList.add('show');
            bcg.classList.add('show');
        }
        function closeModal() {
            if (nav.classList.contains('nav--active')) {
                form.classList.remove('show');
                bcg.classList.remove('show');
                body.classList.add('overflow-y-hidden');
                html.classList.add('overflow-y-hidden');
            } else {
                form.classList.remove('show');
                bcg.classList.remove('show');
                body.classList.remove('overflow-y-hidden');
                html.classList.remove('overflow-y-hidden');
            }
        }
        button.addEventListener('click', openModal);
        cross.addEventListener('click', closeModal);
        bcg.addEventListener('click', closeModal);
        sendBtn.addEventListener('click', closeModal);
    });
}

function alertModal () {
    let modal = document.querySelector('.alert');
    let button = document.querySelector('.alert-btn');
    let cross = document.querySelector('.modal__cross');
    
    function openModal() {
        let key = document.querySelector('input[type="text"]');
        if (key.value) {
            body.classList.add('overflow-y-hidden');
            html.classList.add('overflow-y-hidden');
            modal.classList.add('show');
            bcg.classList.add('show');
            let formBtn = modal.querySelector('.btn-green');
            let form = document.querySelector('#form-main');
            formBtn.addEventListener('click', function() {
                modal.classList.remove('show');
                form.classList.add('show');
            })
        }
        else {
            key.placeholder = 'Введите ключ';
            const style = document.createElement('style');
            style.textContent = `input[type="text"]::placeholder { color: red; }`;
            document.head.appendChild(style);
        }
    }
    function closeModal() {
        modal.classList.remove('show');
        bcg.classList.remove('show');
        body.classList.remove('overflow-y-hidden');
        html.classList.remove('overflow-y-hidden');
        
    }
    button.addEventListener('click', openModal);
    cross.addEventListener('click', closeModal);
    bcg.addEventListener('click', closeModal);
}

function imgUpscale() {
    let img = document.querySelector('.diplom-img');
    let imgModal = document.querySelector('#imgModal')
    
    function openModal() {
        body.classList.add('overflow-y-hidden');
        html.classList.add('overflow-y-hidden');
        imgModal.classList.add('show');
        bcg.classList.add('show');
        
    }
    function closeModal() {
        imgModal.classList.remove('show');
        bcg.classList.remove('show');
        body.classList.remove('overflow-y-hidden');
        html.classList.remove('overflow-y-hidden');
    }

    img.addEventListener('click', openModal);
    bcg.addEventListener('click', closeModal);
}

if (document.querySelector('.oko-buttom-wrapper')) {
    console.log('da')
    sendBtn = document.querySelector('.oko-button-wrapper');
    sendBtn.addEventListener('click', function() {
        let form = document.querySelector('#form-main');
        form.classList.remove('show');
        bcg.classList.remove('show');
        body.classList.remove('overflow-y-hidden');
        html.classList.remove('overflow-y-hidden');
    })
}

// const target = document.querySelector('#form-main');

let observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      // проверяем, появилась ли кнопка "Отправить"
        var submitButton = document.querySelector('.oko-buttom-wrapper');
        if (submitButton) {

            submitButton.addEventListener('click', function() {
                form.classList.remove('show');
                bcg.classList.remove('show');
                body.classList.remove('overflow-y-hidden');
                html.classList.remove('overflow-y-hidden');
            })
        }
    });
});
  
// конфигурация наблюдателя
var config = { childList: true, subtree: true };

// передаем элемент и конфигурацию в наблюдатель
observer.observe(form, config);

alertModal ();
// price ();
// article ();
forma ();
imgUpscale ();