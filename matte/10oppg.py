navn = input("Hva heter du?: ")
klasse = input("Hvilken klasse går du i?: ")
skole = input("Hvilken skole går du på?: ")
print(navn, klasse, skole)

print("---------------------------------------------------------------------------------------------------- ")

a = float(7)      
b = float(3.5)   
print(a*b)
print("Heltall heter int eller integer.")
print("Desimaltall heter float.")

print("---------------------------------------------------------------------------------------------------- ")

navn = input("Hva heter du?: ")
alder = str(input("Hvor gammel er du?: "))
favorittrett = input("Hva er din favorittrett?: ")
print("Hei", navn + "! Du er", alder, "år. Favorittretten din er", favorittrett + ".")

print("---------------------------------------------------------------------------------------------------- ")

tall = input("Skriv inn et tall: ")             # Input som standard streng
svar = tall * 3
print("Tallet ditt ganger 3 er: ", svar)            # tall blir repetert 3 ganger etter hverandre

tall = int(input("Skriv inn et tall: "))        # Konverterer input til heltall
svar = tall * 3
print("Tallet ditt ganger 3 er: ", svar)            # tall blir multiplisert med 3

tall = float(input("Skriv inn et tall: "))      # Konverterer input til desimaltall
svar = tall * 3
print("Tallet ditt ganger 3 er: ", svar)            # tall blir multiplisert med 3, men skrevet som et desimaltall

print("---------------------------------------------------------------------------------------------------- ")

# a = input("Hvor mange is skal du kjøpe? ")
# svar = b * 15
# rint("Prisen blir: ", svar)

a = int(input("Hvor mange is skal du kjøpe? "))     # Konverterer input til heltall
svar = a * 15                                       # Forandret b til a
print("Prisen blir: ", svar)

print("---------------------------------------------------------------------------------------------------- ")

uker = 52                               # Hvor mange uker det er i året
dager = 7                               # Hvor mange dager det er i uken
år = uker * dager                       # Regner ut hvor mange dager det er i året
print(år)                               # Skriver ut hvor mange dager det er i året

dager = 31                              # Hvor mange dager det er i Juli
timer = 24                              # Hvor mange timer det er i døgnet
juli = dager * timer                    # Regner ut hvor mange timer det er i Juli
print(juli)                             # Skriver ut hvor mange timer det er i Juli

print("---------------------------------------------------------------------------------------------------- ")

# Regner ut hvor mange dl mel som trengs for antall porsjoner
a = int(input("Hvor mange porsjoner skal lages? "))
b = a * 2.5                                             
print("Du trenger", b, " dl mel. ")                              # Skriver ut hvor mange dl mel som trengs for antall porsjoner

aa = float(input("Skal du lage 2, 3, 4 eller 5 liter ferdigblandet saft? "))       # Byttet int til float
bb = a * 1.5
print("Du trenger", bb, " dL saft. ")

print("2.5 L ferdigblandet = 4.5 dl saft")
print("4.5 L ferdigblandet = 8.1 dl saft")
print("6.5 L ferdigblandet = 11.7 dl saft")

print("---------------------------------------------------------------------------------------------------- ")

a = float(input("Hvor mange liter vaffelrøre skal lages? "))        # Byttet int til float
b = a * 4
print("Du trenger", b, " dl mel. ")

print("---------------------------------------------------------------------------------------------------- ")

# from matplotlib import pyplot                                       # Importerer et bibliotek som kan lage diagrammer
x = ["Samsung","I-phone","Huawei","Nokia","Sony","Andre merker"]    # Lager en liste x med 6 elementer 
y = [6,7,0,1,4]                                                     # Lager en liste y med frekvensene til elementene i liste x
# pyplot.bar(x,y)                                                     # Lager stolpediagram med elementene fra x og y
# pyplot.show()                                                       # Skriver diagrammet til skjermen

x = ["06.00","12.00","18.00","22.00"]                               # Lager en liste for klokkeslett
y = [12,14,20,21]                                                   # Lager en liste for temperaturen
# pyplot.plot(x,y)                                                    # Lager linjediagram med elementene fra x og y
# pyplot.show()

print("---------------------------------------------------------------------------------------------------- ")

biletterEUR = 75                                                    # Antall Euro bilettene kostet
AndersKurs = 10.95                                                  # Anders sin kurs melom EUR og Kr
EvaKurs = 11.05                                                     # Eva sin kurs melom EUR og Kr            
AndersSvar = biletterEUR * AndersKurs
EvaSvar = biletterEUR * EvaKurs
Svar = AndersSvar + EvaSvar
print("For billetter som kostet 75 EUR:")
print("Må Anders betale kr: ",AndersSvar)
print("Må Eva betale kr: ",EvaSvar)
print("Totalt må de betale kr: ",Svar)