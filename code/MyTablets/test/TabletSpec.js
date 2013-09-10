describe('Tablet', function() {
    it('should have a default value for name', function() {
        var tablet = new Tablet();

        expect(tablet.get('name')).toBe('');
    });
});
