function seq(...initial) {
  const funcs = [...initial.filter((f) => typeof f === "function")];

  function chain(next) {
    if (typeof next === "number") {
      return funcs.reduceRight((acc, fn) => fn(acc), next);
    }
    if (typeof next === "function") {
      funcs.push(next);
      return chain;
    }
    return chain;
  }

  return chain;
}
