
export default class TirCalculator {
    constructor(values, dates) {
        this.values = values;
        this.dates = dates;

        this.tir = 0;
    }

    vanCalculator(rate){
        let van = this.values[0];
        for(let i = 1; i < this.values.length; i++){
            van += this.values[i]/ Math.pow(1+rate,(this.dates[i]/360));
        }
        return van;
    }

    binary_search(){
        let high = 100;
        let low = -100;
        let mid = 0;

        mid = (high + low)/2;
        let van = this.vanCalculator(mid);
        let max = 1000;
        let  i = 0;

        while ((van !== 0) && i < max){
            van < 0 ? high = mid : low = mid;
            mid = (high + low)/2;
            van = this.vanCalculator(mid)
            i+= 1;
        }
        this.tir = mid;
    }
}