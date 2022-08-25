class KeyPairs {
  constructor() {
    this.a = new Map()
    this.b = new Map()
  }

  setPair(keyA, keyB) {
    this.a.set(keyA, keyB)
    this.b.set(keyB, keyA)
  }

  getBFromA(keyA) {
    return this.a.get(keyA)
  }

  getAFromB(keyB) {
    return this.b.get(keyB)
  }

  hasA(keyA) {
    return this.a.has(keyA)
  }

  hasB(keyB) {
    return this.b.has(keyB)
  }

  clear() {
    this.map.clear()
  }

  deleteByA(keyA) {
    const keyB = this.a.get(keyA)
    this.a.delete(keyA)
    this.b.delete(keyB)
  }

  deleteByB(keyB) {
    const keyA = this.b.get(keyB)
    this.a.delete(keyA)
    this.b.delete(keyB)
  }

  getPairs() {
    return Array.from(this.a.entries())
  }
}

export default KeyPairs
