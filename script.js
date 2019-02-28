function random() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (var i = 0; i < 5; i++)
    {text += possible.charAt(Math.floor(Math.random() * possible.length));
    Math.random().toString(36).substr(2, 5);
  return text;
}
}

function otherrandom() {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < 5; i++)
    {text += possible.charAt(Math.floor(Math.random() * possible.length));
    Math.random().toString(36).substr(2, 5);
  return text;
}
}

function otherotherrandom() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (var i = 0; i < 5; i++)
    {text += possible.charAt(Math.floor(Math.random() * possible.length));
    Math.random().toString(36).substr(2, 5);
  return text;
}
}

$("button").click(function() {
    
    $(".wave1").hide(function() {
    $(".wave2").show(function() {
    $(".wave2").delay(2000).hide(function() {
    $(".wave3").show();
    
    var thename = $(".name").val();
    $(".thename").append(thename);
    
    var thegender = $(".gender").val();
    $(".thegender").append(thegender);
    
    var theid=$(".number").val();
    console.log(parseInt(theid));
    
    var theid= theid * 142;
    $(".theid").append(theid);
    
    var therealm = $(".side").val();
    $(".therealm").append(therealm);
    
    $(".themodel").append(random);
    $(".thename").append(otherrandom);
    $(".theid").append(otherotherrandom);
    
    });
    });
    });
});

//Yeaa... Nevermind about being extra this time. Wait until next project.
