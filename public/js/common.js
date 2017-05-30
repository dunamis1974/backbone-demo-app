var API = "/api/";

var _USER = null;
var _TOKEN = null;


function setupAjax() {
  $.ajaxSetup({
    headers: {
      'Authorization': 'TOKEN ' + _TOKEN,
    }
  });

  $body = $("body");
  $(document).ajaxStart(function () {
    $body.addClass("loader");
  });
  $(document).ajaxStop(function () {
    $body.removeClass("loader");
  });
  $(document).ajaxError(function (e, request, settings) {
    $body.removeClass("loader");
    checkForError(request.responseJSON);
  });
}

function TOKEN(token) {
  storage = $.localStorage;
  if (token != undefined) {
    storage.set('token_admin', token);
    _TOKEN = token;
    setupAjax();
  } else if (_TOKEN == null) {
    _TOKEN = storage.get('token_admin');
    setupAjax();
  }

  return _TOKEN;
}

function USER(user) {
  storage = $.localStorage;
  if (user != undefined) {
    storage.set('user_admin', user);
    _USER = user;
    return user;
  }
  if (_USER == null) {
    _USER = storage.get('user_admin');
  }

  return _USER;
}

function cleanStorage() {
  storage = $.localStorage;
  storage.remove('token_admin');
  _TOKEN = null;

  storage.remove('user_admin');
  _USER = null;
}

function checkForError(result) {
  if (result == undefined) {
    return {
      isError: false,
      message: ''
    }
  } else if (result && result.success != null && result.success == false) {
    if (result.code != undefined && result.code == 401) {
      cleanStorage();
      router.navigate('', true);
    }
    return {
      isError: true,
      errorMessage: result.message,
      code: result.code
    };
  }
  return {
    isError: false,
    message: result.message
  };
}


function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
}

function calcAge(birthDate) {
  var yearOfBirthday = birthDate.split('/')[2],
    currentDate = new Date(),
    currentYear = currentDate.getFullYear(),
    currentAge = (currentYear - yearOfBirthday);

  return currentAge;
}