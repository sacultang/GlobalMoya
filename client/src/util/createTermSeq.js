export const createTermSeq = (editItemsLength) => {
  function midString(prev, next) {
    let p, n, pos, str;
    for (pos = 0; p === n; pos++) {
      p = pos < prev.length ? prev.charCodeAt(pos) : 96;
      n = pos < next.length ? next.charCodeAt(pos) : 123;
    }
    str = prev.slice(0, pos - 1);
    if (p === 96) {
      while (n === 97) {
        n = pos < next.length ? next.charCodeAt(pos++) : 123;
        str += "a";
      }
      if (n === 98) {
        str += "a";
        n = 123;
      }
    } else if (p + 1 === n) {
      str += String.fromCharCode(p);
      n = 123;
      while ((p = pos < prev.length ? prev.charCodeAt(pos++) : 96) === 123) {
        str += "z";
      }
    }
    return str + String.fromCharCode(Math.ceil((p + n) / 2));
  }

  let strings = [];
  let innerFunc = function () {
    const createStringLoop = () => {
      strings = ["a", "c"];

      while (strings.length < editItemsLength) {
        let rnd = Math.floor(Math.random() * (strings.length - 1));
        strings.splice(rnd + 1, 0, midString(strings[rnd], strings[rnd + 1]));
      }
    };

    if (editItemsLength === 1) {
      strings = [...strings, "a"];
    } else if (editItemsLength === 2) {
      strings = [...strings, "a", "c"];
    } else {
      createStringLoop();
    }
    return strings;
  };

  return innerFunc();
};
