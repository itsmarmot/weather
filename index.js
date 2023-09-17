import dom from 'src/js/dom';
import events from 'src/js/events';
import autoComplete from 'src/js/search';
import 'src/style/style.css';

const event = events();
autoComplete();
const submit = document.getElementById('submit');
submit.addEventListener('click', event.getLocation.bind(this, 'search'));

const submit2 = document.getElementById('submit2');
submit2.addEventListener('click', event.getForecast.bind(this));

const search2 = document.getElementById('search2');
search2.addEventListener('click', event.getLocation.bind(this, 'searchBar'));

const home = document.getElementById('home');
home.addEventListener('click', () => { dom().show('aaa'); });
