const kebabCasify = (str: string) =>
  str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

/** @macro **/
export function styled(stylesheet: Record<string, string | number>) {
  let css = "";

  for (const key in stylesheet) {
    const value = stylesheet[key];

    css += `${kebabCasify(key)}:${value};`;
  }

  return css;
}
