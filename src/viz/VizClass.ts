import { default as Heredity } from "../Heredity";

export default interface VizClass {
  readonly _heredity: Heredity;
  readonly _parentElement: HTMLElement;

  update(): void;
}