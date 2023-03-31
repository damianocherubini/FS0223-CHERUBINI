// Funzione per calcolare il totale dei prodotti
function calculateTotal() {
  // Prendiamo i valori dei campi "quantità"
  var quantity1 = Number(document.getElementById('quantity1').value);
  var quantity2 = Number(document.getElementById('quantity2').value);

  // Prendiamo i prezzi dei prodotti
  var price1 = 50;
  var price2 = 80;

  // Calcoliamo il totale
  var total = (quantity1 * price1) + (quantity2 * price2);

  // Aggiorniamo il prezzo totale nella pagina
  document.getElementById('total-price').innerHTML = total + ' €';
}

// Funzione per generare il PDF
function generatePDF() {
  // Prendiamo il contenuto HTML della pagina
  var content = document.documentElement.outerHTML;

  // Creiamo un oggetto Blob dal contenuto HTML
  var blob = new Blob([content], {type: 'application/pdf'});

  // Creiamo l'URL del file PDF
  var url = URL.createObjectURL(blob);

  // Creiamo un link per scaricare il PDF
  var link = document.createElement('a');
  link.href = url;
  link.download = 'preventivo.pdf';
  document.body.appendChild(link);

  // Clicchiamo il link per scaricare il PDF
  link.click();

  // Rimuoviamo il link
  document.body.removeChild(link);
}

// Aggiungiamo gli eventi al form e al bottone "Genera PDF"
document.getElementById('quote-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Preveniamo l'invio del form
  calculateTotal(); // Calcoliamo il totale
});

document.getElementById('genera-pdf-btn').addEventListener('click', function(event) {
  generatePDF(); // Generiamo il PDF
});