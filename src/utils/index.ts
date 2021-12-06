/**
 * Root for your util libraries.
 *
 * You can import them in the src/template/index.ts,
 * or in the specific file.
 *
 * Note that this repo uses ES Modules, so you have to explicitly specify
 * .js extension (yes, .js not .ts - even for TypeScript files)
 * for imports that are not imported from node_modules.
 *
 * For example:
 *
 *   correct:
 *
 *     import _ from 'lodash'
 *     import myLib from '../utils/myLib.js'
 *     import { myUtil } from '../utils/index.js'
 *
 *   incorrect:
 *
 *     import _ from 'lodash'
 *     import myLib from '../utils/myLib.ts'
 *     import { myUtil } from '../utils/index.ts'
 *
 *   also incorrect:
 *
 *     import _ from 'lodash'
 *     import myLib from '../utils/myLib'
 *     import { myUtil } from '../utils'
 *
 */

function sum(numbers: number[]) {
  return numbers.reduce((sum, number) => sum + number, 0)
}

function createMatrix(size: number) {
  return [...new Array<number>(size)].map(() => new Array<number>(size).fill(0))
}

function transpose2DMatrix(matrix: any[][]) {
  return matrix[0].map((_, i) => matrix.map((x) => x[i]))
}

function flipBits(bits: string) {
  return bits
    .split('')
    .map((bit) => (bit === '1' ? '0' : '1'))
    .join('')
}

function bin(decimal: string) {
  return parseInt(decimal, 2)
}

export { sum, createMatrix, transpose2DMatrix, flipBits, bin }
