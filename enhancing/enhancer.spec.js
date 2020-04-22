const {succeed, fail, repair, get} = require('./enhancer.js');
// test away!

describe('enhancer.js', function() {
    const item = {name: 'a', durability: 0, enhancement: 0}
    describe('.succeed(item)', function() {
        it('should return items enhancement icnreased by 1, if not 20', function () {
            const updatedItem = {name: 'a', durability: 0, enhancement: 1}
            expect(succeed(item)).toMatchObject(updatedItem);
            const newItem = {name: 'a', durability: 0, enhancement: 20};
            expect(succeed(newItem)).toMatchObject(newItem);
        });
    });
    describe('.fail(item)', function() {
        
    });
    describe('.succeed(item)', function() {

    });
    describe('.get()', function() {

    });
});
