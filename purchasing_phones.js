/* this program calculates how many phones you can buy
after tax, you can enter an initial @bank_balance*/
const TAX_RATE = 0.08;
const ACCESSORY_PRICE = 9.99;
const PHONE_PRICE = 99.99;
const PURCHASE_AMOUNT = PHONE_PRICE + ACCESSORY_PRICE;

var bank_balance = prompt("Enter an amount of money");
//so that the last purchase accounts for the @TAX_RATE to not exceed available
//@bank_balance
var spending_threshold = (bank_balance / (1+TAX_RATE)) - PURCHASE_AMOUNT;

//to keep track of total price
var total_price = 0;

//keep track of phones purchased
var phones_purhcased = 0;


while (total_price < spending_threshold){
    total_price += PURCHASE_AMOUNT;
    phones_purhcased++;
}
var total_price_after_tax = calculateTax(total_price);
var bank_balance_after_purchase = calculateBankBalance(total_price_after_tax);
logPurchase(total_price_after_tax,phones_purhcased, bank_balance_after_purchase);


function calculateBankBalance(price){
  var  money_left= bank_balance - price;
  return money_left.toFixed(2);
}

function calculateTax(price){
  var tax = price * TAX_RATE;
  var money_after_tax = price + tax;
  return money_after_tax.toFixed(2);
}

function logPurchase(money_spent, phones_purhcased, Moneyinthebank){
  console.log("you bought " + phones_purhcased + " phones");
  console.log("you spent " + money_spent + " you have " + Moneyinthebank + "left in your account");
}
