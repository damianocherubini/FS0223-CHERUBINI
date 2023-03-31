function generatePDF() {
    // Creazione di un nuovo documento PDF
    var doc = new jsPDF();
  
    // Aggiunta di un'intestazione
    doc.setFontSize(20);
    doc.text("Preventivo", 10, 20);
  
    // Aggiunta dei dati del modulo al documento PDF
    doc.setFontSize(12);
    doc.text("Nome: " + document.getElementById("name").value, 10, 40);
    doc.text("Email: " + document.getElementById("email").value, 10, 50);
    doc.text("Telefono: " + document.getElementById("phone").value, 10, 60);
  
    // Aggiunta dei dati del prodotto al documento PDF
    var startY = 80;
    for (var i = 1; i <= 20; i++) {
      var product = document.getElementById("product" + i).value;
      var quantity = document.getElementById("quantity" + i).value;
      var price = document.getElementById("price" + i).value;
      var subtotal = quantity * price;
      doc.text("Prodotto " + i + ": " + product, 10, startY + 10 * (i - 1));
      doc.text("Quantità: " + quantity, 70, startY + 10 * (i - 1));
      doc.text("Prezzo: " + price + "€", 100, startY + 10 * (i - 1));
      doc.text("Subtotale: " + subtotal + "€", 130, startY + 10 * (i - 1));
    }
  
    // Aggiunta del totale al documento PDF
    var total = document.getElementById("total").innerText;
    doc.text("Totale: " + total + "€", 10, startY + 10 * 20);
  
    // Salvataggio del documento PDF
    doc.save("preventivo.pdf");
  }