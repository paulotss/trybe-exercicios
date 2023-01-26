def type_triangle(num1, num2, num3):
    if not num1 + num2 < num3 and num1 + num3 < num2 and num2 + num3 < num1:
        return "não é tringângulo"
    elif num1 == num2 == num3:
        return "equilátero"
    elif num1 == num2 or num2 == num3 or num3 == num1:
        return "isóceles"
    else:
        return "escaleno"
