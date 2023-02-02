from exercicio2 import convert_to_numbers

mockCode = [
    ('2', 'ABC'),
    ('3', 'DEF'),
    ('4', 'GHI'),
    ('5', 'JKL'),
    ('6', 'MNO'),
    ('7', 'PQRS'),
    ('8', 'TUV'),
    ('9', 'WXYZ')
]


def test_for_valid_code():
    '''Teste para string válida'''
    result = "1-4663-79338-4663"
    assert convert_to_numbers("1-HOME-SWEET-HOME", mockCode) == result


def test_for_invalid_code():
    '''Teste para string inválida'''
    assert convert_to_numbers("1-HOMEHOME5", mockCode) == "Caracter inválido!"


def test_for_code_greater_than_30():
    '''Teste para string maior que 30'''
    alpha = "-ABCDEFGHIJLMNOPQRSTUVXZKYW10-"
    result = "-2223334445566677778889959910-"
    assert convert_to_numbers(alpha, mockCode) == result


def test_for_void_code():
    '''Teste para string vazia'''
    assert convert_to_numbers("", mockCode) == "Código em branco!"
