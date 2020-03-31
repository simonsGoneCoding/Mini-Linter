let story =
  'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ["really", "very", "basically"];
let unnecessaryWords = ["extremely", "literally", "actually"];

const storyWords = story.split(" ");
console.log(storyWords.length);

//remove unnesessary words from story arr
let betterWords = [];

storyWords.filter(item => {
  if (item !== "literally" && item !== "extremely" && item !== "actually") {
    betterWords.push(item);
  }
});

betterWords;

// count overused words:

const pointUnwanted = arr => {
  let really = 0;
  let very = 0;
  let basically = 0;

  arr.forEach(item => {
    switch (item) {
      case overusedWords[0]:
        really++;
        break;

      case overusedWords[1]:
        very++;
        break;

      case overusedWords[2]:
        basically++;
        break;
    }
  });
  return `Overused words: really x${really}, very x${very}, basically x${basically}`;
};

console.log(pointUnwanted(betterWords));

// counting sentences.

const countSentences = arr => {
  let numberOfSentences = 0;
  arr.forEach(item => {
    // . or ! end the sentence and the're always at the end of wach element.
    const lastCharacter = item.length - 1;
    if (item[lastCharacter] === "." || item[lastCharacter] === "!") {
      numberOfSentences++;
    }
  });
  return `The number of sentences in paragraph is: ${numberOfSentences}`;
};

console.log(countSentences(betterWords));

console.log(`The word count: ${betterWords.length}`);
console.log(`The sentece count: ${countSentences(betterWords)}`);
console.log(`The overused words are: ${pointUnwanted(betterWords)}`);
