import test from 'node:test';import assert from 'node:assert/strict';
import{cars,filterCars,configurePrice,validPackages,recommend}from'../src/lib/catalog.mjs';
test('combined filters enforce body, powertrain and budget',()=>{const result=filterCars(cars,{body:'Sedan',powertrain:'Electric',budget:50000,search:'',sort:'featured'});assert.deepEqual(result.map(c=>c.id),['e1']);assert.equal(filterCars(cars,{body:'Coupe',powertrain:'Electric',budget:100000,search:'',sort:'featured'}).length,0);});
test('sorting does not mutate the catalog',()=>{const before=cars.map(c=>c.id);const sorted=filterCars(cars,{sort:'price-low'});assert.equal(sorted[0].id,'e1');assert.deepEqual(cars.map(c=>c.id),before);});
test('configuration itemization adds paint wheels interior and packages exactly once',()=>{assert.equal(configurePrice(cars[0],{paint:'forest',wheels:'sport',interior:'tan',packages:['comfort','assist']}),94900);});
test('electric models reject sport package and unknown options',()=>{assert.deepEqual(validPackages('Electric',['comfort','sport','unknown']),['comfort']);assert.deepEqual(validPackages('Petrol',['sport']),['sport']);});
test('matching respects hard constraints even when no car is available',()=>{assert.deepEqual(recommend(cars,{budget:50000,usage:'family',powertrain:'Hybrid'}),[]);const result=recommend(cars,{budget:100000,usage:'family',powertrain:'Any'});assert.equal(result[0].id,'x5');});

import {energyCosts,chargingMinutes} from '../src/lib/ownership.mjs';
test('energy cost uses explicit distance and consumption assumptions',()=>{const x=energyCosts({distance:15000,electricity:.25,petrol:1.7,efficiency:17,consumption:7});assert.equal(x.electricAnnual,637.5);assert.equal(x.petrolAnnual,1785);assert.equal(x.difference,1147.5);});
test('energy comparison reports negative difference when electricity costs more',()=>{const x=energyCosts({distance:15000,electricity:2,petrol:.5,efficiency:17,consumption:7});assert.ok(x.difference<0);assert.throws(()=>energyCosts({distance:NaN,electricity:.2,petrol:1}),RangeError);});
test('ideal charging calculation respects battery energy and power',()=>{assert.equal(chargingMinutes(100,10,80,50),84);assert.throws(()=>chargingMinutes(78,80,10,11),RangeError);assert.throws(()=>chargingMinutes(78,10,80,0),RangeError);});
