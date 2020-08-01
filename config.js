exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // URL padrão que iremos utilizar nos testes
  baseURL: 'https://www.google.com.br',
  
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // Arquivos .js de testes que iremos rodar na execução
  specs: ['features/*.feature'],
  
  //configuração do browser CHROME para execução
  capabilities: {
    shardTestFiles: false,
    browserName: 'chrome',
    "seleniumProtocol": "WebDriver",

    metadata: {
      device: 'Local test machine',
      platform: {
        name: 'Windows',
        version: '10'
      }
    },
  },
  
  ignoreUncaughtExceptions: true,

  cucumberOpts: {
    // require step definitions
    require: [
      'features/specs/*.js' // accepts a glob
    ],
  },

  // Para rodar aplicações que NÃO SÃO ALGULAR
    onPrepare: () => {
      browser.waitForAngularEnabled(false)
    },
    // Os teste devem ser independentes, podendo ser executados de forma aleatórias
    // jasmineNodeOpts: { random: true }
}
