from collections import Counter


class Estatistica:
    def __init__(self, numbers) -> None:
        self.__numbers = numbers

    @property
    def numbers(self):
        return self.__numbers

    def media(self):
        soma = 0
        for number in self.numbers:
            soma += number
        return soma / len(self.numbers)

    def mediana(self):
        index = len(self.numbers) // 2
        return self.numbers[index]

    def moda(self):
        return Counter(self.numbers).most_common()[0]


if __name__ == "__main__":
    numeros = Estatistica([1, 2, 2, 3, 3, 3])
    print(numeros.mediana())
