const enToJa = {
  "ivysaur": "フシギソウ",
  "charizard": "リザードン",
  "bulbasaur": "フシギダネ"
}

const jsToen = {};
for (const key in enToJa) {
  const val = enToJa[key]
  jsToen[val] = key
};

console.log(jsToen);
