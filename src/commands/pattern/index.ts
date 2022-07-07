
import HttpClient from '../../httpClient';
const url = process.env.LOVENSE_COMMAND_URL || '';
const token = process.env.LOVENSE_DEV_TOKEN || '';

export enum Model {
  VIBRATE = 'v',
  ROTATE = 'r',
  PUMP = 'p',
}

export type RuleModel = {
  version: number;
  interval: number; // milliseconds
  instructions: Model[];
}

export type Strength = number[]; // 0 - 20

type Options = {
  toy?: string;
}

export const execute = async (userId: string, rule: RuleModel, duration: number, strength: Strength, options?: Options) => {
  return HttpClient.post(url, {
    token: token,
    uid: userId,
    command: "Pattern", 
    rule: parseRule(rule),
    strength: parseStrength(strength),
    timeSec: duration,
    apiVer: 2,
    ...options
  });
}

function parseRule(rule: RuleModel): string {
  const { version, interval, instructions } = rule;
  return `V:${version};F:${instructions.join('')};S:${interval}#`;
}

function parseStrength(strength: Strength): string {
  return strength.join(';');
}