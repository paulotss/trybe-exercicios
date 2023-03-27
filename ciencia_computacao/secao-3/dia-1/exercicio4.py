import requests
from parsel import Selector

URL = "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"

response = requests.get(URL)

selector = Selector(text=response.text)

title = selector.css("div.product_main h1::text").get()
price = selector.css("p.price_color::text").get()[2:]
description = selector.css("#product_description ~ p::text").get()
url = response.url

result = (
  f"Título: {title}\n"
  f"Preço: {price}\n"
  f"Descrição: {description[:30]}...\n"
  f"URL: {url}"
)

print(result)
