import startCreteHTML from './js/create-main-html.js';
import createMapInApp from './js/map/map-main.js';
import createGraphInApp from './js/graph/graph.js';
import List from './js/country-list/country-list.js';

// RUN
startCreteHTML();
createMapInApp();
createGraphInApp();
const list = new List();
list.loadInfo();

