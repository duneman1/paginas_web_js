// Import ES6
// import { moment } from './node_modules/moment/moment.js'
// import * as moment from 'moment';
// import 'moment/locale/pt-br';

// Import node
// let moment = require('moment');
// require('moment/locale/es')

moment.locale('sp');
let fecha = moment()
console.log(fecha.format('D MMMM YYYY, h:mm:ss a'))