const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.should();
let count = 1;

function asyncTest(done) {
    return Promise.reject(new Error('fail'))
        .then(() => console.log('Resolved'), (result) => { return 'error' })
}

describe('User', function() {
    describe('#save()', function() {
        this.timeout(500);

        it('should take less than 500ms', function(done) {
            setTimeout(done, 300);
        });

        it('should take less than 500ms as well', function(done) {
            setTimeout(done, 250);
        });
    });
});