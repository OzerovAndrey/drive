/** Explicitly illustrative energy-only costs; no depreciation, servicing, insurance or finance. */
export function energyCosts({distance,electricity,petrol,efficiency=17,consumption=7}){
 for(const [key,v] of Object.entries({distance,electricity,petrol,efficiency,consumption}))if(!Number.isFinite(v)||v<0)throw new RangeError(`Invalid ${key}`);
 const electricAnnual=distance/100*efficiency*electricity;
 const petrolAnnual=distance/100*consumption*petrol;
 return{electricAnnual,petrolAnnual,difference:petrolAnnual-electricAnnual,electricMonthly:electricAnnual/12,petrolMonthly:petrolAnnual/12};
}
/** Constant-power ideal time; charge curve and losses make real times longer. */
export function chargingMinutes(battery,from,to,power){
 if(![battery,from,to,power].every(Number.isFinite)||battery<=0||power<=0||from<0||to>100||to<=from)throw new RangeError('Invalid charging assumptions');
 return battery*(to-from)/100/power*60;
}
