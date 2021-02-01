'use strict'

function onInit() { 
    renderPortfolio()
}

function onOpenProj(projId) {
    switch (projId) {
        case 0:
            window.open('https://galinickel.github.io/sprint1/')
            break;
        case 1:
            window.open('https://galinickel.github.io/bookstore_project/')
            break;
        case 2:
            window.open('https://galinickel.github.io/touch-nums-ca/')
            break;
    }
}

function onContactFormSubmit() { 
    submitEmail()
}