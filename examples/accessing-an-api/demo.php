<?php
const APP_API_KEY = 'your-special-api-key-here';
const APP_API_ROOT_URI = 'https://airports.api.hscc.bdpa.org/v1';

echo ("loading...\n");

$buildApiUri = function ($endpoint) {
    return APP_API_ROOT_URI . '/' . $endpoint;
};

$makeGetRequest = function ($url) use (&$makeGetRequest) {
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    curl_setopt($ch, CURLOPT_HEADER, FALSE);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);

    // ? Allow CURL to handle HTTPS requests
    curl_setopt($ch, CURLOPT_CAINFO, __DIR__ .  '/../cacert-08-03-2020.pem');

    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'key: ' . APP_API_KEY,
        'content-type: application/json',
    ]);

    $response = curl_exec($ch);
    $info = curl_getinfo($ch);
    curl_close($ch);

    $status = $info['http_code'];
    $json = json_decode($response, true);

    if ($status == 200)
        return $json;

    else if ($status == 555)
        return $makeGetRequest($url);

    else
        throw new Exception("Bad API response (status $status): {$json['error']}");
};

$getAirports = function () use (&$makeGetRequest, &$buildApiUri) {
    return $makeGetRequest($buildApiUri('info/airports'))['airports'];
};


$searchFlights = function ($rawMatchCriteria = NULL, $afterId = NULL) use (&$makeGetRequest, &$buildApiUri) {
    $match = '';
    $after = '';

    if ($rawMatchCriteria) {
        $json = json_encode($rawMatchCriteria);

        if (!$json)
            throw new Exception('Bad raw regexMatch criteria provided');

        $match = 'regexMatch=' . rawurlencode($json);
    }

    if ($afterId)
        $after = '&after=' . $afterId;

    $query = trim("$match$after", '&');
    return $makeGetRequest($buildApiUri("flights/search?$query"))['flights'];
};

$echoFlights = function ($flights) {
    foreach ($flights as $key => $flight) {
        echo ("Flight {$flight['flightNumber']} from {$flight['comingFrom']} to {$flight['landingAt']} ({$flight['type']}, {$flight['status']}) is at gate {$flight['gate']}");

        if ($flight['type'] == 'departure')
            echo (" departing to {$flight['departingTo']}");

        echo "\n";
    }
};

try {
    $tenthAp = $getAirports()[9];
    $flights1 = $searchFlights(['status' => 'landed|arrived|boarding']);
    $flights2 = $searchFlights(['status' => 'landed|arrived|boarding'], end($flights1)['flight_id']);

    echo ("\n10th airport:\n");
    echo ("{$tenthAp['name']} ({$tenthAp['shortName']}) @ {$tenthAp['city']}, {$tenthAp['state']}\n");

    echo ("\nFlights currently on the ground (landed, arrived, boarding):\n");
    echo ("[page 1]\n");
    $echoFlights($flights1);
    echo ("[page 2]\n");
    $echoFlights($flights2);

    # How might we get all the pages of results?
} catch (Throwable $e) {
    echo ("ERROR: {$e->getMessage()}");
}
