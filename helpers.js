class Calculator {
    mean(args){
        const sum = args.reduce((total, current) => total + current);
        return sum / args.length;
    }

    median(args){

        const sorted = args.sort((a,b) => a - b);
        const mid = Math.floor(sorted.length / 2);

        return sorted[mid];
    }

    mode(args){
        const counter = new Map()
        for(let i = 0; i < args.length; i++){
            if(counter[args[i]]){
                counter[args[i]] += 1;
            } else {
                counter[args[i]] = 1;
            }
        }

        let mode = 0;
        for(let key in counter){
            if(counter[key] > mode){
                mode = parseInt(key)
            }
        }
        return mode;
    }
}

module.exports = {
    Calculator
}