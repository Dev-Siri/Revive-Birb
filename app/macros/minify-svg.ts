import { optimize } from "svgo";

/** @macro **/
export function minifySVG(svgMarkup: string) {
  const { data } = optimize(svgMarkup);

  return data;
}
