const invoices = {
  unpaid: [],
  paid: [],
};

invoices.add = function(name, amount) {
  let invoice = {};
  invoice.name = name;
  invoice.amount = amount;
  this.unpaid.push(invoice);
};

invoices.totalDue = function() {
  let total = 0;
  this.unpaid.forEach(invoice => total += invoice.amount);
  return total;
};

invoices.payInvoice = function(name) {
  let newUnpaid = [];
  this.unpaid.forEach(invoice => {
    if (invoice.name === name) {
      this.paid.push(invoice);
    } else {
      newUnpaid.push(invoice);
    }

  this.unpaid = newUnpaid;
  });
};

invoices.totalPaid = function() {
  let total = 0;
  this.paid.forEach(invoice => total += invoice.amount);
  return total;
};

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);

invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');

console.log(invoices.totalPaid());
console.log(invoices.totalDue());


















