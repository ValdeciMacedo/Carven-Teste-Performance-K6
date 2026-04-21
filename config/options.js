export const optionsSmoke = {
  vus: 1,
  duration: '10s',
};

export const optionsLoad = {
  stages: [
    { duration: '30s', target: 10 },
    { duration: '1m', target: 30 },
    { duration: '30s', target: 0 },
  ],
};

export const optionsStress = {
  stages: [
    { duration: '30s', target: 50 },
    { duration: '1m', target: 100 },
    { duration: '30s', target: 0 },
  ],
};

export const optionsSpike = {
  stages: [
    { duration: '10s', target: 200 },
    { duration: '20s', target: 0 },
  ],
};