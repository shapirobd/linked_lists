/** Node: node for a doubly linked list. */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

/** DoublyLinkedList: chained together nodes. */

class DoublyLinkedList {
	constructor(vals = []) {
		this.head = null;
		this.tail = null;
		this.length = 0;

		for (let val of vals) this.push(val);
	}

	/** push(val): add new value to end of list. */

	push(val) {
		const newNode = new Node(val);
		if (this.length === 0) {
			this.head = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
		}
		this.tail = newNode;
		this.length += 1;
	}

	/** unshift(val): add new value to start of list. */

	unshift(val) {
		const newNode = new Node(val);
		if (this.length === 0) {
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head.prev = newNode;
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
			let nodeToPop = this.tail;
			if (this.head === this.tail) {
				this.head = null;
				this.tail = null;
				this.length -= 1;
				return nodeToPop.val;
			}
			let newTail = this.tail.prev;
			newTail.next = null;
			this.tail = newTail;
			this.length -= 1;
			return nodeToPop.val;
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
			let newHead = this.head.next;
			newHead.prev = null;
			this.head = newHead;
			this.length -= 1;
			return nodeToShift.val;
		} catch (e) {
			console.error(e);
		}
	}

	/** getAt(idx): get val at idx. */

	getAt(idx) {
		try {
			let currentLeftNode = this.head;
			let currentRightNode = this.tail;
			let midIdx = Math.floor(this.length - 1 / 2);
			for (let i = 0; i <= midIdx; i++) {
				if (i === idx) {
					return currentLeftNode.val;
				} else if (this.length - 1 - i === idx) {
					return currentRightNode.val;
				} else {
					currentLeftNode = currentLeftNode.next;
					currentRightNode = currentRightNode.prev;
				}
			}
			throw new Error("Error: Invalid index");
		} catch (e) {
			console.error(e);
		}
	}

	/** setAt(idx, val): set val at idx to val */

	setAt(idx, val) {
		try {
			let currentLeftNode = this.head;
			let currentRightNode = this.tail;
			let midIdx = Math.floor(this.length - 1 / 2);
			for (let i = 0; i <= midIdx; i++) {
				if (i === idx) {
					currentLeftNode.val = val;
					return;
				}
				if (this.length - 1 - i === idx) {
					currentRightNode.val = val;
					return;
				}
				currentLeftNode = currentLeftNode.next;
				currentRightNode = currentRightNode.prev;
			}
			throw new Error("Error: Invalid index");
		} catch (e) {
			console.error(e);
		}
	}

	/** insertAt(idx, val): add node w/val before idx. */

	insertAt(idx, val) {
		try {
			if (this.length === 0 || idx === this.length) {
				this.push(val);
				return;
			}
			if (idx === 0) {
				this.unshift(val);
				return;
			}
			const insertedNode = new Node(val);
			let currentLeftNode = this.head;
			let currentRightNode = this.tail;
			let midIdx = Math.floor(this.length - 1 / 2);
			for (let i = 0; i < midIdx; i++) {
				if (i === idx) {
					currentLeftNode.prev.next = insertedNode;
					insertedNode.prev = currentLeftNode.prev;
					currentLeftNode.prev = insertedNode;
					insertedNode.next = currentLeftNode;
					this.length += 1;
					return;
				}
				if (this.length - 1 - i === idx) {
					currentRightNode.prev.next = insertedNode;
					insertedNode.prev = currentRightNode.prev;
					currentRightNode.prev = insertedNode;
					insertedNode.next = currentRightNode;
					this.length += 1;
					return;
				}
				currentLeftNode = currentLeftNode.next;
				currentRightNode = currentRightNode.prev;
			}
			throw new Error("Error: Invalid index");
		} catch (e) {
			console.error(e);
		}
	}

	/** removeAt(idx): return & remove item at idx, */

	removeAt(idx) {
		try {
			if (this.length === 0 || idx === this.length - 1) {
				this.pop();
				return;
			}
			if (idx === 0) {
				this.shift();
				return;
			}
			let currentLeftNode = this.head;
			let currentRightNode = this.tail;
			let midIdx = Math.floor(this.length - 1 / 2);
			for (let i = 0; i < midIdx; i++) {
				if (i === idx) {
					let removedNode = currentLeftNode;
					currentLeftNode.prev.next = currentLeftNode.next;
					currentLeftNode.next.prev = currentLeftNode.prev;
					this.length -= 1;
					return removedNode;
				}
				if (this.length - 1 - i === idx) {
					let removedNode = currentRightNode;
					currentRightNode.prev.next = currentRightNode.next;
					currentRightNode.next.prev = currentRightNode.prev;
					this.length += 1;
					return removedNode;
				}
				currentLeftNode = currentLeftNode.next;
				currentRightNode = currentRightNode.prev;
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

module.exports = DoublyLinkedList;
