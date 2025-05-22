<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Suivi Fitness Basic Fit</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');

  /* Animation emoji */
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
  }

  body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
    color: #eee;
    padding: 20px;
    max-width: 900px;
    margin: auto;
    box-shadow: 0 0 15px rgba(0,0,0,0.7);
    border-radius: 12px;
  }

  h1, h2 {
    color: #00ff99;
    font-family: 'Orbitron', sans-serif;
    text-align: center;
    text-shadow: 0 0 10px #00ff99;
    margin-bottom: 20px;
  }

  label {
    font-weight: bold;
    display: block;
    margin-bottom: 6px;
    color: #b0f4d3;
  }

  select, input[type=number], input[type=time], input[type=checkbox] {
    padding: 8px;
    width: 100%;
    margin-bottom: 15px;
    box-sizing: border-box;
    border-radius: 6px;
    border: none;
    font-size: 1em;
    outline-offset: 2px;
    outline-color: #00ff99;
    background-color: #112f3e;
    color: #c0f4d8;
    transition: background-color 0.3s, box-shadow 0.3s;
  }

  select:hover, input[type=number]:hover, input[type=time]:hover {
    background-color: #1a485d;
    box-shadow: 0 0 8px #00ff99;
  }

  input[type=checkbox] {
    width: auto;
    transform: scale(1.3);
    margin-left: 5px;
    cursor: pointer;
  }

  .input-group {
    margin-bottom: 18px;
  }

  .exercice-row {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    background: #144055;
    padding: 10px 12px;
    border-radius: 8px;
    box-shadow: inset 0 0 8px #00ff99;
    color: #a7f0c4;
  }

  .exercice-desc {
    flex: 3;
    font-weight: 600;
  }

  .exercice-poids {
    flex: 1;
    margin-left: 15px;
    background-color: #0a2533;
    border-radius: 6px;
    color: #b0f4d3;
  }

  button {
    padding: 12px 25px;
    margin-right: 12px;
    cursor: pointer;
    border:none;
    background: #00ff99;
    color: #004d26;
    font-weight: bold;
    border-radius: 8px;
    font-family: 'Orbitron', sans-serif;
    font-size: 1.1em;
    box-shadow: 0 0 15px #00ff99;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }

  button:hover {
    background: #00cc78;
    transform: scale(1.05);
  }

  button[style] {
    background: #555 !important;
    color: #ddd !important;
    box-shadow: none !important;
  }

  button[style]:hover {
    background: #333 !important;
  }

  .history-entry {
    background: #0e384f;
    padding: 15px 20px;
    margin-bottom: 14px;
    border-radius: 10px;
    border-left: 6px solid #00ff99;
    color: #b0f4d3;
    box-shadow: 0 0 12px #00885088;
    position: relative;
  }

  .history-entry strong {
    color: #00ff99;
  }

  .green {
    color: #00ff99;
    font-weight: bold;
  }

  .red {
    color: #ff4c4c;
    font-weight: bold;
  }

  .button-small {
    font-size: 0.9em;
    padding: 6px 12px;
    margin-top: 10px;
    margin-right: 8px;
    border-radius: 6px;
    font-weight: 600;
    box-shadow: 0 0 8px #00ff99aa;
  }

  .flex-row {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }

  .flex-col {
    flex: 1;
    min-width: 150px;
  }

  /* Emoji sportif animé dans le titre */
  .title-emoji {
    display: inline-block;
    animation: bounce 2s infinite ease-in-out;
    font-size: 2.2em;
    margin-left: 10px;
    user-select: none;
  }

  /* Scrollbar custom */
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #0f2027;
  }
  ::-webkit-scrollbar-thumb {
    background: #00ff99;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #00cc78;
  }

  /* Responsive */
  @media (max-width: 600px) {
    .exercice-row {
      flex-direction: column;
      align-items: flex-start;
    }
    .exercice-poids {
      margin-left: 0;
      margin-top: 8px;
      width: 100%;
    }
    .flex-row {
      flex-direction: column;
    }
  }
</style>
</head>
<body>
    <!-- PWA manifest -->
<link rel="manifest" href="manifest.json" />
<meta name="theme-color" content="#0f2027" />
<script>
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register('service-worker.js').then(function(registration) {
          console.log('Service Worker enregistré avec succès:', registration.scope);
        }).catch(function(error) {
          console.log('Échec de l’enregistrement du Service Worker:', error);
        });
      });
    }
  </script>

<h1>
  Suivi Fitness - Basic Fit
  <span class="title-emoji" role="img" aria-label="dumbbell">🏋️‍♂️</span>
  <span class="title-emoji" style="animation-delay: 0.5s;" role="img" aria-label="fire">🔥</span>
  <span class="title-emoji" style="animation-delay: 1s;" role="img" aria-label="muscle">💪</span>
</h1>

<div class="input-group">
  <label for="seance">Choisir la séance</label>
  <select id="seance" onchange="afficherExercices()">
    <option value="">-- Sélectionner --</option>
    <option value="jour1">Jour 1 : Bras & Épaules</option>
    <option value="jour2">Jour 2 : Abdos & Dos</option>
    <option value="jour3">Jour 3 : Jambes & Fessiers</option>
  </select>
</div>

<div id="exercices-container"></div>

<div class="input-group">
  <label for="poids">Poids corporel (kg)</label>
  <input type="number" id="poids" placeholder="Ex : 79.1" step="0.1" />
</div>

<div class="input-group">
  <label for="calories">Calories consommées (kcal)</label>
  <input type="number" id="calories" placeholder="1300" />
</div>

<div class="input-group">
  <label for="proteines">Protéines consommées (g)</label>
  <input type="number" id="proteines" placeholder="0" />
</div>

<div class="input-group">
  <label for="eau">Eau bue (L)</label>
  <input type="number" id="eau" placeholder="2.5" step="0.1" />
</div>

<div class="input-group" style="display:flex; align-items:center;">
  <label for="creatine" style="margin: 0;">Créatine prise</label>
  <input type="checkbox" id="creatine" />
</div>

<div class="flex-row">
  <div class="input-group flex-col">
    <label for="sommeil-debut">Heure de coucher</label>
    <input type="time" id="sommeil-debut" />
  </div>
  <div class="input-group flex-col">
    <label for="sommeil-fin">Heure de réveil</label>
    <input type="time" id="sommeil-fin" />
  </div>
</div>

<button onclick="enregistrerDonnees()">Enregistrer la séance</button>
<button onclick="reinitialiserFormulaire()" style="background:#6c757d;">Réinitialiser</button>

<h2>
  Historique des séances
  <span class="title-emoji" role="img" aria-label="clipboard">📋</span>
</h2>
<div id="historique"></div>

<script>
  // Ton script reste identique
  const seances = {
    jour1: [
      { nom: "Développé épaules (haltères ou machine)", series: "4x10-12" },
      { nom: "Élévations latérales (haltères)", series: "3x12-15" },
      { nom: "Curl biceps (barre ou haltères)", series: "4x10-12" },
      { nom: "Extension triceps à la poulie haute", series: "4x10-12" },
      { nom: "Curl marteau (haltères)", series: "3x12" },
      { nom: "Oiseau (reverse fly)", series: "3x12-15" },
      { nom: "Gainage (planche)", series: "3x30-45 sec", sansPoids:true }
    ],
    jour2: [
      { nom: "Tractions assistées ou tirage vertical à la poulie", series: "4x8-12" },
      { nom: "Rowing assis à la poulie ou machine", series: "4x10-12" },
      { nom: "Soulevé de terre jambes tendues (léger)", series: "3x10-12" },
      { nom: "Crunchs au sol ou sur machine", series: "3x15-20", sansPoids:true },
      { nom: "Relevé de jambes suspendu ou au sol", series: "3x12-15", sansPoids:true },
      { nom: "Superman (dos au sol)", series: "3x15-20 sec", sansPoids:true },
      { nom: "Gainage latéral", series: "3x30 sec chaque côté", sansPoids:true }
    ],
    jour3: [
      { nom: "Presse à cuisses", series: "4x10-12" },
      { nom: "Squat (libre ou guidé)", series: "4x8-12" },
      { nom: "Fentes avant (avec ou sans haltères)", series: "3x12 chaque jambe" },
      { nom: "Leg curl (ischios)", series: "3x10-12" },
      { nom: "Extensions de jambes (quadriceps)", series: "3x12-15" },
      { nom: "Hip Thrust ou pont fessier au sol", series: "3x12-15" },
      { nom: "Mollets debout (machine ou haltères)", series: "4x15-20" },
      { nom: "Gainage planche", series: "3x45 sec", sansPoids:true }
    ]
  };

  let historique = JSON.parse(localStorage.getItem("historique") || "[]");
  let indexAModifier = null;

  function afficherExercices() {
    const selectSeance = document.getElementById("seance");
    const container = document.getElementById("exercices-container");
    container.innerHTML = "";

    const seanceChoisie = selectSeance.value;
    if (!seanceChoisie || !seances[seanceChoisie]) return;

    seances[seanceChoisie].forEach((ex, i) => {
      const div = document.createElement("div");
      div.className = "exercice-row";

      const desc = document.createElement("div");
      desc.className = "exercice-desc";
      desc.textContent = `${ex.nom} (${ex.series})`;

      const inputPoids = document.createElement("input");
      inputPoids.type = "number";
      inputPoids.min = "0";
      inputPoids.step = "0.1";
      inputPoids.className = "exercice-poids";
      inputPoids.placeholder = ex.sansPoids ? "Pas de poids" : "Poids (kg)";
      inputPoids.disabled = !!ex.sansPoids;
      inputPoids.dataset.index = i;

      div.appendChild(desc);
      div.appendChild(inputPoids);
      container.appendChild(div);
    });
  }

  function reinitialiserFormulaire() {
    document.getElementById("seance").value = "";
    document.getElementById("exercices-container").innerHTML = "";
    document.getElementById("poids").value = "";
    document.getElementById("calories").value = "";
    document.getElementById("proteines").value = "";
    document.getElementById("eau").value = "";
    document.getElementById("creatine").checked = false;
    document.getElementById("sommeil-debut").value = "";
    document.getElementById("sommeil-fin").value = "";
    indexAModifier = null;
  }

  function afficherHistorique() {
    const div = document.getElementById("historique");
    div.innerHTML = "";

    if (historique.length === 0) {
      div.innerHTML = "<p style='text-align:center; color:#00ff99;'>Aucune séance enregistrée.</p>";
      return;
    }

    historique.forEach((item, idx) => {
      const entry = document.createElement("div");
      entry.className = "history-entry";

      const date = new Date(item.date);
      const dateString = date.toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });

      // Calcul perte/gain de poids
      let deltaPoids = "";
      if (idx < historique.length - 1) {
        const diff = historique[idx + 1].poids - item.poids;
        if (diff < 0) {
          deltaPoids = `<span class="red">↑ ${Math.abs(diff).toFixed(1)} kg</span>`;
        } else if (diff > 0) {
          deltaPoids = `<span class="green">↓ ${diff.toFixed(1)} kg</span>`;
        }
      }

      let creatineText = item.creatine ? "✅ Oui" : "❌ Non";

      // Exercices avec poids
      let exosText = "";
      if (item.exercices && item.exercices.length > 0) {
        exosText = "<ul style='margin: 0; padding-left: 20px;'>";
        item.exercices.forEach((ex) => {
          exosText += `<li>${ex.nom} - Poids: ${ex.poids ?? "N/A"} kg</li>`;
        });
        exosText += "</ul>";
      }

      entry.innerHTML = `
        <strong>${dateString}</strong> - Séance: <em>${item.seance}</em><br>
        Poids: ${item.poids} kg ${deltaPoids} <br>
        Calories: ${item.calories} kcal, Protéines: ${item.proteines} g, Eau: ${item.eau} L<br>
        Créatine: ${creatineText}<br>
        Sommeil: ${item.sommeilDebut || '-'} → ${item.sommeilFin || '-'}<br>
        Exercices: ${exosText}
        <br>
        <button class="button-small" onclick="modifierSeance(${idx})">Modifier</button>
        <button class="button-small" onclick="supprimerSeance(${idx})" style="background:#ff4444; color:#fff;">Supprimer</button>
      `;

      div.appendChild(entry);
    });
  }

  function enregistrerDonnees() {
    const seance = document.getElementById("seance").value;
    if (!seance) {
      alert("Veuillez sélectionner une séance.");
      return;
    }
    const poids = parseFloat(document.getElementById("poids").value);
    const calories = parseInt(document.getElementById("calories").value);
    const proteines = parseInt(document.getElementById("proteines").value);
    const eau = parseFloat(document.getElementById("eau").value);
    const creatine = document.getElementById("creatine").checked;
    const sommeilDebut = document.getElementById("sommeil-debut").value;
    const sommeilFin = document.getElementById("sommeil-fin").value;

    if (isNaN(poids) || isNaN(calories) || isNaN(proteines) || isNaN(eau)) {
      alert("Veuillez remplir tous les champs numériques correctement.");
      return;
    }

    // Récupérer poids exercices
    const inputsPoids = document.querySelectorAll("#exercices-container input.exercice-poids");
    let exercicesData = [];
    let validPoids = true;

    inputsPoids.forEach((input, i) => {
      if (!input.disabled) {
        const val = parseFloat(input.value);
        if (isNaN(val)) {
          validPoids = false;
        }
        exercicesData.push({
          nom: seances[seance][i].nom,
          poids: val || 0,
        });
      } else {
        exercicesData.push({
          nom: seances[seance][i].nom,
          poids: null,
        });
      }
    });

    if (!validPoids) {
      alert("Veuillez entrer un poids valide pour tous les exercices.");
      return;
    }

    const data = {
      date: new Date().toISOString(),
      seance,
      poids,
      calories,
      proteines,
      eau,
      creatine,
      sommeilDebut,
      sommeilFin,
      exercices: exercicesData,
    };

    if (indexAModifier !== null) {
      historique[indexAModifier] = data;
      indexAModifier = null;
      alert("Séance modifiée avec succès !");
    } else {
      historique.unshift(data);
      alert("Séance enregistrée !");
    }

    localStorage.setItem("historique", JSON.stringify(historique));
    reinitialiserFormulaire();
    afficherHistorique();
  }

  function modifierSeance(idx) {
    const item = historique[idx];
    indexAModifier = idx;

    document.getElementById("seance").value = item.seance;
    afficherExercices();

    document.getElementById("poids").value = item.poids;
    document.getElementById("calories").value = item.calories;
    document.getElementById("proteines").value = item.proteines;
    document.getElementById("eau").value = item.eau;
    document.getElementById("creatine").checked = item.creatine;
    document.getElementById("sommeil-debut").value = item.sommeilDebut;
    document.getElementById("sommeil-fin").value = item.sommeilFin;

    const inputsPoids = document.querySelectorAll("#exercices-container input.exercice-poids");
    item.exercices.forEach((ex, i) => {
      if (inputsPoids[i] && !inputsPoids[i].disabled) {
        inputsPoids[i].value = ex.poids ?? "";
      }
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function supprimerSeance(idx) {
    if (confirm("Voulez-vous vraiment supprimer cette séance ?")) {
      historique.splice(idx, 1);
      localStorage.setItem("historique", JSON.stringify(historique));
      afficherHistorique();
    }
  }

  // Initialisation
  afficherHistorique();
</script>
<!-- Ajout du graphique -->
<canvas id="graphiquePoids" style="max-width:100%; margin-top: 30px;"></canvas>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
  function dessinerGraphique() {
    const ctx = document.getElementById('graphiquePoids').getContext('2d');
    if (!ctx) return;

    const labels = historique.map(item => {
      const d = new Date(item.date);
      return d.toLocaleDateString('fr-FR');
    }).reverse();

    const dataPoids = historique.map(item => item.poids).reverse();

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Poids corporel (kg)',
          data: dataPoids,
          borderColor: '#00ff99',
          backgroundColor: 'rgba(0, 255, 153, 0.2)',
          fill: true,
          tension: 0.3,
          pointRadius: 5,
          pointHoverRadius: 7,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { labels: { color: '#00ff99' } }
        },
        scales: {
          x: {
            ticks: { color: '#00ff99' },
            grid: { color: '#004d26' }
          },
          y: {
            beginAtZero: false,
            ticks: { color: '#00ff99' },
            grid: { color: '#004d26' }
          }
        }
      }
    });
  }

  dessinerGraphique();
</script>

</body>
</html>
