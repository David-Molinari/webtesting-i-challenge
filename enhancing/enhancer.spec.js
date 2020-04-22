const {succeed, fail, repair, get} = require('./enhancer.js');
// test away!

describe('enhancer.js', function() {
    const item1 = {name: 'a', durability: 0, enhancement: 0};
    describe('.succeed(item)', function() {
        it('should return items enhancement icnreased by 1, if not 20', function () {
            const item2 = {name: 'a', durability: 0, enhancement: 1};
            expect(succeed(item1)).toMatchObject(item2);
            const item3 = {name: 'a', durability: 0, enhancement: 20};
            expect(succeed(item3)).toMatchObject(item3);
        });
    });
    describe('.fail(item)', function() {
        it('should decrease durability by 5 if enhancement is less than 15, should decrease durability by 10 if enhancement is 15 or more; if items enhancement level is greater than 16, the enhancement level decreases by 1',
         function () {
            const item4 = {name: 'a', durability: 10, enhancement: 10};
            const item5 = {name: 'a', durability: 5, enhancement: 10};
            expect(fail(item4)).toMatchObject(item5);
            const item6 = {name: 'a', durability: 15, enhancement: 15};
            const item7 = {name: 'a', durability: 5, enhancement: 15};
            expect(fail(item6)).toMatchObject(item7);
            const item8 = {name: 'a', durability: 15, enhancement: 18};
            const item9 = {name: 'a', durability: 5, enhancement: 17};
            expect(fail(item8)).toMatchObject(item9);
        });
    });
    describe('.repair(item)', function() {
        it("should return items with durability set to 100", function () {
            const item10 = {name: 'a', durability: 100, enhancement: 0};
            expect(repair(item1)).toMatchObject(item10);
        })
    });
    describe('.get()', function() {
    });
});
