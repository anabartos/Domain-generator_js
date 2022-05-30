let pronoum = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = [".net", ".com", ".es"];

const generateDomain = () => {
  for (let i = 0; i < pronoum.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domain.length; l++) {
          let text = `${pronoum[i]}${adj[j]}${noun[k]}${domain[l]}`;
          console.log(text);
        }
      }
    }
  }
};

generateDomain();
