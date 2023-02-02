def fizz_buzz(end):
    result = []
    for num in range(1, end + 1):
        if num % 3 == 0 and num % 5 == 0:
            result.append("FizzBuzz")
        elif num % 3 == 0:
            result.append("Fizz")
        elif num % 5 == 0:
            result.append("Buzz")
        else:
            result.append(num)
    return result


if __name__ == "__main__":
    print(fizz_buzz(50))
