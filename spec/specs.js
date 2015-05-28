describe('countBy', function(){
  it("counts by 1 up to a given number", function(){
    expect(countBy(1, 5)).to.eql([1,2,3,4,5]);
  });

  it("returns null if count up number is 0", function(){
    expect(countBy(0, 50000000)).to.eql(null);
  });

  it("counts up by number larger than 1 to given number", function(){
    expect(countBy(5, 30)).to.eql([5, 10, 15, 20, 25, 30]);
  });

  it("counts up by number larger than 1 to given number, even if number does not go in even", function(){
    expect(countBy(7, 50)).to.eql([7, 14, 21, 28, 35, 42, 49]);
  });
});
