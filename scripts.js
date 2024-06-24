//DECLARAÇÃO DE VARIÁVEIS QUE BUSCAM ELEMENTOS DO HTML
const convertButton = document.querySelector('.convert-button');
const selectFrom = document.querySelector('.select-from');
const selectTo = document.querySelector('.select-to');
const realTimeValuesDolar = document.querySelector('.dolar-today')
const realTimeValuesEuro = document.querySelector('.euro-today')
const realTimeValuesLibra = document.querySelector('.libra-today')
const realTimeValuesBitcoin = document.querySelector('.bitcoin-today')
const realTimeValuesDate = document.querySelector('.real-time-date')


//CONVERTENDO OS VALORES
async function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;    
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");//FROM = PRIMEIRO SELECT 
    const currencyValueConverted = document.querySelector(".currency-value-converted");//TO = SEGUNDO SELECT

    //COTAÇÃO DAS MOEDAS - //FETCH É UMA FUNÇÃO NATIVA DO JAVASCRIPT, ELA ACEITA DOIS PARAMETROS, A URL E O TIPO DA REQUISIÇÃO.
    //REQUISIÇÃO GET (OU PEGAR) JÁ É PADRÃO DO FETCH
    const dataApi = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL").then(element => element.json())
        
    const dateToday = dataApi.create_date

    const dolarToday = dataApi.USDBRL.high
    const euroToday = dataApi.EURBRL.high
    const libraToday = dataApi.GBPBRL.high
    const bitcoinToday = dataApi.BTCBRL.high    


    //EXIBINDO VALORES DE MOEDAS EM TEMPO REAL NA TELA APÓS A CONVERSÃO PARA QUE USUÁRIO SAIBA QUANTO ESTÁ VALENDO A MOEDA ESCOLHIDA
    realTimeValuesDate.innerHTML = new Intl.DateTimeFormat('pt-BR', {
        dateStyle: 'short',
        timeStyle: 'short',
        timeZone: 'America/Sao_Paulo',
    }).format(dateToday)
    
    realTimeValuesDolar.innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(dolarToday)

    realTimeValuesEuro.innerHTML = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR'
    }).format(euroToday)

    realTimeValuesLibra.innerHTML = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP'
    }).format(libraToday)

    realTimeValuesBitcoin.innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'BTC'
    }).format(bitcoinToday)


    //ALTERANDO OS VALORES E SIMBOLOS DAS MOEDAS NO TEXTO DE EXIBIÇÃO
    if (selectFrom.value == "from-real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrencyValue)
    }

    if (selectFrom.value == "from-dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue)
    }

    if (selectFrom.value == "from-euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue)
    }

    if (selectFrom.value == "from-libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue)
    }

    if (selectFrom.value == "from-bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrencyValue)
    }

    
    //CONVERSÃO DOS VALORES DO REAL PARA OUTRAS MOEDAS
    //CONVERSÃO REAL / DOLAR ---> DOLAR / REAL
    if (selectFrom.value == "from-real" && selectTo.value == 'to-dolar') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday)
    }
 
    if (selectFrom.value == 'from-dolar' && selectTo.value == 'to-real') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(dolarToday * inputCurrencyValue);     
    }

    //CONVERSÃO REAL / EURO ---> EURO / REAL
    if (selectFrom.value == 'from-real' && selectTo.value == 'to-euro') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroToday)                               
    }
 
    if (selectFrom.value == 'from-euro' && selectTo.value == 'to-real') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(euroToday * inputCurrencyValue);     
    }

    //CONVERSÃO REAL / LIBRA ---> LIBRA / REAL
    if (selectFrom.value == 'from-real' && selectTo.value == 'to-libra') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue / libraToday)                               
    }
 
    if (selectFrom.value == 'from-libra' && selectTo.value == 'to-real') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(libraToday * inputCurrencyValue);     
    }

    //CONVERSÃO REAL / BITCOIN ---> BITCOIN / REAL
    if (selectFrom.value == 'from-real' && selectTo.value == 'to-bitcoin') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrencyValue / bitcoinToday)                               
    }
 
    if (selectFrom.value == 'from-bitcoin' && selectTo.value == 'to-real') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(bitcoinToday * inputCurrencyValue);     
    }


    //CONVERSÃO DOS VALORES DO DOLAR PARA OUTRAS MOEDAS
    //CONVERSÃO DOLAR / EURO ---> EURO / DOLAR
    if (selectFrom.value == "from-dolar" && selectTo.value == 'to-euro') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroToday)
    }
 
    if (selectFrom.value == 'from-euro' && selectTo.value == 'to-dolar') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(euroToday * inputCurrencyValue);     
    }

    //CONVERSÃO DOLAR / LIBRA ---> LIBRA / DOLAR
    if (selectFrom.value == "from-dolar" && selectTo.value == 'to-libra') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue / libraToday)
    }
 
    if (selectFrom.value == 'from-libra' && selectTo.value == 'to-dolar') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(libraToday * inputCurrencyValue);     
    }

    //CONVERSÃO DOLAR / BITCOIN ---> BITCOIN / DOLAR
    if (selectFrom.value == "from-dolar" && selectTo.value == 'to-bitcoin') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrencyValue / bitcoinToday)
    }
 
    if (selectFrom.value == 'from-bitcoin' && selectTo.value == 'to-dolar') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(bitcoinToday * inputCurrencyValue);     
    }



    //CONVERSÃO DOS VALORES DO EURO PARA OUTRAS MOEDAS
    //CONVERSÃO EURO / LIBRA ---> LIBRA / EURO
    if (selectFrom.value == "from-euro" && selectTo.value == 'to-libra') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue / libraToday)
    }
 
    if (selectFrom.value == 'from-libra' && selectTo.value == 'to-euro') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
        }).format(libraToday * inputCurrencyValue);     
    }

    //CONVERSÃO EURO / BITCOIN ---> BITCOIN / EURO
    if (selectFrom.value == "from-euro" && selectTo.value == 'to-bitcoin') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrencyValue / bitcoinToday)
    }
 
    if (selectFrom.value == 'from-bitcoin' && selectTo.value == 'to-euro') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
        }).format(bitcoinToday * inputCurrencyValue);     
    }


    //CONVERSÃO DOS VALORES DO LIBRA PARA OUTRAS MOEDAS
    //CONVERSÃO LIBRA / BITCOIN ---> BITCOIN / LIBRA
    if (selectFrom.value == "from-libra" && selectTo.value == 'to-bitcoin') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrencyValue / bitcoinToday)
    }
 
    if (selectFrom.value == 'from-bitcoin' && selectTo.value == 'to-libra') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(bitcoinToday * inputCurrencyValue);     
    }



    //CONVERTENDO VALORES CASO A ESCOLHA SEJAM DUAS MOEDAS IGUAIS
    //CONERSÃO REAL / REAL
    if (selectFrom.value == 'from-real' && selectTo.value == 'to-real') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(inputCurrencyValue);     
    }

    //CONERSÃO DOLAR / DOLAR
    if (selectFrom.value == 'from-dolar' && selectTo.value == 'to-dolar') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(inputCurrencyValue);     
    }

    //CONERSÃO EURO / EURO
    if (selectFrom.value == 'from-euro' && selectTo.value == 'to-euro') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
        }).format(inputCurrencyValue);     
    }

    //CONERSÃO LIBRA / LIBRA
    if (selectFrom.value == 'from-libra' && selectTo.value == 'to-libra') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
        }).format(inputCurrencyValue);     
    }

    //CONERSÃO BITCOIN / BITCOIN
    if (selectFrom.value == 'from-bitcoin' && selectTo.value == 'to-bitcoin') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC',
        }).format(inputCurrencyValue);     
    }

}


//SELECIONADO AS MOEDAS E ALTERANDO SUAS RESPECTIVAS BANDEIRAS
function changeCurrency() {
    const currencyNameFrom = document.querySelector(".currency-name-from");
    const currencyImgFrom = document.querySelector(".currency-img-from");
    const currencyNameTo = document.querySelector(".currency-name-to");
    const currencyImgTo = document.querySelector(".currency-img-to");

    //DE
    if (selectFrom.value == "from-real") {
        currencyNameFrom.innerHTML = "Real Brasileiro";
        currencyImgFrom.src = "./assets/img/real.png";
    }

    if (selectFrom.value == "from-dolar") {
        currencyNameFrom.innerHTML = "Dólar Americano";
        currencyImgFrom.src = "./assets/img/dolar.png";
    }

    if (selectFrom.value == "from-euro") {
        currencyNameFrom.innerHTML = "Euro";
        currencyImgFrom.src = "./assets/img/euro.png";
    }

    if (selectFrom.value == "from-libra") {
        currencyNameFrom.innerHTML = "Libra Esterlina";
        currencyImgFrom.src = "./assets/img/libra.png";
    }

    if (selectFrom.value == "from-bitcoin") {
        currencyNameFrom.innerHTML = "Bitcoin";
        currencyImgFrom.src = "./assets/img/bitcoin.png";
    }

    //PARA
    if (selectTo.value == "to-dolar") {
        currencyNameTo.innerHTML = "Dólar Americano";
        currencyImgTo.src = "./assets/img/dolar.png";
    }

    if (selectTo.value == "to-euro") {
        currencyNameTo.innerHTML = "Euro";
        currencyImgTo.src = "./assets/img/euro.png";
    }

    if (selectTo.value == "to-libra") {
        currencyNameTo.innerHTML = "Libra Esterlina";
        currencyImgTo.src = "./assets/img/libra.png";
    }

    if (selectTo.value == "to-bitcoin") {
        currencyNameTo.innerHTML = "Bitcoin";
        currencyImgTo.src = "./assets/img/bitcoin.png";
    }

    if (selectTo.value == "to-real") {
        currencyNameTo.innerHTML = "Real Brasileiro";
        currencyImgTo.src = "./assets/img/real.png";
    }

    convertValues();

}

//MONITORAMENTO DE AÇÕES DA PÁGINA
convertButton.addEventListener('click', convertValues);
selectFrom.addEventListener('change', changeCurrency);
selectTo.addEventListener('change', changeCurrency);

