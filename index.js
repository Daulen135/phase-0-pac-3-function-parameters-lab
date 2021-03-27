/*function introduction(name){
    
    console.log(`Hi, my name is ${name}.`);
}
introduction("Josh")


describe('introduction(name)', function() {
    it('takes in an argument of a name and returns a phrase with that name using string interpolation', function() {
      expect(introduction("Josh")).toEqual("Hi, my name is Josh.");
      expect(introduction("Nancy")).toEqual("Hi, my name is Nancy.");
    })
  })/
  */

  function introduction(name) {
return (`Hi, my name is ${name}.`); 

  }

  function introductionWithLanguage(name, language){
      return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
  }

  function introductionWithLanguageOptional(name="user",language="JavaScript"){
  return (`Hi, my name is ${name} and I am learning to program in ${language}.`)    
  }