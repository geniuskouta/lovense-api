import HttpClient from '../../httpClient';
const url = process.env.LOVENSE_COMMAND_URL || '';
const token = process.env.LOVENSE_DEV_TOKEN || '';

export enum Model {
  PULSE = 'pulse',
  WAVE = 'wave',
  FIREWORKS = 'fireworks',
  EARTHQUAKE = 'earthquake',
  STOP = 'stop'
};

export const execute = async (userid: string, pattern: Model, duration: number) => {
  return HttpClient.post(url, {
    token: token,
    uid: userid,
    command: "Preset", 
    name: pattern,
    timeSec: duration,
    apiVer: 2
  });
}
