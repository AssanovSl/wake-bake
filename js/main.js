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

        /*==============================================================*/

        const buttonControls = document.querySelector('.tab-buttons');
        buttonControls.addEventListener('click', contentSwitch)


        function contentSwitch(e) {

            const tabButton = e.target.closest('.tab-buttons__link');
            if (!tabButton) return

            e.preventDefault()

            if (tabButton.classList.contains('tab-buttons__link--active')) return



            const tabContentID = tabButton.getAttribute('href');
            const activeButton = document.querySelector('.tab-buttons__link--active')
            const activeContent = document.querySelector('.education__tab-content--active')

            if (activeButton) {
                activeButton.classList.remove('tab-buttons__link--active')
            }

            if (activeContent) {
                activeContent.classList.remove('education__tab-content--active')
            }

            document.querySelector(tabContentID).classList.add('education__tab-content--active');

            tabButton.classList.add('tab-buttons__link--active');

        }

        /*==============================================================*/

        const accordionLists = document.querySelectorAll('.accordion-list');
        accordionLists.forEach(el => {
            el.addEventListener('click', (e) => {
                const accordionControl = e.target.closest('.accordion-list__control');
                if (!accordionControl) return
                e.preventDefault()

                const accordionItem = accordionControl.parentElement;
                const accordionContent = accordionControl.nextElementSibling;

                accordionItem.classList.toggle('accordion-list__item--open');

                if (accordionItem.classList.contains('accordion-list__item--open')) {
                    accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                }
                else {
                    accordionContent.style.maxHeight = null;

                }

            });

        });


        //===========СЛАЙДЕР=================//

        const swiper = new Swiper('.gallery__slider', {

            spaceBetween: 15,
            slidesPerView: 1.6,
            // If we need pagination
            pagination: {
                el: '.gallery__pagination',
                type: 'fraction'
            },

            // Navigation arrows
            navigation: {
                nextEl: '.gallery__next',
                prevEl: '.gallery__prev',
            },

            breakpoints: {
                601: {
                    slidesPerView: 3,
                },
                801: {
                    spaceBetween: 32,
                },
                // when window width is >= 640px
                1101: {
                    slidesPerView: 4,
                }
            }
        });
        //===========СЛАЙДЕР ОТЗЫВЫ=================//
        new Swiper('.review__slider', {

            spaceBetween: 0,
            slidesPerView: 1,
            centeredSlides: true,
            loop: true,
        

            // Navigation arrows
            navigation: {
                nextEl: '.review__next',
                prevEl: '.review__prev',
            },
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
            },
            breakpoints: {

                901: {
                    slidesPerView: 1.5,
                },
                1201: {
                    slidesPerView: 2.1,
                },
            }
        });

        //===========МАСКА ДЛЯ ТЕЛЕОФНА===========//
        const telInputs = document.querySelectorAll('input[type="tel"]')
        const inputMask = new Inputmask('+7(999) 99-99-99')
        inputMask.mask(telInputs)
    }
)();


