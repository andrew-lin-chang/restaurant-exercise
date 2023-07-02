import './style.css';
import Bread from './herobread.png';

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
    homePage.appendChild(hero);

    return homePage;
}