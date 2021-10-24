import http from './http-common';

class InterestRatesApiService{
    getAll(){
        return http.get(`/interest-rates`);
    }
    getByInterestId(rateId){
        return http.get(`/interest-rates/${rateId}`);
    }
    create(data){
        return http.post(`/interest-rates`, data);
    }
}
export default new InterestRatesApiService()