import axios from "axios";

const API_URL = 'https://e-factura-api.herokuapp.com/api';

class AuthService{
    login(user){
        console.log('About the request');
        return axios.post(API_URL+'/auth/sign-in', JSON.stringify({
                username: user.username,
                password: user.password}),
            {headers: {'Content-Type': 'application/json'}})
            .then(function (response){
                console.log(`Response arrived with status ${response.status}`);
                console.log(response)
                if (response.data.token){
                    console.log(`user: ${response.data.userId}`);
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                return response.data.userId;
            })
            .catch(function (error){
                if (error.response){
                    console.log(error.response.status);
                    console.log(error.response.data);
                    console.log(error.response.headers);
                } else if (error.request){
                    console.log(error.request);
                } else {
                    console.log(error.message);
                }
                console.log(error.config);
                return error;
            });
    }
    logout(){
        localStorage.removeItem('user');
    }
    register(user){
        return axios.post(API_URL+'/users',{
            // Attributes of the class USER
            username: user.username,
            password: user.password
        });
    }
}

export default new AuthService();