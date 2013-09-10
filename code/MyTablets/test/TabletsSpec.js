describe('Tablets', function() {
    var tablets;

    beforeEach(function() {
        tablets = new Tablets();
        tablets.add({name: "Samsung Galaxy", screenSize: 7, storage: 8});
        tablets.add({name: "Kindle Fire", screenSize: 8.9, storage: 16});
    });

    it('should have length 2', function() {
        expect(tablets.length).toBe(2);
    });

    it('have a tablet with name "Samsung Galaxy"', function() {
        expect(tablets.findWhere({name: 'Samsung Galaxy'}).get('name')).toEqual('Samsung Galaxy');
    });

    it('and is the last tablet in the tablets collection', function() {
        expect(tablets.at(1).get('name')).toBe('Samsung Galaxy');
    });
});
