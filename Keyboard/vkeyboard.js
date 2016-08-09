$(document).ready(function(){

function onShift(e) {
  var i;

  if(e===1) {
    for(i = 0; i < 4; i++){
      var rowId = "#row" + i;
      $(rowId).hide();
      $(rowId + "_shift").show();
    
    }
  }else {
    for(i = 0; i < 4; i++) {
      var rowId = "#row" + i;
      $(rowId).hide();
      $(rowId + "_shift").show();
    }
  }
}
});