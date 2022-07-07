require('dotenv').config();
import { Auth, Preset, Function, Pattern } from './commands';

// Auth.getQR('1', 'geniuskouta').then(res => console.log(res));
// Preset.execute('1', Preset.Model.PULSE, 100).then(res => console.log(res));
Function.execute('1', Function.Model.STOP, 1).then(res => console.log(res));

// Pattern.execute('1', {
//   version: 2,
//   interval: 1000,
//   instructions: [Pattern.Model.VIBRATE, Pattern.Model.ROTATE]
// }, 100, [20, 5, 10, 2, 10, 15, 30]).then(res => console.log(res));
