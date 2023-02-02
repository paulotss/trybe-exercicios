import pytest
from exercicio3 import validate_email


def test_for_valid_email():
    '''Teste para email válido'''
    assert validate_email("paulo.oinab@gmail.com") == "Email válido"


def test_for_invalid_site():
    '''Teste para site inválido'''
    with pytest.raises(IndexError, match="Site inválido"):
        validate_email("paulo.oinab@gmail")
