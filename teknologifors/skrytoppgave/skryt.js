const skryteOrd = [
    "sjenerøs",
    "omgjengelig",
    "ambisiøs",
    "munter",
    "hardtarbeidende",
    "troverdig",
    "tålmodig",
    "optimistisk",
    "følsom",
    "sosial",
    "besluttsom",
    "morsom",
    "blid",
    "vakker",
    "lekende",
    "elskverdig",
    "talentfull",
    "begavet"
];


document.getElementById('btnSkryt').addEventListener('click', genererSkryt);
const navnInput = document.getElementById('navnInput');
const skrytOutput = document.getElementById('skrytOutput');
const antallInput = document.getElementById('antallInput');

function genererSkryt() {
    console.log("Generer skryt", navnInput.value, antallInput.value);
    hentTilfeldigSkryt(navnInput.value, antallInput.value);

}

function hentTilfeldigSkryt(navn, antall) {
    // Clamp antall to max available unique words
    antall = Math.min(antall, skryteOrd.length);
    
    let skryteListe = [];
    while (skryteListe.length < antall) {
        let randomIdx = Math.floor(Math.random() * skryteOrd.length);
        let etSkryteOrd = skryteOrd[randomIdx];
        if (!skryteListe.includes(etSkryteOrd)) {
            skryteListe.push(etSkryteOrd);
        }
    }
    skryeTekst = navn + ", du er ";
    for (let i = 0; i < skryteListe.length - 1; i++) {
        skryeTekst += skryteListe[i] + ", ";
    }
    skryeTekst += " og " + skryteListe[skryteListe.length - 1] + "!";
    skrytOutput.innerText = skryeTekst;
}