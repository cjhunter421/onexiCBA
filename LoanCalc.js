
//inputs
var principle = 20000;
var rate = .05;
var term = 15;
var startDate = 1/1/2019;
var extraPayment = 0;

//outputs
var scheduledPayment;
var payments = [];
var paymentDates = [];
var numScheduledPayments = term*12;
var numActualPayments;
var interest;
