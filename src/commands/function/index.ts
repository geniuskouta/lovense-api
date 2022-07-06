
import HttpClient from '../../httpClient';
const url = process.env.LOVENSE_COMMAND_URL || '';
const token = process.env.LOVENSE_DEV_TOKEN || '';

export enum Model {
  STOP = 'stop'
}

export const execute = async (userid: string, action: Model, duration: number) => {
  return HttpClient.post(url, {
    token: token,
    uid: userid,
    command: "Function", 
    action: Model.STOP,
    timeSec: duration,
    apiVer: 2
  });
}
