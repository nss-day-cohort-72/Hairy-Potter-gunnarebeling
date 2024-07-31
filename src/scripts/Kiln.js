export const firePottery = (freshPot,temp) => {
    freshPot.fired = true;
    freshPot.cracked = false;
    if(temp > 2200){
        freshPot.cracked = true;
    }
    return freshPot

}