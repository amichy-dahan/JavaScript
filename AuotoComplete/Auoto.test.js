const AutoCompleteTrie = require('./AutoCompleteTrie');




describe('addWord', () => {
  test('add str to the obj', () => {
    const trie= new AutoCompleteTrie('')
    expect(trie.addWord("adfff")).toBe(true);
  });
   test('add str to the obj', () => {
    const trie= new AutoCompleteTrie('')
    expect(trie.addWord("")).toBe(false);
  });
});


describe('findWord', () => {
  test('find str to the obj', () => {
    const trie= new AutoCompleteTrie('')
trie.addWord("car")
    expect(trie.findWord("car")).toBe(true);
  });
   test('find str to the obj', () => {
    const trie= new AutoCompleteTrie('')
    expect(trie.findWord("asdasd")).toBe(false);
  });
});

describe('predictWords', () => {
  test('predictWords returns array with added word', () => {
    const trie= new AutoCompleteTrie('')
    trie.addWord("car")
    expect(trie.predictWords("car")).toEqual(["car"]);
  });
   test('predictWords returns array with added word', () => {
    const trie= new AutoCompleteTrie('')
    expect(trie.predictWords("asdasd")).toEqual([]);
  });
});