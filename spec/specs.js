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

  it("will return IX for 9", function(){
    expect(numberToRoman(9)).to.equal("IX");
  })

  it("will return XL for 40", function(){
    expect(numberToRoman(40)).to.equal("XL");
  })

  it("will return XLIV for 44", function(){
    expect(numberToRoman(44)).to.equal("XLIV");
  })

  it("will return XL for 67", function(){
    expect(numberToRoman(67)).to.equal("LXVII");
  })

  it("will return XC for 90", function(){
    expect(numberToRoman(90)).to.equal("XC");
  })

  it("will return XCIX for 99", function(){
    expect(numberToRoman(99)).to.equal("XCIX");
  })

  it("will return CD for 400", function(){
    expect(numberToRoman(400)).to.equal("CD");
  })

  it("will return CDXC for 490", function(){
    expect(numberToRoman(490)).to.equal("CDXC");
  })

  it("will return CDXCIX for 499", function(){
    expect(numberToRoman(499)).to.equal("CDXCIX");
  })

  it("will return M for 1000", function(){
    expect(numberToRoman(1000)).to.equal("M");
  })

  it("will return MCDXCIII for 1493", function(){
    expect(numberToRoman(1493)).to.equal("MCDXCIII");
  })

  it("will return MD for 1500", function(){
    expect(numberToRoman(1500)).to.equal("MD");
  })

  it("will return MDXXXIII for 1533", function(){
    expect(numberToRoman(1533)).to.equal("MDXXXIII");
  })

  it("will return MCMIX for 1909", function(){
    expect(numberToRoman(1909)).to.equal("MCMIX");
  })

  it("will return MM for 2000", function(){
    expect(numberToRoman(2000)).to.equal("MM");
  })

  it("will return MMMCMIX for 3909", function(){
    expect(numberToRoman(3909)).to.equal("MMMCMIX");
  })

  it("will return MMMCMXCIX for 3999", function(){
    expect(numberToRoman(3999)).to.equal("MMMCMXCIX");
  })

});
