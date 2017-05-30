define([
    'jquery',
    'underscore',
    'views/_general',
    'collections/users',
    'text!templates/users.html'
  ],
  function($, _, View, Users, tpl) {
    var UserView = View.extend({
      name: 'users',
      events: {
      },

      renderInit: function() {
        $("#content-view").html(tpl);
      },

      renderMain: function() {
        this.users = new Users();
        var that = this;
        this.users.fetch({
          url: API + 'user',
          success: function(collection, response) {
            var template = _.template($("script#tpl-users").html());
            $("#users-content").html(template({
              "data": collection.models
            }));
          },
          error: function(collection, response) {
            alert(response.status + " " + response.statusText);
          }
        });
      }
    });

    return UserView;
  });
