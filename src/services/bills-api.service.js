import http from './http-common';
import authHeader from "@/services/auth-header";

class BillsApiService{
    getAllByUserId(userId){
        return http.get(`/users/${userId}/bills`, {headers: authHeader()})
    }
    getByUserIdAndBillId(userId, billId){
        return http.get(`/users/${userId}/bills/${billId}`, {headers: authHeader()})
    }
    create(userId, rateId, data){
        return http.post(`/users/${userId}/bills/${rateId}`, data, {headers: authHeader()});
    }
    delete(userId, billId){
        return http.delete(`/users/${userId}/bills/${billId}`,{headers: authHeader()});
    }
}

export default new BillsApiService()