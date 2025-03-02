// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js";
import { toSellOrNotToSell } from "./PotteryCatalog.js";
import { usePottery } from "./PotteryCatalog.js";
import { potteryList } from "./PotteryList.js";

// Make 5 pieces of pottery at the wheel
const mug = makePottery("mug",7,3);
const pot = makePottery("pot",5,4);
const bowl = makePottery("bowl",2,3);
const vase = makePottery("vase",6,8);
const cup = makePottery("cup",2,3);
console.log(mug,pot,bowl,vase,cup);

// Fire each piece of pottery in the kiln
const firedMug = firePottery(mug,2200);
const firedPot = firePottery(pot,2100);
const firedBowl = firePottery(bowl,4000);
const firedVase = firePottery(vase,1100);
const firedCup = firePottery(cup,2400);
console.log(firedMug,firedPot,firedBowl,firedVase,firedCup);
// Determine which ones should be sold, and their price
const finishedMug = toSellOrNotToSell(firedMug);
const finishedPot = toSellOrNotToSell(firedPot);
const finishedBowl = toSellOrNotToSell(firedBowl);
const finishedVase = toSellOrNotToSell(firedVase);
const finishedCup = toSellOrNotToSell(firedCup);
const usedPottery = usePottery();
usedPottery.forEach(obj => {
    console.log(obj);
})
//console.log(usePottery());



// Invoke the component function that renders the HTML list
let potListHTML = potteryList();
var potListElement = document.getElementsByClassName('potteryList'); 
potListElement[0].innerHTML = potListHTML;


