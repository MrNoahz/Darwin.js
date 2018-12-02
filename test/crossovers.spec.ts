import { NumberChromosome } from "../src/chromosomes";
import {
  SinglePoint,
  SinglePointCross,
  TwoPoint,
  TwoPointCross,
  UniformCross,
  ArithmeticBlend
} from "../src/crossovers";

describe("Crossover tests", () => {
  let chrom1: NumberChromosome;
  let chrom2: NumberChromosome;

  beforeEach(() => {
    chrom1 = new NumberChromosome({}, 10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    chrom2 = new NumberChromosome({}, 10, [
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ]);
  });

  test("Single Point Crossover", () => {
    let [child1, child2] = SinglePoint(chrom1, chrom2, 5);
    expect(child1.genes).toEqual([1, 2, 3, 4, 5, 16, 17, 18, 19, 20]);
    expect(child2.genes).toEqual([11, 12, 13, 14, 15, 6, 7, 8, 9, 10]);
    [child1, child2] = SinglePoint(child1, child2, 5);
    expect(child1.genes).toEqual(chrom1.genes);
    expect(child2.genes).toEqual(chrom2.genes);
  });

  test("Single Point Crossover Random", () => {
    let [child1, child2] = SinglePointCross(chrom1, chrom2);
    expect(child1.genes).not.toEqual(chrom1.genes);
    expect(child2.genes).not.toEqual(chrom2.genes);
  });

  test("Two Point Crossover", () => {
    let [child1, child2] = TwoPoint(chrom1, chrom2, 3, 7);
    expect(child1.genes).toEqual([1, 2, 3, 14, 15, 16, 17, 8, 9, 10]);
    expect(child2.genes).toEqual([11, 12, 13, 4, 5, 6, 7, 18, 19, 20]);
    [child1, child2] = TwoPoint(child1, child2, 7, 3);
    expect(child1.genes).toEqual(chrom1.genes);
    expect(child2.genes).toEqual(chrom2.genes);
  });

  test("Two Point Crossover Random", () => {
    let [child1, child2] = TwoPointCross(chrom1, chrom2);
    expect(child1.genes).not.toEqual(chrom1.genes);
    expect(child2.genes).not.toEqual(chrom2.genes);
  });

  test("Uniform Crossover", () => {
    let [child1, child2] = UniformCross(chrom1, chrom2);

    expect(child1.genes).not.toEqual(chrom1.genes);
    expect(child2.genes).not.toEqual(chrom2.genes);
  });
  
  test("Arithmetic Blend Crossover", () => {
    let [child1, child2] = ArithmeticBlend(chrom1, chrom2);
    expect(child1.genes).not.toEqual(chrom1.genes);
    expect(child2.genes).not.toEqual(chrom2.genes);
    expect(child1.genes).toEqual(child2.genes);
  });
});