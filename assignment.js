


/*

1.Kilometer To Meter

*/
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000  //1kilometer = 1000 meter
    return meter
}


var result = kilometerToMeter(50);
console.log(result);


/*

/2.Budget Calculator

*/
function budgetCalculator(watch, mobile, laptop) {
    var watchPrice = 50 * watch;
    var mobilePrice = 100 * mobile;
    var laptopPrice = 500 * laptop;
    var totalPrice = watchPrice + mobilePrice + laptopPrice;
    return totalPrice;
  }
  

  var myBudget = budgetCalculator(4, 3, 2);
  console.log(myBudget);
  
  
  
  /*

3.Hotel Cost

  */
  function hotelCost(day) {
    if (day <= 10) {
      totalCost = day * 100;
    } else if (day <= 20) {
      var tenDays = 10 * 100;
      var remaining = day - 10;
      var secondTenDays = remaining * 80;
      totalCost = tenDays + secondTenDays;
    } else {
      var tenDays = 10 * 100;
      var secondTenDays = 10 * 80;
      var remaining = day - 20;
      var restDay = remaining * 50;
      totalCost = tenDays + secondTenDays + restDay;
    }
    return totalCost;
  }
  
  
  var myHotelCost = hotelCost(30);
  console.log(myHotelCost);

  
  /*

4.Mega Friend

  */
  function megaFriend(friendName) {
    var longestName = "";
    for (var i = 0; i < friendName.length; i++) {
      if (friendName[i].length > longestName.length) {
        longestName = friendName[i];
      }
    }
    return longestName;
  }
  
  
  var longerName = megaFriend(["Shiam", "Shaba Shiam", "Nasim Us-Shaba", "Nasim Us-Shaba Shiam"]);
  console.log(longerName);
  