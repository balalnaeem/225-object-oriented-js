function createInvoice(obj) {
  phone = obj ? obj['phone'] || 3000 : 3000;
  internet = obj ? obj['internet'] || 5500 : 5500;

  return {
    payments: [],
    phone: phone,
    internet: internet,
    addPayment: function(payment) {
      this.payments.push(payment);
    },

    addPayments: function(payments) {
      payments.forEach(payment => this.payments.push(payment));
    },

    total: function() {
      return this.phone + this.internet;
    },

    amountDue: function() {
      let totalPayment = 0;
      this.payments.forEach(payment => totalPayment += payment.total());
      return this.total() - totalPayment;
    },
  };
}

function invoiceTotal(invoices) {
  var total = 0;
  var i;

  for (i = 0; i < invoices.length; i += 1) {
    total += invoices[i].total();
  }

  return total;
}

function createPayment(obj) {
  obj = obj || {};

  return {
    phone: obj.phone || 0,
    internet: obj.internet || 0,
    amount: obj.amount,

    total: function() {
      if (this.amount) return this.amount;
      return this.phone + this.internet
    }
  };
}

function paymentTotal(payments) {
  var total = 0;
  var i;

  for (i = 0; i < payments.length; i += 1) {
    total += payments[i].total();
  }

  return total;
}

var invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

var payment1 = createPayment({
  amount: 2000,
});

var payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

var payment3 = createPayment({
  phone: 1000,
});

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());