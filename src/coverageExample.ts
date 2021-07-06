'use strict';

/**
 * CoverageExample class
 *
 * @class CoverageExample
 */
export default class CoverageExample {
  /**
   * Creates an instance of CoverageExample.
   *
   * @param {Object} options
   *
   * @memberof CoverageExample
   */
  constructor(options: any) {
    console.log('Create a new CoverageExample instance');
  }

  run(number: number) {
    for(let i=0; i<number; i++){
      console.log('This is a test');
      if(i==10){
        console.log('Buzz');
      }
    }
  }
}
