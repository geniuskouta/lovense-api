require('dotenv').config();
import { Auth, Preset, Function } from './commands';

// Auth.getQR('1', 'geniuskouta').then(res => console.log(res));
// Preset.execute('1', Preset.Model.FIREWORKS, 100).then(res => console.log(res));
Function.execute('1', Function.Model.STOP, 1).then(res => console.log(res));
