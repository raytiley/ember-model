var get = Ember.get;

Ember.hasMany = function(klass) {
  return Ember.computed(function(key) {
    return Ember.HasManyArray.create({
      parent: this,
      modelClass: klass,
      content: get(this, 'data.' + key)
    });
  }).property();
};