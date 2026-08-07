import data from '../json/data.json' with { type: 'json'}

export function genC() {
    data.forEach((e) => {
        let nb = card(e.logo, e.name, e.description, e.isActive, e.id)
    })
}

let tagmaincontainer = document.createElement('main')
tagmaincontainer.setAttribute('id', 'containerC')
document.body.querySelector('#sectionMainContainer').append(tagmaincontainer)

let c = (e) => document.createElement(`${e}`)

function card(l, n, d, a,i) {

    let article = c('article')
    article.classList.add("boxFigureContainer")
    article.setAttribute("id", i)

    /* HEAD*/
    let head = c('header')
    let asidel = c('aside')
    let asider = c('aside')
    let ico = c('img')
    ico.src = l
    let tit = c('h1')
    tit.textContent = n
    let desc = c('p')
    desc.textContent = d
    asidel.append(ico)
    asider.append(tit, desc)
    head.append(asidel, asider)
    /* class - id - etc */


    /* FOOTER */
    let foot = c('footer')
    let footasidel = c('aside')
    let footasider = c('aside')

    let swch = c('button')
    swch.classList.add("toggleAddWidgetSwitch")
    let mark = c('div')
    let rem = c('button')

    swch.classList.add('toggleAddWidgetSwitch')
    rem.textContent = "Remove"

    swch.append(mark)
    footasidel.append(rem)
    footasider.append(swch)
    foot.append(footasidel, footasider)

    article.append(head, foot)

    document.body.querySelector('#containerC').append(article)
}
