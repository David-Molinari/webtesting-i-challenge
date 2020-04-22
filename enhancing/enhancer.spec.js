const {succeed, fail, repair, get} = require('./enhancer.js');
// test away!

describe('enhancer.js', function() {
    const item1 = {name: 'a', durability: 0, enhancement: 0};
    const item2 = {name: 'a', durability: 0, enhancement: 1};
    const item3 = {name: 'a', durability: 0, enhancement: 20};
    describe('.succeed(item)', function() {
        it('should return items enhancement icnreased by 1, if not 20', function () {
            expect(succeed(item1)).toMatchObject(item2);
            expect(succeed(item3)).toMatchObject(item3);
        });
    });
    const item4 = {name: 'a', durability: 10, enhancement: 10};
    const item5 = {name: 'a', durability: 5, enhancement: 10};
    const item6 = {name: 'a', durability: 15, enhancement: 15};
    const item7 = {name: 'a', durability: 5, enhancement: 15};
    const item8 = {name: 'a', durability: 15, enhancement: 18};
    const item9 = {name: 'a', durability: 5, enhancement: 17};
    describe('.fail(item)', function() {
        it('should decrease durability by 5 if enhancement is less than 15, should decrease durability by 10 if enhancement is 15 or more; if items enhancement level is greater than 16, the enhancement level decreases by 1',
         function () {
            expect(fail(item4)).toMatchObject(item5);
            expect(fail(item6)).toMatchObject(item7);
            expect(fail(item8)).toMatchObject(item9);
        });
    });
    const item10 = {name: 'a', durability: 100, enhancement: 0};
    describe('.repair(item)', function() {
        it("should return items with durability set to 100", function () {
            expect(repair(item1)).toMatchObject(item10);
        })
    });
    const item11 = {name: 'a', durability: 5, enhancement: 17};
    describe('.get(item)', function() {
        it('should get item with name unmodified if enhancement level is 0, should get item with name preceded by square brackets containing a plus sign followed by enhancment number', function () {
            expect(get(item10)).toMatchObject(item10);
            expect(get(item9)).toMatchObject(item11);
        })
    });
});
