
//template_zt5t736
//service_jwa9d73
//hLXZr0e4vdFic2kDI

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible"

    emailjs
        .sendForm(
            'service_jwa9d73',
            'template_zt5t736',
            event.target,
            'hLXZr0e4vdFic2kDI'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly at peterfwoodin@gmail.com"
            );
        })
}