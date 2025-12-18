""" def produkt(tall1, tall2):
    return tall1 * tall2

print(produkt(4, 5))

print("-------")

def f1(x):
    resultat = 3 * x**2 + 3
    return resultat

x = float(input("Skriv en x-verdi: "))
print(f"Når x er {x} er f1(x) {f1(x)}")

teller = 0
for i in range(3, 8):
    teller = teller + 1
print(teller)

print("------------------------------------------------------------") """

""" for i in range(1, 15, 2):
    print('x' * i)

print("------------------------------------------------------------")

def f(x):
    resultat = x**2 + 3 * x - 1
    for x in range(0,10,1):
        print(f"Når x er {x} er f(x) {resultat}")
print(f()) """

i = 0
while i<10:
    print(i)
    i = i + 3

