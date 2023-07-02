import './style.css'
import { Home } from './home';

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
    const navBtns = document.createElement('div');

    home.textContent = 'Home';
    menu.textContent = 'Menu';
    about.textContent = 'About';
    title.textContent = 'Just Bread.';
    login.textContent = 'Login';
    order.textContent = 'Order';

    wrapper.classList.add('wrapper');
    navbar.classList.add('navbar');
    tabs.classList.add('tabs');
    navBtns.classList.add('nav-btns');

    tabs.appendChild(home);
    tabs.appendChild(menu);
    tabs.appendChild(about);
    navBtns.appendChild(login);
    navBtns.appendChild(order);

    navbar.appendChild(title);
    navbar.appendChild(tabs);
    navbar.appendChild(navBtns);

    wrapper.appendChild(Home());
    content.appendChild(navbar);
    content.appendChild(wrapper);

}