import requests
import base64

# === CONFIGURATION ===
api_key = 'your-sandbox-api-key-here'
base_url = 'https://sandbox-api-co.metrc.com'  # Change 'co' to your state if needed
endpoint = '/facilities/v1'

# === HEADERS ===
# Metrc uses Basic Auth where the username is your API key and the password is empty
encoded_auth = base64.b64encode(f'{api_key}:'.encode()).decode()
headers = {
    'Authorization': f'Basic {encoded_auth}',
    'Content-Type': 'application/json'
}

# === API REQUEST ===
def test_get_facilities():
    url = base_url + endpoint
    response = requests.get(url, headers=headers)

    print(f"Status Code: {response.status_code}")
    if response.status_code == 200:
        print("Facilities data retrieved successfully:")
        print(response.json())  # or use pprint for better formatting
    else:
        print("Failed to fetch facilities:")
        print(response.text)

# === RUN TEST ===
if __name__ == '__main__':
    test_get_facilities()
