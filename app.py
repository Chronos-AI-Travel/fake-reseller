Here is the Python script for the backend that will call the API provider based on their guide:

```python
import requests
import json

def search_hotels(destination, check_in, check_out):
    url = "https://api.duffel.com/stays/availability"
    headers = {
        'Accept': 'application/json',
        'Duffel-Version': 'beta',
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
    }
    data = {
        "check_in": check_in,
        "check_out": check_out,
        "location": {
            "type": "city",
            "iata_code": destination
        },
        "guests": [
            {
                "type": "adult"
            }
        ],
        "rooms": 1
    }
    response = requests.post(url, headers=headers, data=json.dumps(data))
    return response.json()
```

Please replace 'YOUR_ACCESS_TOKEN' with your actual access token. This function takes in the destination, check-in, and check-out dates as parameters, makes a POST request to the Duffel API, and returns the response in JSON format.