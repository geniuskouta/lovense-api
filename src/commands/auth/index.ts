import HttpClient from '../../httpClient';
import { v4 as uuid } from 'uuid';
const url = process.env.LOVENSE_QR_URL || '';
const token = process.env.LOVENSE_DEV_TOKEN || '';

export const getQR = async (userid: string, username: string) => {
  return HttpClient.post(url, {
    token: token,  // Lovense developer token
    uid: userid,  // user id on your website
    uname: username, // user nickname on your website
    utoken: uuid()
  });
}
