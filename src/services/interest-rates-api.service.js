import http from './http-common';
import authHeader from "@/services/auth-header";

class InterestRatesApiService{
    getAll(){
        return http.get(`/interest-rates`);
    }
    getByInterestId(rateId){
        return http.get(`/interest-rates/${rateId}`, {headers: authHeader()});
    }
    create(data){
        return http.post(`/interest-rates`, data, {headers: authHeader()});
    }
}
export default new InterestRatesApiService()