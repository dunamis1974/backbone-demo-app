define([
  'jquery',
  'underscore',
  'backbone',
  'views/_general',
  'text!templates/login.html',
],
  function ($, _, Backbone, View, tpl) {
    var login = View.extend({
      name: 'login',
      events: {
        'submit #login-form': 'doLogin',
      },

      render: function () {
        $('#content-view').html(tpl);
      },

      doLogin: function (e) {
        if (e.isDefaultPrevented()) {
          return;
        }
        e.preventDefault();

        var email = $("#email").val();
        var pass = $("#password").val();

        if (email == '' || pass == '') {
          alert('Incorrect values.');
          return;
        }

        $.ajax({
          type: "POST",
          url: API + "login",
          dataType: 'json',
          data: JSON.stringify({
            'email': email,
            'password': pass,
          }),
          contentType: 'application/json',
          success: function (data) {
            if (!data.success) {
              alert("Unable to login!");
            } else {
              TOKEN(data.token);
              USER(data.data[0]);
              router.navigate('users', {
                trigger: true
              });
            }
          },
          error: function (e, data) {
            if (e.responseJSON != undefined) {
              alert(e.responseJSON.userMessage);
            } else {
              alert("Unable to login!");
            }
          }
        })
      }
    });

    return login;
  });
