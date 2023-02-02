import json
import csv
from collections import Counter

with open("books.json") as file:
    books = json.load(file)

categories = []

for book in books:
    if book["categories"]:
        for cat in book["categories"]:
            categories.append(cat)

counter = Counter(categories)

with open("books.csv", mode="w") as file:
    writer = csv.writer(file)
    headers = ["category", "percent"]
    writer.writerow(headers)
    for key, value in counter.most_common():
        writer.writerow([key, (len(counter) * value) / 100])
