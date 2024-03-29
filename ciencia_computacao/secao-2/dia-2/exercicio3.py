from collections.abc import Iterable, Iterator


class Carta():
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return '<%s de %s>' % (self.valor, self.naipe)


class BaralhoIterator(Iterator):
    def __init__(self, cartas):
        self._cartas = cartas
        self._count = 0

    def __next__(self):
        try:
            carta = self._cartas[self._count]
        except IndexError:
            raise StopIteration()
        else:
            self._count += 1
            return carta


class BaralhoIteratorInverso(Iterator):
    def __init__(self, cartas):
        self._cartas = cartas
        self._count = 0

    def __next__(self):
        try:
            carta = self._cartas[self._count]
        except IndexError:
            raise StopIteration()
        else:
            self._count -= 1
            return carta


class Baralho(Iterable):
    naipes = 'copas ouros espadas paus'.split()
    valores = 'A 2 3 4 5 6 7 8 9 10 J Q K'.split()

    def __init__(self):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return BaralhoIterator(self._cartas)


class BaralhoInverso(Baralho):

    def __iter__(self):
        return BaralhoIteratorInverso(self._cartas)


if __name__ == "__main__":
    baralho = BaralhoInverso()
    for carta in baralho:
        print(carta)
