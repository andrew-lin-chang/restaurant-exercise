import './style.css';
import Bread from './herobread.png';
import Sourbread from './sourbread.jpg';

export const Home = function() {
    const homePage = document.createElement('div');

    const hero = document.createElement('div');
    hero.classList.add('hero');

    const heroText = document.createElement('h1');
    heroText.textContent = 'No thoughts. Just Bread.'
    const heroImg = new Image();
    heroImg.src = Bread;
    const highlight = document.createElement('div');
    highlight.classList.add('highlight');
    
    hero.appendChild(heroText);
    hero.appendChild(heroImg);
    hero.appendChild(highlight);

    const showcase = document.createElement('div');
    showcase.classList.add('showcase');

    const firstContainer = document.createElement('div');
    const firstText = document.createElement('h1');
    firstText.textContent = "Who says bread isn't good by itself?";
    const firstBlurb = document.createElement('p');
    firstBlurb.textContent = 'They must be lying to you.'
    const order = document.createElement('button');
    order.textContent = 'order now';
    order.classList.add('yellow-btn')

    firstContainer.appendChild(firstText);
    firstContainer.appendChild(firstBlurb);
    firstContainer.appendChild(order);

    const firstImgBg = document.createElement('div');
    firstImgBg.classList.add('img-bg');
    const firstImg = new Image(550);
    firstImg.src = Sourbread;
    firstImgBg.appendChild(firstImg);

    showcase.appendChild(firstContainer);
    showcase.appendChild(firstImgBg);

    homePage.appendChild(hero);
    homePage.appendChild(showcase);

    return homePage;
}