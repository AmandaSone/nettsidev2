heltall = int(input("Skriv inn et heltall: "))
if(heltall < 5):
    print("Tallet er mindre enn 5")
elif(heltall == 5):
    print("Tallet er lik 5")
else:
    print("Tallet er større enn 5")

print("---")

desimaltall = float(input("Skriv inn et desimaltall: "))
if(desimaltall < 0):
    print("Tallet er negativt")
elif(desimaltall == 0):
    print("Tallet er null")
else:
    print("Tallet er positivt")

print("---")

tall1 = float(input("Skriv inn et tall: "))
tall2 = float(input("Skriv inn et til tall: "))
if(tall1 == tall2):
    print("Tallene er like")
else:
    print("Tallene er forskjellige")

print("---")

heltall2 = int(input("Skriv inn et heltall: "))
if(heltall2 % 2 == 0):
    print("Tallet er partall")
else:
    print("Tallet er oddetall")


