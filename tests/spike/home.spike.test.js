import http from 'k6/http';
import { check } from 'k6';
import { optionsSpike } from '../../config/options.js';

export const options = optionsSpike;

export default function () {
  const res = http.get('https://carven.com.br/');

  check(res, {
    'status 200': (r) => r.status === 200,
  });
}