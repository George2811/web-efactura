import http from './http-common';

class BillsApiService{
    getAllByUserId(userId){
        return http.get(`/users/${userId}/bills`)
    }
    getByUserIdAndBillId(userId, billId){
        return http.get(`/users/${userId}/bills/${billId}`)
    }
    create(userId, rateId, data){
        return http.post(`/users/${userId}/bills/${rateId}`, data);
    }
}

export default new BillsApiService()