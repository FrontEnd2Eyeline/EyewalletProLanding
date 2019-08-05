const eyeProForm = document.getElementById('eyePro');
const eyeWallForm = document.getElementById('eyeWall');

eyeWallForm.addEventListener('submit', function (e) {
    // Evita procesar el formulario por defecto previniendo que contraseñas se almacenen en el navegador
    e.preventDefault();
    const WallData = new FormData(eyeWallForm);
    bodyForm = {
        type: '0',
        email: WallData.get('emailWall')
    }
    const url = "https://eyewalletpro.com:3001/api/v1/subscription/create";
    fetch (url,{
    credentials: 'same-origin', // 'include', default: 'omit'
    method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
    body: JSON.stringify(bodyForm), // Coordinate the body type with 'Content-Type'
    headers: new Headers({
    'Content-Type': 'application/json'
    }),
    }).then (res => res.json()) 
    .then (data=>{
        console.log(data);
        alert('Email created successfully')
    })
})


eyeProForm.addEventListener('submit', function (e) {
    // Evita procesar el formulario por defecto previniendo que contraseñas se almacenen en el navegador
    e.preventDefault();
    const ProData = new FormData(eyeProForm);
    bodyForm = {
        type: '1',
        email: ProData.get('emailPro')
    }
    const url = "https://eyewalletpro.com:3001/api/v1/subscription/create";
    fetch (url,{
    credentials: 'same-origin', // 'include', default: 'omit'
    method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
    body: JSON.stringify(bodyForm), // Coordinate the body type with 'Content-Type'
    headers: new Headers({
    'Content-Type': 'application/json'
    }),
    }).then (res => res.json()) 
    .then (data=>{
        console.log(data);
        alert('Email created successfully')
    })
})