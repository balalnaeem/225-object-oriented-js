function createInvoice(services) {
  services = services || {};
  let invoice = {};
  invoice.phone = services['phone'] || 3000;
  invoice.internet = services['internet'] || 5500;
  invoice.payments = [];

  invoice.total = function() {
    return this.phone + this.internet;
  };

  invoice.addPayment = function(payment) {
    this.payments.push(payment);
  };

  invoice.addPayments = function(payments) {
    payments.forEach(payment => {
      this.payments.push(payment);
    });
  };

  invoice.paymentTotal = function() {
    let totalPaid = 0;
    this.payments.forEach(payment => {
      totalPaid += payment.total();
    });

    return totalPaid;
  };

  invoice.amountDue = function() {
    return this.total() - this.paymentTotal();
  }

  return invoice;
}

function invoiceTotal(invoices) {
  var total = 0;
  var i;

  for (i = 0; i < invoices.length; i += 1) {
    total += invoices[i].total();
  }

  return total;
}

var invoices = [];

invoices.push(createInvoice());
invoices.push(createInvoice({
  internet: 6500,
}));

invoices.push(createInvoice({
  phone: 2000,
}));

invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));

console.log(invoiceTotal(invoices));


function createPayment(services) {
  services = services || {};

  let payment = {};
  payment.phone = services['phone'] || 0;
  payment.internet = services['internet'] || 0;
  payment.amount = services['amount'];
  payment.total = function() {
    return this.amount || (this.phone + this.internet);
  }

  return payment;
}

function paymentTotal(payments) {
  var total = 0;
  var i;

  for (i = 0; i < payments.length; i += 1) {
    total += payments[i].total();
  }

  return total;
}

var payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments));      // => 24000





























