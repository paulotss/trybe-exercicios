name = input("Escreva um nome: ")

c = len(name) - 1

for removed in range(len(name)):
    for index in range(len(name) - removed):
        print(name[index], end="")
    print()
