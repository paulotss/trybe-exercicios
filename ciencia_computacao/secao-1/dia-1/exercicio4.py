names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
count = []

for name in names:
    count.append((len(name), name))

count.sort(reverse=True)

print(count[0][1])
