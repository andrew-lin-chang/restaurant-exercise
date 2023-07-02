import './style.css'
import { Home } from './home';
import { Menu } from './menu';
import { About } from './about';

export const Initialize = function() {
    const content = document.querySelector('#content');
    const wrapper = document.createElement('div');
    const navbar = document.createElement('div');
    const tabs = document.createElement('div');
    const home = document.createElement('button');
    const menu = document.createElement('button');
    const about = document.createElement('button');
    const title = document.createElement('p');

    const login = document.createElement('button');
    const order = document.createElement('button');
    order.classList.add('yellow-btn');
    login.classList.add('yellow-btn');
    const navBtns = document.createElement('div');

    content.appendChild(navbar);
    content.appendChild(wrapper);

    wrapper.classList.add('wrapper');
    navbar.classList.add('navbar');
    tabs.classList.add('tabs');
    navBtns.classList.add('nav-btns');

    home.textContent = 'Home';
    menu.textContent = 'Menu';
    about.textContent = 'About';
    title.textContent = 'Just Bread.';
    login.textContent = 'Login';
    order.textContent = 'Order';

    tabs.appendChild(home);
    tabs.appendChild(menu);
    tabs.appendChild(about);
    navBtns.appendChild(login);
    navBtns.appendChild(order);

    navbar.appendChild(title);
    navbar.appendChild(tabs);
    navbar.appendChild(navBtns);


    home.addEventListener('click', () => {
        loadScreen(Home());
    });
    menu.addEventListener('click', () => {
        loadScreen(Menu());
    });
    about.addEventListener('click', () => {
        loadScreen(About());
    })

    wrapper.appendChild(Home());
}

const loadScreen = function(screen) {
    const wrapper = document.querySelector('.wrapper');
    wrapper.innerHTML = '';
    wrapper.appendChild(screen);
}