
import HttpClient from '../../httpClient';
const url = process.env.LOVENSE_COMMAND_URL || '';
const token = process.env.LOVENSE_DEV_TOKEN || '';

export enum Model {
  VIBRATE = 'Vibrate',
  ROTATE = 'Rotate',
  PUMP = 'Pump',
  STOP = 'Stop'
}

export type InstructionModel = {
  instruction: Model;
  strength: number;
}

type Options = {
  loopDuration?: number;
  loopPauseDuration?: number;
  toy?: string;
}

export const execute = async (userid: string, action: Model | InstructionModel[], duration: number, options?: Options) => {
  return HttpClient.post(url, {
    token: token,
    uid: userid,
    command: "Function", 
    action: parseAction(action),
    timeSec: duration,
    apiVer: 2,
    ...options
  });
}

function parseAction(action: Model | InstructionModel[]): string {
  if(typeof action === 'string') {
    return action;
  }

  let instructions: string[] = [];
  action.forEach((item) => {
    const { instruction, strength } = item;
    instructions.push(`${instruction}:${strength}`);
  });

  return instructions.join(',');
}
