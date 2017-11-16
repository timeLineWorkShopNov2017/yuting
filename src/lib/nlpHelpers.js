import stopwords from 'stopwords';

function arrayDiff (array, arrayfilter) {
  return array.filter((item) => arrayfilter.indexOf(item) === -1);
};

function logerThan20(text) {
  return text.length < 20;
}

function getTextTokens(content) {
  const punctuationReg = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g; // eslint-disable-line no-useless-escape
  const numberReg = /[0-9]/g;
  const pureContent = content.replace(punctuationReg, '').replace(numberReg, '').split(' ');
  const tokens = pureContent.filter(logerThan20).map(token => token.toLowerCase());
  return arrayDiff(tokens, stopwords.english);
}

export const getFrequentWords = (content, numberOfWords = 10) => {
  const tokensWithOutStopWords = getTextTokens(content);
  const frequencies = {};
  for (const word of tokensWithOutStopWords) {
    frequencies[word] = frequencies[word] || 0;
    frequencies[word] += 1;
  }
  const wordsss = Object.keys(frequencies);
  const wordsRankedByFrequent = wordsss.sort((a, b) => frequencies[b] - frequencies[a]).slice(0, numberOfWords);
  return wordsRankedByFrequent
}
