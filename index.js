function introduction(name) {
  return `Hi, my name is ${name}.`;
}

function introductionWithLanguage(name, language) {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

const info = introductionWithLanguage('Joeken', 'js')
console.log(info);

function introductionWithLanguageOptional(name, language='JavaScript') {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

const info2 = introductionWithLanguageOptional('Joeken')
console.log(info2);

