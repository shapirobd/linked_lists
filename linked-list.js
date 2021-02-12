/** Node: node for a singly linked list. */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

/** LinkedList: chained together nodes. */

class LinkedList {
	constructor(vals = []) {
		this.head = null;
		this.tail = null;
		this.length = 0;

		for (let val of vals) this.push(val);
	}

	/** push(val): add new value to end of list. */

	push(val) {
		const newNode = new Node(val);
		if (!this.tail) {
			this.head = newNode;
		} else {
			this.tail.next = newNode;
		}
		this.tail = newNode;
		this.length += 1;
	}

	/** unshift(val): add new value to start of list. */

	unshift(val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.tail = newNode;
		} else {
			newNode.next = this.head;
		}
		this.head = newNode;
		this.length += 1;
	}

	/** pop(): return & remove last item. */

	pop() {
		try {
			if (this.length === 0) {
				throw new Error("Error: Empty list");
			}
			let currentNode = this.head;
			let nodeToPop = this.tail;
			if (this.head === this.tail) {
				this.head = null;
				this.tail = null;
				this.length -= 1;
				return nodeToPop.val;
			}
			while (currentNode.next) {
				if (currentNode.next !== nodeToPop) {
					currentNode = currentNode.next;
				} else {
					currentNode.next = null;
					this.tail = currentNode;
					this.length -= 1;
					return nodeToPop.val;
				}
			}
		} catch (e) {
			console.error(e);
		}
	}

	/** shift(): return & remove first item. */

	shift() {
		try {
			if (this.length === 0) {
				throw new Error("Error: Empty list");
			}
			let nodeToShift = this.head;
			if (this.head === this.tail) {
				this.head = null;
				this.tail = null;
				this.length -= 1;
				return nodeToShift.val;
			}
			this.head = this.head.next;
			nodeToShift.next = null;
			this.length -= 1;
			return nodeToShift.val;
		} catch (e) {
			console.error(e);
		}
	}

	/** getAt(idx): get val at idx. */

	getAt(idx) {
		try {
			let currentNode = this.head;
			for (let i = 0; i <= idx; i++) {
				if (i === idx) {
					return currentNode.val;
				}
				currentNode = currentNode.next;
			}
			throw new Error("Error: Invalid index");
		} catch (e) {
			console.error(e);
		}
	}

	/** setAt(idx, val): set val at idx to val */

	setAt(idx, val) {
		try {
			let currentNode = this.head;
			for (let i = 0; i <= idx; i++) {
				if (i === idx) {
					currentNode.val = val;
					return;
				}
				currentNode = currentNode.next;
			}
			throw new Error("Error: Invalid index");
		} catch (e) {
			console.error(e);
		}
	}

	/** insertAt(idx, val): add node w/val before idx. */

	insertAt(idx, val) {
		try {
			if (this.length === 0) {
				this.push(val);
				return;
			}
			const insertedNode = new Node(val);
			if (idx === 0) {
				insertedNode.next = this.head;
				this.head = insertedNode;
				return;
			}
			let currentNode = this.head;
			for (let i = 0; i < idx; i++) {
				if (i === idx - 1) {
					if (!currentNode.next) {
						this.tail.next = insertedNode;
						this.tail = insertedNode;
					} else {
						insertedNode.next = currentNode.next;
						currentNode.next = insertedNode;
					}
					this.length += 1;
					return;
				} else {
					currentNode = currentNode.next;
				}
			}
			throw new Error("Error: Invalid index");
		} catch (e) {
			console.error(e);
		}
	}

	/** removeAt(idx): return & remove item at idx, */

	removeAt(idx) {
		try {
			let currentNode = this.head;
			if (idx === 0) {
				return this.shift();
			}
			for (let i = 0; i < idx; i++) {
				if (i === idx - 1) {
					const removedNode = currentNode.next;
					if (removedNode === this.tail) {
						this.tail = currentNode;
					}
					currentNode.next = currentNode.next.next;
					this.length -= 1;
					return removedNode.val;
				}
				currentNode = currentNode.next;
			}
			throw new Error("Error: Invalid index");
		} catch (e) {
			console.error(e);
		}
	}

	/** average(): return an average of all values in the list */

	average() {
		if (this.length === 0) {
			return 0;
		}
		let currentNode = this.head;
		let sum = 0;
		let count = 0;
		while (currentNode) {
			sum += currentNode.val;
			count++;
			currentNode = currentNode.next;
		}
		return sum / count;
	}
}

module.exports = LinkedList;
