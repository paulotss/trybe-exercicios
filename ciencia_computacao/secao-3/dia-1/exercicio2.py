import requests

response = requests.get("https://api.github.com/users")

for row in response.json():
    print(row["login"], " ", row["url"])
