def total(meters):
    liters = round((meters / 3) + 0.5)
    amount = round((liters / 18) + 0.5)
    price = amount * 80
    return (amount, price)


print(total(100))
