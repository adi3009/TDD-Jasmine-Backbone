describe('AppModel', function() {
    var appModel = new AppModel();

    it('should have 3 tablets', function() {
        expect(appModel.tablets.length).toBe(3);
    });

    describe('sortTablets', function() {
        it('should sort tablets by name', function() {
            appModel.sortTablets('name');
            expect(appModel.tablets.at(0).get('name')).toBe('Apple iPad Mini');
        });

        it('should sort tablets by screenSize', function() {
            appModel.sortTablets('screenSize');
            expect(appModel.tablets.at(0).get('screenSize')).toBe(7);
            expect(appModel.tablets.at(2).get('screenSize')).toBe(8.9);
        });
    });
});
