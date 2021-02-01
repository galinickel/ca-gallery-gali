'use strict'

// create a database for projects
var gProjList = [{
    id: 1,
    name: 'Minesweeper',
    title: 'Minesweeper Game',
    shortDesc: 'Interactive game with three difficulty levels',
    desc: `A minesweeper game, based off of the familiar classic. This game features three difficulty levels, a lives system, a hint system and a safe-click system,
    giving you the opportunity to ascend your experience to new heights!  Oh, and in case you weren't already impressed- <b>it was built in two days.</b>`,
    publishedAt: '20-01-2021',
    labels: 'HTML, CSS, Javascript'
}, {
    id: 2,
    name: 'Bookstore Interface',
    shortDesc: 'Perfect for keeping stock of a large variety of books',
    title: 'Bookstore Interface',
    desc: `'desc2'`,
    publishedAt: 'date2',
    labels: null
}, {
    id: 3,
    name: 'Touch The Numbers',
    shortDesc: 'Challenging game against the clock- save and compare your best times',
    title: 'Bookstore Interface',
    desc: `'desc3'`,
    publishedAt: 'date3',
    labels: null
}]
renderPortfolio()
function renderPortfolio() {
    var elPortfolioBody = $(`.portfolio-body`)
var strHTML = ''
    for (var i = 1 ; i < gProjList.length+1 ; i++) { 
        var proj = getProjByID(i-1)
        strHTML += `    
        <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${proj.id}"  onclick="renderProjModal(id)" >
            <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
                </div>
            </div>
            <img class="img-fluid" src="img/portfolio/0${proj.id}-thumbnail.jpg" alt="">
            </a>
            <div class="portfolio-caption">
            <h4>${proj.title}</h4>
            <p class="text-muted">${proj.shortDesc}</p>
            </div>
            </div>
        `
    }
    $(elPortfolioBody).html(strHTML)

}







function renderProjModal(id) {
    var projId = +(id)
    var proj = getProjByID(projId);
    var elModalBody = $(`.modal-body`)
    var strHtml = `
<h2> ${proj.title}</h2>
<p class='item-intro text-muted'>${proj.desc}</p>
<button class='btn btn-primary btn-lg' style="margin:25px"  type='button' onclick="onOpenProj(${projId})">
<i class='fas fa-external-link-alt'></i>
Check it out!</button>
<img class="img-fluid d-block mx-auto portfolio-img" src="img/portfolio/${projId+1}-full.jpg" alt="">

<ul class='list-inline'>
<li>Date: Originally published: ${proj.publishedAt}</li>
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