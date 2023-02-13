import requests

URL = "https://scrapethissite.com/pages/advanced/?gotcha=headers"
response = requests.get(URL)

try:
    assert "bot detected" not in response.text
except AssertionError:
    print("Requisição falhou")
