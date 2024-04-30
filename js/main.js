(
    function () {
        document.addEventListener('click', burgerInit)

        function burgerInit(e) {
            const burgerIcon = e.target.closest(".burger-icon")
            const burgerNavLink = e.target.closest(".nav__link")
            if (document.documentElement.clientWidth <= 900) {
                if (burgerIcon || burgerNavLink) {
                    if (document.body.classList.contains("body--opened-menu")) {
                        document.body.classList.remove('body--opened-menu')
                    }
                    else {
                        document.body.classList.add('body--opened-menu')
                    }
                }
            }
            else {
                return
            }
        }
    })()