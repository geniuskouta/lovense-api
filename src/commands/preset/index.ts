import HttpClient from '../../httpClient';
const url = process.env.LOVENSE_COMMAND_URL || '';
const token = process.env.LOVENSE_DEV_TOKEN || '';

export enum Model {
  PULSE = 'pulse',
  WAVE = 'wave',
  FIREWORKS = 'fireworks',
  EARTHQUAKE = 'earthquake',
};

type Options = {
  toy?: string;
}

export const execute = async (userId: string, pattern: Model, duration: number, options?: Options) => {
  return HttpClient.post(url, {
    token: token,
    uid: userId,
    command: "Preset", 
    name: pattern,
    timeSec: duration,
    apiVer: 2,
    ...options
  });
}
