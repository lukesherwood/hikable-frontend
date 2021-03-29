const prod = {
  url: {
    API_URL: 'https://hikable.herokuapp.com/api/v1',
  },
};
const dev = {
  url: {
    API_URL: `http://localhost:3001/api/v1`,
  },
};
export const config = process.env.NODE_ENV === `development` ? dev : prod;
