from exercicio1 import fizz_buzz


def test_fiz_buzz_for_list_number():
    'Para saída em números'
    assert fizz_buzz(2) == [1, 2]


def test_fiz_buzz_for_output_fizz():
    'Para saída Fizz'
    assert fizz_buzz(3)[2] == "Fizz"


def test_fiz_buzz_for_output_buzz():
    'Para saída Buzz'
    assert fizz_buzz(6)[4] == "Buzz"


def test_fiz_buzz_for_output_fizzbuzz():
    'Para saída FizzBuzz'
    assert fizz_buzz(20)[14] == "FizzBuzz"
