// ? Note that more modern code should use `fetch` instead of `request` below.
import { request as makeRequest } from 'node:https';

const APP_API_KEY = 'your-special-api-key-here';
const APP_API_ROOT_URI = 'https://airports.api.hscc.bdpa.org/v1';

const buildApiUri = (endpoint) => `${APP_API_ROOT_URI}/${endpoint}`;

console.info('loading...');

const makeGetRequest = (url) => {
  const opts = {
    method: 'GET',
    headers: {
      key: APP_API_KEY,
      'content-type': 'application/json'
    }
  };

  return new Promise((resolve, reject) => {
    const req = makeRequest(url, opts, (res) => {
      let resData = '';

      res.on('data', (dataChunk) => (resData += dataChunk));
      res.on('end', () => {
        const json = JSON.parse(resData);

        if (res.statusCode == 200) resolve({ res, json });
        else if (res.statusCode == 555) resolve(makeGetRequest(url));
        else reject({ res, error: json.error || '(unknown)' });
      });
    });

    req.on('error', (error) => reject({ res, error }));
    req.end();
  });
};

const getAirports = async () =>
  (await makeGetRequest(buildApiUri('info/airports'))).json.airports;

const searchFlights = async (matchCriteria, afterId) => {
  const match = matchCriteria ? `regexMatch=${JSON.stringify(matchCriteria)}` : '';
  const after = afterId ? `after=${JSON.stringify(afterId)}` : '';
  const query = `${match}&${after}`.replace(/^&+|&+$/g, '');

  return (await makeGetRequest(buildApiUri(`flights/search?${query}`))).json.flights;
};

const echoFlights = (flights) =>
  flights.forEach((flight) => {
    const {
      flightNumber: num,
      comingFrom: from,
      landingAt: to,
      departingTo: depTo,
      type,
      status,
      gate
    } = flight;
    const dTo = type == 'departure' ? ` departing to ${depTo}` : '';
    console.log(
      `Flight ${num} from ${from} to ${to} (${type}, ${status}) is at gate ${gate}${dTo}`
    );
  });

try {
  const tenthAp = (await getAirports())[9];
  const flights1 = await searchFlights({ status: 'landed|arrived|boarding' });
  const flights2 = await searchFlights(
    { status: 'landed|arrived|boarding' },
    flights1.slice(-1).flight_id
  );

  console.info('\n10th airport:');
  console.log(
    `${tenthAp.name} (${tenthAp.shortName}) @ ${tenthAp.city}, ${tenthAp.state}`
  );

  console.info('\nFlights currently on the ground (landed, arrived, boarding):');

  console.info('[part1]');
  echoFlights(flights1);

  console.info('[part2]');
  echoFlights(flights2);

  // How might we get all the pages of results?
} catch (e) {
  console.error(`ERROR (${e.res.statusCode}): ${e.error}`);
}
