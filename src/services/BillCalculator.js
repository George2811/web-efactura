
export default class BillCalculator{

    //Efectiva
    constructor(nv, time, type = 'TE', ratePercent = 25.7, rateTimeType = 360, capitalization = 0,
                iniCosts = 200, finalCosts = 158.5, retention = 0) {
        this.nominalValue = nv;
        this.time = time;
        this.type = type;
        this.ratePercent = ratePercent;
        this.rateTimeType = rateTimeType;
        this.capitalization = capitalization;
        this.retention = retention;

        this.initialCosts = iniCosts;
        this.finalCosts = finalCosts;

        // Intermediate values
        this.effectiveRate = 0;
        this.discount = 0;

        // Final Values
        this.netValue = 0;
        this.receivedValue = 0;
        this.deliveredValue = 0;
        this.tcea = 0;

    }

    /*toCapitalization(){
        this.capitalization
    }*/
    toPercent(val){
        return val/100;
    }
    fromNominalToEffectiveRate(){
        this.effectiveRate = 100 * (Math.pow(1 + (this.toPercent(this.ratePercent)/this.rateTimeType), this.time) - 1);
        return this.effectiveRate;
    }
    findEffectiveRate(){
        this.effectiveRate = 100 * (Math.pow(1+this.toPercent(this.ratePercent), this.time/this.rateTimeType) - 1);
        return this.effectiveRate;
    }
    findDiscount(){
        this.discount = 100 * (this.toPercent(this.effectiveRate) / (1 + this.toPercent(this.effectiveRate)));
        return this.discount;
    }
    findNetValue(){
        this.netValue = this.nominalValue - (this.nominalValue * this.toPercent(this.discount));
        this.netValue = Number(this.netValue.toFixed(2));
        return this.netValue;
    }
    findReceivedValue(){
        this.receivedValue = this.netValue - this.initialCosts - this.retention;
        return this.receivedValue;
    }
    findDeliveredValue(){
        this.deliveredValue = this.nominalValue + this.finalCosts + this.retention;
        return this.deliveredValue;
    }
    findTcea(){
        this.tcea = 100 * (Math.pow((this.deliveredValue/this.receivedValue), (this.rateTimeType/this.time)) - 1);
        return this.tcea;
    }

    saveBill(){
        if (this.type === 'TN') this.fromNominalToEffectiveRate();
        else this.findEffectiveRate();

        this.findDiscount();
        this.findNetValue();
        this.findReceivedValue();
        this.findDeliveredValue();
        this.findTcea();
    }
}