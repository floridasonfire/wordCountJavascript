describe('removePunctuation', function(){
  it("removes punctuation from string", function(){
    expect(removePunctuation("this! is a string.")).to.equal("this is a string");
  });
});

describe('wordCount', function(){
  it("returns the count 2 for the string 'word, word'", function(){
    expect(wordCount("word, word")).to.eql({"word": 2});
  });

  it("returns the count 2 and 1 for the string 'word, word, cat'", function(){
    expect(wordCount("word, cat, word")).to.eql({"word": 2, "cat": 1});
  });

  it("counts uppercase words and lowercase words as equal", function(){
    expect(wordCount("word, WORD, cat")).to.eql({"word": 2, "cat": 1});
  });

  it("counts uppercase words and lowercase words as equal", function(){
    expect(wordCount("Word, cat, WORD")).to.eql({"word": 2, "cat": 1});
  });


});
// 
// describe('sortHash', function(){
//   it("will return array of hashes", function(){
//     expect(sortHash({"word": 2, "cat": 1})).to.eql([{"word":2}, {"cat":1}]);
//   });
// });
