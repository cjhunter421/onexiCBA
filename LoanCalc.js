
//inputs
var principle = 20000;
var rate = .05;
var nper = 15;
var paymentsPerYear = 12;
var startDate = 1/1/2019;
var extraPayment = 0;

//outputs
var scheduledPayment;
var payments = [];
var paymentDates = [];
var numScheduledPayments = nper*paymentsPerYear;
var adjustedNumPayments;
var interest;

function pmt(rate,nper,pv) {
  var pvif;
  var pmt;

  pvif = Math.pow(1+rate,nper);
  pmt = rate/(pvif-1) * -(pv*pvif);

  return pmt;
};

function paymentSchedule(principle,rate,paymentsPerYear,nper,pmt) {

  var i = 0;
  var schedule = [];
  var balance = principle;
  var numPayments = numScheduledPayments;
    for (i=0;i<=numPayments; i++) {
      var interestPayment = balance*(rate/100/paymentsPerYear);
      var principlePayment = (pmt-interestPayment);
      balance -= principlePayment;
      var periodSummary = [i, principlePayment>0?(principlePayment<pmt?principlePayment:pmt):0, interestPayment>0?interestPayment:0, balance>0?balance:0]
      schedule.push(periodSummary);
    }
    return schedule;



};
