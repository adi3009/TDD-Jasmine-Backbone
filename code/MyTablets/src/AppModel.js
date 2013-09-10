var AppModel = Backbone.Model.extend({
    initialize: function() {
        this.tablets = new Tablets(tabletData);
    },

    sortTablets: function(attribute) {
        this.tablets.comparator = function(model) {
            return model.get(attribute);
        }

        this.tablets.sort();
    }
});