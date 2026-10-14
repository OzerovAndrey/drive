import * as source from '../lib/catalog.mjs';
export type Car = {id:string;name:string;title:string;type:string;powertrain:string;price:number;power:number;range:number;acceleration:number;seats:number;image:string;tag:string;featured:boolean;description:string};
export type Configuration={paint:string;wheels:string;interior:string;packages:string[]};
export const cars:Car[]=source.cars;
export const packages:{id:string;name:string;price:number;description:string}[]=source.packages;
export const filterCars=(list:Car[],filters:{body:string;powertrain:string;budget:number;search:string;sort:string}):Car[]=>source.filterCars(list,filters);
export const recommend=(list:Car[],prefs:{budget:number;usage:string;powertrain:string}):Car[]=>source.recommend(list,prefs);
export const configurePrice=(car:Car,config:Configuration):number=>source.configurePrice(car,config);
export const validPackages=(powertrain:string,ids:string[]):string[]=>source.validPackages(powertrain,ids);
