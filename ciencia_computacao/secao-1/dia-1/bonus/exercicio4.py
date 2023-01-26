def total_price(liters, type):
    price = 0
    if type == "g":
        price = liters * 2.5
        if liters <= 20:
            price -= price * 0.03
        else:
            price -= price * 0.05
    else:
        price = liters * 1.9
        if liters <= 20:
            price -= price * 0.04
        else:
            price -= price * 0.06
    return price


print(total_price(100, "a"))
