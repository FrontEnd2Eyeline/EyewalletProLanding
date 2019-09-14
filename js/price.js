// Se obtiene la data de este endopoint para graficar

const url = "https://gmmclub.com:3001/general/historial";
let Holi

fetch (url,{
    credentials: 'same-origin', // 'include', default: 'omit'
    method: 'GET', // 'GET', 'PUT', 'DELETE', etc.
    headers: new Headers({
    'Content-Type': 'application/json'
    }),
    }).then (res => res.json()) 
    .then (data=>{
        data.forEach(element => {
            element.descripcion = JSON.parse(element.descripcion);
            element.dolar = JSON.parse(element.dolar);
        })
        renderPrices (data)
    })

    renderPrices = (data) => { 
        console.log(data);
        // Para futura implementacion
        // let BTC = `
        // <div>BTC/USD &nbsp; <span class="Prices__Bitcoin-Regular">4.89%</span> </div>
        // <hr class="Prices__hr">
        // <div> ${data[49].descripcion.BTC.USD} <span class="Prices__Bitcoin-Regular">USD</span></div>
        // <div>Vol. <span class="Prices__Bitcoin-Regular">6,671,412 USD</span></div>`;
        console.log(data[49].descripcion.BTC.USD);
        let BTC = `
        <div>BTC/USD</div>
        <hr class="Prices__hr">
        <div> ${data[49].descripcion.BTC.USD} <span class="Prices__Bitcoin-Regular">USD</span></div>
        `;
        let BCH = `
        <div >BCH/USD</div>
        <hr class="Prices__hr">
        <div>${data[49].descripcion.BCH.USD}  <span>USD</span class="Prices__Bitcoin-Regular"></div>
        `;
        let ETH = `
        <div>ETH/USD</div>
        <hr class="Prices__hr">
        <div>${data[49].descripcion.ETH.USD}  <span class="Prices__Bitcoin-Regular">USD</span></div>
        `;
        let LTC = `
        <div>LTC/USD</div>
        <hr class="Prices__hr">
        <div>${data[49].descripcion.LTC.USD}  <span class="Prices__Bitcoin-Regular">USD</span></div>
        `;
        // Escribimos el HTML para cada Cripto Activo 
        document.getElementById("Prices__Bitcoin").innerHTML = BTC;
        document.getElementById("Prices__BitcoinCash").innerHTML = BCH;
        document.getElementById("Prices__Ethereum").innerHTML = ETH;
        document.getElementById("Prices__Litecoin").innerHTML = LTC
    }