describe(' filtering function', function () {
    it('should filter by brand ', function () {

        var instance = ShoesFactory();

        instance.filter()

        assert.deepEqual(instance.filter(),"Nike");
    });
});