"use strict";

function validName1(fwe) {
    var errCount = 0;
    var name1Field = document.forms.form1.name1;
    var name1Value = name1Field.value;
    var name1Err = document.querySelector('.name1-err');
    if (name1Value == "") {
      name1Err.innerHTML = "Заполните поле";
      errCount++;
    } else {
      name1Err.innerHTML = "";
    }
  
    if (errCount && fwe) {
      name1Field.focus();
    }
    return errCount;
  }
  
  function validLastname(fwe) {
    var errCount = 0;
    var lastnameField = document.forms.form1.lastname;
    var lastnameValue = lastnameField.value;
    var lastnameErr = document.querySelector('.lastname-err');
  
    if (lastnameValue == "") {
      lastnameErr.innerHTML = "Заполните поле";
      errCount++;
    } else {
      lastnameErr.innerHTML = "";
    }
  
    if (errCount && fwe) {
      lastnameField.focus();
    }
    return errCount;
  }
  
  function validNation(fwe) {
    var errCount = 0;
    var nationField = document.forms.form1.nation;
    var nationValue = nationField.value;
    var nationErr = document.querySelector('.nation-err');
  
    if (nationValue == "") {
        nationErr.innerHTML = "Заполните поле";
      errCount++;
    } else {
        nationErr.innerHTML = "";
    }
  
    if (errCount && fwe) {
        nationField.focus();
    }
    return errCount;
  }
  
  function validMail(fwe) {
    var errCount = 0;
    var mailField = document.forms.form1.mail;
    var mailValue = mailField.value;
    var mailErr = document.querySelector('.mail-err');
    var mailInput = document.querySelector ('.err_input');
    var borderRed = mailInput.style.borderBottomColor='red';
    var borderWidth= mailInput.style.borderBottomWidth='2px';
    var inputColor = mailInput.style.color = "red";

    if ((mailValue == "") ||( !mailValue.includes('@'))) {
      mailErr.innerHTML = "Заполните поле";
      mailInput=borderRed;
      mailInput=borderWidth;
      mailInput=inputColor;
      errCount++;
    
    } else {
      mailErr.innerHTML = "";
      mailInput.style.borderBottomColor='#F2F2F2';
      mailInput.style.borderBottomWidth='0.7px';
      mailInput.style.color = "black";
    }
   
    if (errCount && fwe) {
      mailField.focus();
    }
    return errCount;
  }
 
  function validDate(fwe) {
    var errCount = 0;
    var dateField = document.forms.form1.date;
    var yearField = document.forms.form1.year;
    var mounthField = document.forms.form1.mounth;
    var yearValue = yearField.value;
    var dateValue = dateField.value;
    var mounthValue = mounthField.value;
  
    var dateErr = document.querySelector('.date-err');

    if ( yearValue=="0" || mounthValue=="0" || dateValue=="0") {
        dateErr.innerHTML = "Заполните дату";
        errCount++;
         
      } else {
        dateErr.innerHTML = "";
      }   
      if (errCount && fwe) {
        dateField.focus();
        mounthField.focus();
        yearField.focus();
      }
      return errCount;
    }

   

    function validGender(fwe) {
        var errCount = 0;
        var genField = document.forms.form1.gen;
        var genValue = genField.value;
        var genErr = document.querySelector('.gen-err');
      
        switch (genValue) {
          case (''):
            genErr.innerHTML = "Сделайте выбор";
            errCount++;
            break;
          case ("1"||"2"):
            genErr.innerHTML = "";
            break;
      
      
          default:
            genErr.innerHTML = "";
        }
        if (errCount && fwe) {
          genField[1].focus();
        }
        return errCount;
      }

     
      


      window.onload = function () {
        document.getElementById("password1").onchange = validatePassword;
        document.getElementById("password2").onchange = validatePassword;
    }
    function validatePassword(){
    var pass2=document.getElementById("password2").value;
    var pass1=document.getElementById("password1").value;
    if(pass1!=pass2)
        document.getElementById("password2").setCustomValidity("Пароль не совпадает");
    else
        document.getElementById("password2").setCustomValidity('');
    if( pass1=="")
    document.getElementById("password2").setCustomValidity("Введите пароль");
    }
      
  
  document.forms.form1.name1.onblur = function () { validName1(false); }
  document.forms.form1.lastname.onblur = function () { validLastname(false); }
  document.forms.form1.nation.onblur = function () { validNation(false); }
  document.forms.form1.mail.onblur = function () { validMail(false); }
  document.forms.form1.date.onblur = function () { validDate(false); }
  document.forms.form1.gen.onblur = function () { validGender(false); }
  
 
 
  function validAll(EO) {
    EO = EO || window.event;
  
    try {
      var totalErrCount = 0;
      totalErrCount += validName1(!totalErrCount);
      totalErrCount += validLastname(!totalErrCount);
      totalErrCount += validNation(!totalErrCount);
      totalErrCount += validMail(!totalErrCount);
      totalErrCount += validDate(!totalErrCount);
      totalErrCount += validGender(!totalErrCount);
   
    
     
     

  
      if (totalErrCount)
        EO.preventDefault(); // если ошибки были - отменяем отправку формы на сервер
    }
    catch (err) {
      EO.preventDefault(); // что-то пошло не так - отменяем отправку формы на сервер
    }
  }
  
  document.forms.form1.addEventListener('submit', validAll, false);


  $.ajax({
    method: "POST",
    url: "server-ok.json",
    data: { name: "John", location: "Boston" }
    })
  .done(function( msg ) {
    alert( "Data Saved: " + msg );
  });