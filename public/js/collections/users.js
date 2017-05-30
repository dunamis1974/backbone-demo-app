define(['collections/_general', 'models/user'], function(VitaCollection, Model) {
  var Collection = VitaCollection.extend({
    model: Model,
    url: API + "user",

    parse: function(data) {
      this.total = data.length;
      return data;
    }
  });

  return Collection;
});
