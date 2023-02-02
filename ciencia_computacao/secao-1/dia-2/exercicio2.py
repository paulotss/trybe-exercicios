import random

with open("words.txt") as file:
    words = [wr.replace("\n", "") for wr in file]

print(words)

# words = ["PYTHON", "DEVELOPER", "HACKER"]
word_choice = random.choice(words)
scramble = "".join(random.sample(word_choice, len(word_choice)))
index = words.index(word_choice)

print(word_choice)
print(scramble)

guess = ""
count = 3

while guess != word_choice and count > 0:
    guess = input("Qual palavra?: ")
    count -= 1

# print(scramble, index)
