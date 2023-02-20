function logoRotate360() {
    let logo = document.querySelector("#logo")
    logo.style.transform = "rotate(360deg)";
}

function logoRotate0() {
    let logo = document.querySelector("#logo")
    logo.style.transform = "rotate(0deg)";
}

$(document).scroll(() => {
    if ($(document).width() < 1024)
        return false;

    if ($(document).scrollTop() > $('nav').height() / 2)
        $('header').addClass('fixed');

    else
        $('header').removeClass('fixed');
});


$('.up-btn').on('click', () => {
        $('html, body').animate({
            scrollTop: 0
        }, '3000');
    });

let articles = [
{
    id: 1,
    foto: 'https://octoweb.ru/wp-content/uploads/2022/09/Kakuju-CMS-vybrat-1-scaled.webp',
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, possimus.'
},
{
    id: 2,
    foto: 'https://www.hostinger.com.ua/rukovodstva/wp-content/uploads/sites/8/2018/10/luchaja-cms.jpg',
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, possimus.'
},
{
    id: 3,
    foto: 'https://rubika.agency/wp-content/uploads/2020/09/zashhita-sajta-ot-vzloma-i-hakerskih-atak-850x400.jpg',
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, possimus.'
},
{
    id: 4,
    foto: 'https://semantica.in/wp-content/uploads/2018/02/f9d6f7f3a3.png',
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, possimus.'
},
{
    id: 5,
    foto: 'https://s3-eu-central-1.amazonaws.com/news.pr-cy.ru/535312/7111.png',
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, possimus.'
},
{
    id: 6,
    foto: 'https://octoweb.ru/wp-content/uploads/2022/09/Kakuju-CMS-vybrat-1-scaled.webp',
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, possimus.'
},
{
    id: 7,
    foto: 'https://s3-eu-central-1.amazonaws.com/news.pr-cy.ru/412801/6624.png',
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, possimus.'
},
{
    id: 8,
    foto: 'https://www.advgazeta.ru/upload/iblock/aba/kak_pravilno_zaklyuchit_dogovor_na_razrabotku_sayta_1.jpg',
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, possimus.'
},
{
    id: 9,
    foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-0ffJtqwzveXGw80VqF8HhWk_h9c81Ep5DKZC8mviclCmprm7UrBAj79yigGA4ihVW6Q&usqp=CAU',
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, possimus.'
},
{
    id: 10,
    foto: 'https://octoweb.ru/wp-content/uploads/2022/09/Kakuju-CMS-vybrat-1-scaled.webp',
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, possimus.'
},
{
    id: 11,
    foto: 'https://img.freepik.com/free-photo/outline-of-responsive-design_1134-80.jpg',
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, possimus.'
},
{
    id: 12,
    foto: 'https://yanakhodkina.com/wp-content/uploads/%D0%A1%D0%BA%D0%BE%D0%BB%D1%8C%D0%BA%D0%BE-%D1%81%D1%82%D0%BE%D0%B8%D1%82-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%81%D0%B0%D0%B9%D1%82%D0%B0.-%D0%9E%D1%82-%D1%87%D0%B5%D0%B3%D0%BE-%D0%B7%D0%B0%D0%B2%D0%B8%D1%81%D0%B8%D1%82-%D1%86%D0%B5%D0%BD%D0%B0.jpg',
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, possimus.'
}
]

let loadStep = 4;

let addNews = () => {
    let parent = document.getElementById("posts");
    let children = parent.children;
    let postsLength = children.length;

    let posts = articles.slice(postsLength, postsLength + loadStep);

    posts.forEach((post) => {
        let el = document.createElement('div');
        el.classList.add('card');

        let content = `
        <img src="${post.foto}" class="card-img-top">
        <div class="card-body">
        <h5 class="card-title">${post.title}</h5> 
        <p class="card-text">${post.text}</p>
        <a href="#" class="btn btn-warning btn-sm">Читать далее</a>
        </div>
        `
        el.innerHTML = content;

        parent.appendChild(el);
    })

    if (children.length === articles.length) {
        let button = document.getElementById("button");
        button.style.display = "none";
    }
}