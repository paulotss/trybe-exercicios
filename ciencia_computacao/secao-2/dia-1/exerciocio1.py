class TV:
    def __init__(self, tamanho):
        self.__volume = 0
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    @property
    def volume(self):
        return self.__volume

    @property
    def canal(self):
        return self.__canal

    @property
    def tamanho(self):
        return self.__tamanho

    @property
    def ligada(self):
        return self.__ligada

    def __str__(self):
        return f"""
      - Volume: {self.volume}
      - Canal: {self.canal}
      - Tamanho: {self.tamanho}
      - Ligado: {self.ligada}
      """

    def aumentar_volume(self):
        if self.__volume < 100:
            self.__volume += 1

    def diminuir_volume(self):
        if self.__volume > 0:
            self.__volume -= 1

    def modificar_canal(self, canal):
        if 0 < canal < 31:
            self.__canal = canal
        else:
            raise ValueError("Canal fora dos limites")

    def ligar_desligar(self):
        self.__ligada = not self.__ligada


if __name__ == "__main__":
    tv1 = TV(14)
    tv1.aumentar_volume()
    tv1.aumentar_volume()
    tv1.diminuir_volume()
    tv1.modificar_canal(10)
    tv1.ligar_desligar()
    print(tv1)
