
 // 1 Miss Scarlet
 // 2 Mrs Peacock
 // 3 1st Prof Plum, 2nd Mrs Peacock
 //4 Peacock
 //5 Revolver
 //6 mr green -   put mrs white
 // mrs Scarlet
 //8 led pipe - wrong
 //9 Pro Plum




 let murderer = 'Professor Plum';

 if (murderer === 'Professor Plum') {
   let murderer = 'Mrs. Peacock';
 }

 const declareMurderer = function() {
   return `The murderer is ${murderer}.`;
 }

 const verdict = declareMurderer();
 console.log(verdict);




 //
 //
 // const scenario = {
 //   murderer: 'Mrs. Peacock',
 //   room: 'Conservatory',
 //   weapon: 'Lead Pipe'
 // };
 //
 // const changeScenario = function() {
 //   scenario.murderer = 'Mrs. Peacock';
 //   scenario.room = 'Dining Room';
 //
 //   const plotTwist = function(room) {
 //     if (scenario.room === room) {
 //       scenario.murderer = 'Colonel Mustard';
 //     }
 //
 //     const unexpectedOutcome = function(murderer) {
 //       if (scenario.murderer === murderer) {
 //         scenario.weapon = 'Candle Stick';
 //       }
 //     }
 //
 //     unexpectedOutcome('Colonel Mustard');
 //   }
 //
 //   plotTwist('Dining Room');
 // }
 //
 // const declareWeapon = function() {
 //   return `The weapon is ${scenario.weapon}.`
 // } // all constant can't change??
 //
 // changeScenario();
 // const verdict = declareWeapon();
 // console.log(verdict);
 //




 // let murderer = 'Professor Plum';
 //
 // const changeMurderer = function() {
 //   murderer = 'Mr. Green';
 //
 //   const plotTwist = function() {
 //     let murderer = 'Colonel Mustard';
 //
 //     const unexpectedOutcome = function() {
 //       murderer = 'Miss Scarlet';
 //     }
 //
 //     unexpectedOutcome();
 //   }
 //
 //   plotTwist(); // last flip to mustard
 // }
 //
 // const declareMurderer = function() {
 //   return `The murderer is ${murderer}.`;
 // }
 //
 // changeMurderer();
 // const verdict = declareMurderer();
 // console.log(verdict);






 // let murderer = 'Colonel Mustard';
 //
 // const changeMurderer = function() {
 //   murderer = 'Mr. Green';
 //
 //   const plotTwist = function() {
 //     murderer = 'Mrs. White';// does not chane
 //   }
 //
 //   plotTwist(); //no effect
 // }
 //
 // const declareMurderer = function () {
 //   return `The murderer is ${murderer}.`;
 // }
 //
 // changeMurderer();
 // const verdict = declareMurderer();
 // console.log(verdict);


 // const scenario = {
 //   murderer: 'Miss Scarlet',
 //   room: 'Kitchen',
 //   weapon: 'Candle Stick'
 // };
 //
 // const changeWeapon = function(newWeapon) {
 //   scenario.weapon = newWeapon;
 // }
 //
 // const declareWeapon = function() {
 //   return `The weapon is the ${scenario.weapon}.`;
 // }
 //
 // changeWeapon('Revolver');
 // const verdict = declareWeapon();
 // console.log(verdict); // think it changes but not sure





 // let suspectOne = 'Miss Scarlet';
 // let suspectTwo = 'Professor Plum';
 // let suspectThree = 'Mrs. Peacock';
 //
 // const declareAllSuspects = function() {
 //   let suspectThree = 'Colonel Mustard';
 //   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;// does not chnage because can't alter a constnace inside scope
 // }
 //
 // const suspects = declareAllSuspects();
 // console.log(suspects);
 // console.log(`Suspect three is ${suspectThree}.`);





 //
 // let murderer = 'Professor Plum';
 //
 // const declareMurderer = function() {
 //   let murderer = 'Mrs. Peacock';
 //   return `The murderer is ${murderer}.`;
 // }
 //
 // const firstVerdict = declareMurderer(); //
 // console.log('First Verdict: ', firstVerdict);
 //
 // const secondVerdict = `The murderer is ${murderer}.`;
 // console.log('Second Verdict: ', secondVerdict);












 // const scenario = {
 //   murderer: 'Mrs. Peacock',
 //   room: 'Conservatory',
 //   weapon: 'Lead Pipe'
 // };
 //
 // const changeScenario = function() {
 //   scenario.murderer = 'Mrs. Peacock';
 //   scenario.room = 'Dining Room'; //only change
 //
 //   const plotTwist = function(room) {
 //     if (scenario.room === room) {
 //       scenario.murderer = 'Colonel Mustard'; // still Peacock
 //     }
 //
 //     const unexpectedOutcome = function(murderer) {
 //       if (scenario.murderer === murderer) {
 //         scenario.weapon = 'Candle Stick';
 //       }
 //     }
 //
 //     unexpectedOutcome('Colonel Mustard'); //still peacock in dinding rom
 //   }
 //
 //   plotTwist('Dining Room');
 // }
 //
 // const declareWeapon = function() {
 //   return `The weapon is ${scenario.weapon}.` //still same
 // }
 //
 // changeScenario();
 // const verdict = declareWeapon();
 // console.log(verdict); // led pip










 //
 // let murderer = 'Professor Plum';
 //
 // const changeMurderer = function() {
 //   murderer = 'Mr. Green'; //mr green
 //
 //   const plotTwist = function() {
 //     let murderer = 'Colonel Mustard';
 //
 //     const unexpectedOutcome = function() {
 //       murderer = 'Miss Scarlet';
 //     }
 //
 //     unexpectedOutcome();
 //   }
 //
 //   plotTwist(); // bounce back to C mustard
 // }
 //
 // const declareMurderer = function() {
 //   return `The murderer is ${murderer}.`;
 // }
 //
 // changeMurderer();
 // const verdict = declareMurderer();
 // console.log(verdict);







 // let murderer = 'Colonel Mustard';
 //
 // const changeMurderer = function() {
 //   murderer = 'Mr. Green';
 //
 //   const plotTwist = function() { // chagne to mrs white
 //     murderer = 'Mrs. White';
 //   }
 //
 //   plotTwist();
 // }
 //
 // const declareMurderer = function () {
 //   return `The murderer is ${murderer}.`;
 // }
 //
 // changeMurderer();
 // const verdict = declareMurderer();
 // console.log(verdict);
