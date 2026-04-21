import http from 'k6/http';
import { check, sleep } from 'k6';
import { optionsStress } from '../../config/options.js';

export const options = optionsStress;

export default function () {
  const res = http.get('https://carven.com.br/');

  check(res, {
    'status 200': (r) => r.status === 200,
  });

  sleep(1);
}