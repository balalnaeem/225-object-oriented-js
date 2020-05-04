let invoices = {
  unpaid: [],
  paid: [],
  add: function(name, amount) {
    let newInvoice = {};
    newInvoice.name = name;
    newInvoice.amount = amount;
    this.unpaid.push(newInvoice);
  },

  totalDue: function() {
    let total = 0;
    this.unpaid.forEach(invoice => {
      total += invoice.amount;
    });

    return total;
  },

  totalPaid: function() {
    let total = 0;
    this.paid.forEach(invoice => {
      total += invoice.amount;
    });

    return total;
  },

  payInvoice: function(client) {
    let newUnpaid = [];
    this.unpaid.forEach(invoice => {
      if (invoice.name === client) {
        this.paid.push(invoice);
      } else {
        newUnpaid.push(invoice);
      }
    });
    this.unpaid = newUnpaid;
  },
};

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);
invoices.payInvoice('Slough Digital');
invoices.payInvoice('Due North Development');

console.log(invoices.totalDue());
console.log(invoices.totalPaid());