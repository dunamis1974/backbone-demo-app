define(['underscore', 'backbone', 'models/_general'], function(_, Backbone, Model) {
  var UserModel = Model.extend({
    url: API + "user"
  });
  return UserModel;
});
