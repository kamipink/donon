class HashingUtility {
    constructor(input) {
        this.input = input;
        this._hash = this.computeHash(input);
    }

    computeHash(input) {
        // Example hash computation (this is just a placeholder for real hashing logic)
        let hash = 0;
        for (let i = 0; i < input.length; i++) {
            const char = input.charCodeAt(i);
            hash = (hash << 5) - hash + char;
            hash |= 0; // Convert to 32bit integer
        }
        return hash.toString(16);
    }

    getHash() {
        return this._hash;
    }
}

const hasher = new HashingUtility("example input");
console.log(hasher.getHash());  // Outputs the computed hash of the input
