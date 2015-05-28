describe('numberToRoman', function(){
  it("will return I for 1", function(){
    expect(numberToRoman(1)).to.equal("I")
  });
  it("will return V for 5", function(){
    expect(numberToRoman(5)).to.equal("V");
  })

  it("will return IV for 4", function(){
    expect(numberToRoman(4)).to.equal("IV");
  })

  // it("will return M for 1000", function(){
  //   expect(numberToRoman(1000)).to.equal("M");
  // })
  //
  // it("will return MM for 2000", function(){
  //   expect(numberToRoman(2000)).to.equal("MM");
  // })
  //
  // it("will return MD for 1500", function(){
  //   expect(numberToRoman(1500)).to.equal("MD");
  // })
  //
  // it("will return MDXXXIII for 1533", function(){
  //   expect(numberToRoman(1533)).to.equal("MDXXXIII");
  // })
  //
  // it("will return CD for 400", function(){
  //   expect(numberToRoman(400)).to.equal("CD");
  // })
  //
  it("will return XC for 90", function(){
    expect(numberToRoman(90)).to.equal("XC");
  })

});
