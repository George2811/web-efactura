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
                if (response.data.token){
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                return response.data.userId;
            })
            .catch(function (error){
                throw error;
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