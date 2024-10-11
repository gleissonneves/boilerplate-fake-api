module.exports = function () {
  const fakeRequest = (path, key = 'return') => require(`./data/${path}.json`)[key];

  return {
    v1Exemplo: fakeRequest('exemplo/index', 'v1'),
    v2Exemplo: fakeRequest('exemplo/index', 'v2'),
  };
};