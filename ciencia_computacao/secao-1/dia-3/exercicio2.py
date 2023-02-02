def convert_to_numbers(word, code):
    '''word -> str | code | array of tuples'''
    if not word:
        return "Código em branco!"
    result = []
    for letter in word:
        isLetter = False
        for key, cd in code:
            if letter in cd:
                result.append(key)
                isLetter = True
        if not isLetter:
            if letter != "-" and letter != "0" and letter != "1":
                return "Caracter inválido!"
            else:
                result.append(letter)
    return "".join(result)


if __name__ == "__main__":
    code = []
    with open("numbers.txt") as file:
        for line in file:
            code.append((line.split()[1], line.split()[0]))

# print(convert_to_numbers("-ABCDEFGHIJLMNOPQRSTUVXZKYW10-", code))
