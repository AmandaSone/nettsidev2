// /c:/Irish_Travels/javascript/ssp.js
// Enkel stein-saks-papir i nettleser. Norsk tekst.

(function () {
    const choices = ["stein", "saks", "papir"];
    const emoji = { stein: "✊", saks: "✌️", papir: "✋" };
    const beats = { stein: "saks", saks: "papir", papir: "stein" };
    let score = { spiller: 0, maskin: 0, uavgjort: 0 };

    // Lag UI
    const style = document.createElement("style");
    style.textContent = `
        .ssp { font-family: Arial, Helvetica, sans-serif; max-width:420px; margin:20px auto; padding:14px; border:1px solid #ddd; border-radius:8px; text-align:center; }
        .btns { display:flex; justify-content:space-around; margin:12px 0; }
        button.choice { font-size:20px; padding:10px 16px; cursor:pointer; border-radius:6px; border:1px solid #ccc; background:#f7f7f7; }
        .result { margin-top:12px; font-weight:600; min-height:28px; }
        .score { margin-top:8px; font-size:14px; color:#333; }
        .choices { margin-top:8px; color:#555; }
        button.reset { margin-top:12px; padding:6px 10px; cursor:pointer; }
    `;
    document.head.appendChild(style);

    const root = document.createElement("div");
    root.className = "ssp";
    root.innerHTML = `
        <h3>Stein · Saks · Papir</h3>
        <div class="btns"></div>
        <div class="result" aria-live="polite"></div>
        <div class="choices"></div>
        <div class="score"></div>
        <button class="reset">Nullstill</button>
    `;
    document.body.appendChild(root);

    const btns = root.querySelector(".btns");
    const resultEl = root.querySelector(".result");
    const choicesEl = root.querySelector(".choices");
    const scoreEl = root.querySelector(".score");
    const resetBtn = root.querySelector(".reset");

    // Lag knappene
    choices.forEach((c) => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "choice";
        b.dataset.choice = c;
        b.title = c;
        b.innerHTML = `${emoji[c]}<div style="font-size:12px">${c}</div>`;
        b.addEventListener("click", () => playRound(c));
        btns.appendChild(b);
    });

    function randomChoice() {
        return choices[Math.floor(Math.random() * choices.length)];
    }

    function playRound(spillerValg) {
        const maskinValg = randomChoice();
        let tekst;
        if (spillerValg === maskinValg) {
            tekst = "Uavgjort!";
            score.uavgjort++;
        } else if (beats[spillerValg] === maskinValg) {
            tekst = "Du vant!";
            score.spiller++;
        } else {
            tekst = "Maskinen vant!";
            score.maskin++;
        }
        updateUI(spillerValg, maskinValg, tekst);
    }

    function updateUI(spVal, mVal, tekst) {
        resultEl.textContent = tekst;
        choicesEl.textContent = `Du: ${emoji[spVal]} ${spVal} — Maskin: ${emoji[mVal]} ${mVal}`;
        scoreEl.textContent = `Poeng — Du: ${score.spiller}  ·  Maskin: ${score.maskin}  ·  Uavgjort: ${score.uavgjort}`;
        flash(resultEl);
    }

    function flash(el) {
        el.style.opacity = "0.3";
        setTimeout(() => (el.style.opacity = "1"), 120);
    }

    resetBtn.addEventListener("click", () => {
        score = { spiller: 0, maskin: 0, uavgjort: 0 };
        resultEl.textContent = "Spill igjen!";
        choicesEl.textContent = "";
        scoreEl.textContent = "";
    });

    // Starttekst
    resultEl.textContent = "Trykk på Stein, Saks eller Papir for å spille.";
})();