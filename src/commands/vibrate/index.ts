import axios from 'axios';
import { v4 as uuid } from 'uuid';
const url = process.env.LOVENSE_COMMAND_URL || '';
const token = process.env.LOVENSE_DEV_TOKEN || '';

export enum Command {
  PULSE = 'pulse',
  WAVE = 'wave',
  FIREWORKS = 'fireworks',
  EARTHQUAKE = 'earthquake',
  STOP = 'stop'
};

export const execute = async (userid: string, command: Command, duration: number) => {
  try {
    const response = await axios.post(url, {
      token: token,
      uid: userid,
      command: "Preset", 
      name: command,
      timeSec: duration,
      apiVer: 2
    });
    return response.data;
  } catch(err) {
    return err;
  }
}
export const stop = async (userid: string) => {
  try {
    const response = await axios.post(url, {
      token: token,
      uid: userid,
      command: "Function", 
      action: Command.STOP,
      timeSec: 1,
      apiVer: 2
    });
    return response.data;
  } catch(err) {
    return err;
  }
}
