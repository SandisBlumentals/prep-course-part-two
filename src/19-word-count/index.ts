/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */

class Words {
  

  count(str: string) {
  
    const wordCounts: Record<string, number> = {}; // learn about record

    const wordsFromString = str.toLowerCase().split((/[\s,_-]+/));
    
    for (const word of wordsFromString) {
      if (word == "") continue;
      if (wordCounts[word]) {
          wordCounts[word]++;
      } else {
          wordCounts[word] = 1;
      }
  }
    return wordCounts;
  }
}

export { Words };
