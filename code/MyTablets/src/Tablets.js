var Tablets = Backbone.Collection.extend({
    model: Tablet,

    comparator: function(model) {
        return model.get('name');
    }
});