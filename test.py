import requests

API_BASE_URL = "http://api.example.com"
GET_ENDPOINT = "/packages"
POST_ENDPOINT = "/packages"  # or /packages/{id} if updating
HEADERS = {
    "Authorization": "Bearer your_api_key",
    "Content-Type": "application/json"
}

def get_packages():
    response = requests.get(API_BASE_URL + GET_ENDPOINT, headers=HEADERS)
    response.raise_for_status()
    return response.json()

def modify_package(package):
    package["customField"] = "custom value"
    package["name"] = f"{package['name']}-modified"
    return package

def save_package(package):
    package_id = package.get("id", "")
    url = f"{API_BASE_URL}{POST_ENDPOINT}/{package_id}" if package_id else API_BASE_URL + POST_ENDPOINT

    response = requests.put(url, json=package, headers=HEADERS)  # use .post() if creating new
    response.raise_for_status()
    return response.json()

def test_package_modification_flow():
    print("Fetching packages...")
    packages = get_packages()

    if not packages:
        print("No packages found.")
        return

    print("Modifying first package...")
    modified_package = modify_package(packages[0])

    print("Saving modified package...")
    result = save_package(modified_package)

    print("Result:")
    print(result)

if __name__ == "__main__":
    test_package_modification_flow()
    