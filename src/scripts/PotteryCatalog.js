let potteryToSell = [];
export const toSellOrNotToSell = (firedPot) => {
    if (firedPot.cracked === false) {
        if (firedPot.weight >= 6){
            firedPot.price = 40;
        }else{
            firedPot.price = 20;
        }
        potteryToSell.push(firedPot);
    }
    return firedPot

}
export const usePottery = () =>{
    const copiedPotteryToSell = Array.from(potteryToSell);
    return copiedPotteryToSell
}