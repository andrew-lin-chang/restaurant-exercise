import './style.css';

export const Home = function() {
    const homePage = document.createElement('div');

    const hero = document.createElement('div');
    hero.classList.add('hero');

    const heroText = document.createElement('h1');
    heroText.textContent = 'No thoughts. Just Bread.'
    
    hero.appendChild(heroText);
    homePage.appendChild(hero);

    return homePage;
}