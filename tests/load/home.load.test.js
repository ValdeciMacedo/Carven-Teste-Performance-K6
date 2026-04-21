import http from 'k6/http';
import { check, sleep } from 'k6';
import { optionsLoad } from '../../config/options.js';

export const options = optionsLoad;

export default function () {
  const res = http.get('https://carven.com.br/');

  check(res, {
    'status 200': (r) => r.status === 200,
    'tempo < 2s': (r) => r.timings.duration < 2000,
  });

  sleep(1);
}