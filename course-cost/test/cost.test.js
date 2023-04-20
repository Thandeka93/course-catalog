describe('courseCost', function () {
    it('should return Invalid code for invalid course code', function () {
        const result = courseCost('invalidCode', '2023-05-01');
        assert.equal(result.status, 'Invalid code');
    });

    it('should return Invalid day for invalid start date', function () {
        const result = courseCost('p1', 'invalidDate');
        assert.equal(result.status, 'Invalid day');
    });

it('should calculate course cost with no discount', function () {
        const result = courseCost('p1', '2023-05-01');
        assert.equal(result.status, 'success');
        assert.equal(result.code, 'p1');
        assert.equal(result.description, 'Python');
        assert.equal(result.cost, 7850);
        assert.equal(result.discount, 0);
        assert.equal(result.amountDue, 7850);
    });

    it('should calculate course cost with discount', function () {
        const result = courseCost('r1', '2023-05-20');
        assert.equal(result.status, 'success');
        assert.equal(result.code, 'r1');
        assert.equal(result.description, 'Ruby on Rails intro');
        assert.equal(result.cost, 5675);
        assert.equal(result.discount, 2260);
        assert.equal(result.amountDue, 3415);
    });
})


    
        
        
        
        