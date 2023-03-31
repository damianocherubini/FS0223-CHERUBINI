function generatePDF() {
  // Ottieni i dati dal form
  const nome = document.querySelector('#nome').value;
  const cognome = document.querySelector('#cognome').value;
  const email = document.querySelector('#email').value;
  const prodotti = [
    { nome: 'Prodotto 1', prezzo: 10, quantita: parseInt(document.querySelector('#prod-1-quantita').value) },
    { nome: 'Prodotto 2', prezzo: 20, quantita: parseInt(document.querySelector('#prod-2-quantita').value) },
    // Aggiungere qui altre voci del preventivo
  ];

  // Calcola il totale del preventivo
  let totale = 0;
  prodotti.forEach(prodotto => {
    totale += prodotto.prezzo * prodotto.quantita;
  });

  // Crea il contenuto del PDF
  const contenutoPDF = `
    <h1>Preventivo</h1>
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Cognome:</strong> ${cognome}</p>
    <p><strong>Email:</strong> ${email}</p>
    <table>
      <thead>
        <tr>
          <th>Prodotto</th>
          <th>Quantità</th>
          <th>Prezzo unitario</th>
          <th>Prezzo totale</th>
        </tr>
      </thead>
      <tbody>
        ${prodotti.map(prodotto => `
          <tr>
            <td>${prodotto.nome}</td>
            <td>${prodotto.quantita}</td>
            <td>${prodotto.prezzo.toFixed(2)} €</td>
            <td>${(prodotto.prezzo * prodotto.quantita).toFixed(2)} €</td>
          </tr>
        `).join('')}
        <tr>
          <td colspan="3"><strong>Totale</strong></td>
          <td><strong>${totale.toFixed(2)} €</strong></td>
        </tr>
      </tbody>
    </table>
  `;

  // Crea un nuovo elemento div per il contenuto del PDF
  const pdfContenutoDiv = document.createElement('div');
  pdfContenutoDiv.innerHTML = contenutoPDF;

  // Crea il PDF con il contenuto
  const pdf = new jsPDF();
  pdf.html(pdfContenutoDiv, {
    callback: function (pdf) {
      pdf.save('preventivo.pdf');
    }
  });
}

// Seleziona il pulsante "Genera PDF"
const generaPDFBtn = document.querySelector('#genera-pdf-btn');

// Aggiunge un ascoltatore per l'evento di click
generaPDFBtn.addEventListener('click', generatePDF);