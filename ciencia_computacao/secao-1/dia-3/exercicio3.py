def alpha_site(word):
    try:
        site = word.split(sep=".")
        if len(site[1]) > 3:
            return False
        for letter in site[0]:
            is_validate = (
                letter == "." or
                letter.isalpha() or
                letter.isdigit() or
                letter.isnumeric()
            )
            if not is_validate:
                return False
        return True
    except IndexError:
        print("Site inválido")


def validate_email(email):
    # verifica se tem @ e se primeiro caracter é letar
    if email[0].isnumeric() or "@" not in email:
        return "Email inválido"

    # verifica se site é maior que 2 caracters
    if not alpha_site(email.split(sep="@")[1]):
        return "Email inválido"

    for letter in email:
        is_validate = (
            letter == "@" or
            letter == "." or
            letter.isalpha() or
            letter.isnumeric() or
            letter.isdigit()
        )
        if not is_validate:
            return "Email inválido"
    return "Email válido"


print(validate_email("paulo.oinab@gmail"))
