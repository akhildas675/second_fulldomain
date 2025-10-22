class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
        this.count = 0;
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
        this.count++;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }

    size() {
        console.log(this.count);
    }

    longest() {
        let longestWord = this._findLongest(this.root, "");
        console.log(longestWord);
    }

    _findLongest(node, currentWord) {
        let longest = currentWord;

        for (let char in node.children) {
            let nextWord = currentWord + char;
            let childNode = node.children[char];

            if (childNode.isEndOfWord) {
                let candidate = this._findLongest(childNode, nextWord);
                if (candidate.length > longest.length) {
                    longest = candidate;
                }
            } else {
                let candidate = this._findLongest(childNode, nextWord);
                if (candidate.length > longest.length) {
                    longest = candidate;
                }
            }
        }

        return longest;
    }
}

// Example usage:
let trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("application");
trie.insert("banana");

console.log(trie.search("apple")); // Output: true
console.log(trie.search("app"));   // Output: true
console.log(trie.startsWith("app")); // Output: true
trie.size();
trie.longest(); // Output: "application" (as it is the longest word in the Trie)