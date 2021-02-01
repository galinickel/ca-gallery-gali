'use strict'

// create a database for projects
var gProjList = [{
    id: 1,
    name: 'nam1e',
    title: 'title1',
    desc: 'desc1',
    url: 'url1',
    imgUrl: '',
    publishedAt: 'date1',
    labels: 'headaches, big headaches'
}, {
    id: 2,
    name: 'nam2',
    title: 'title2',
    desc: 'desc2',
    url: 'url2',
    imgUrl: '',
    publishedAt: 'date2',
    labels: null
}, {
    id: 3,
    name: 'bookstore-proj',
    title: 'Bookstore Interface',
    desc: 'desc3',
    url: 'url3',
    imgUrl: '',
    publishedAt: 'date3',
    labels: null
}]
// create a function to render modal to be called onclick.

function renderProjModal(id) {
    var projId = +(id)
    var proj = getProjByID(projId);
    var elModalBody = $(`.modal-body`)
    var strHtml = `
<h2> ${proj.title}</h2>
<p class='item-intro text-muted'>${proj.desc}</p>
<button class='btn btn-primary btn-lg'  type='button' onclick="onOpenProj(${projId})">
<i class='fas fa-external-link-alt'></i>
Check it out!</button>
<img class="img-fluid d-block mx-auto portfolio-img" src="img/portfolio/${projId+1}-full.jpg" alt="">

<ul class='list-inline'>
<li>Date: ${proj.publishedAt}</li>
<li>Client: Window</li>
<li>Category: ${proj.labels}</li>
</ul>


<button class='btn btn-primary' data-dismiss='modal' type='button'>
<i class='fa fa-times'></i>
Close Project</button>`
    $(elModalBody).html(strHtml)
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

function getProjByID(projId) {
    return gProjList[projId]
}