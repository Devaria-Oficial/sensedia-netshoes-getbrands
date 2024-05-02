const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://api-sandbox.netshoes.com.br/api/v1',
    timeout : 20000,
    headers: {
        'Content-Type' : 'application/json',
        'client_id' : '52f362ca-9013-49d1-96d7-c0105454463c',
        'access_token' : 'd14524cd-8203-4dd9-859a-2598a54800e4',
    }
});

async function getBrands(){
    try{
        const result = await instance.get('/brands');
        console.log(result.data);
    }catch(e){
        console.log('Error on getBrands:', e);
    }
}

getBrands();