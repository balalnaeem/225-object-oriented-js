let invoices = {
  unpaid: [],
  paid: [],

  add: function(name, amount) {
    let tempInvoice = {};
    tempInvoice.name = name;
    tempInvoice.amount = amount;
    this.unpaid.push(tempInvoice);
  },

  totalDue: function() {
    let total = 0;
    this.unpaid.forEach(invoice => {
      total += invoice.amount;
    });

    return total;
  },

  payInvoice: function(name) {
    let newUnpaid = [];
    this.unpaid.forEach(invoice => {
      if(name === invoice.name) {
        this.paid.push(invoice);
      } else {
        newUnpaid.push(invoice);
      }
    });

    this.unpaid = newUnpaid;
  },

  totalPaid: function() {
    let total = 0;
    this.paid.forEach(invoice => {
      total += invoice.amount;
    });

    return total;
  }
};

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);


invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');

console.log(invoices.totalPaid());
console.log(invoices.totalDue());






