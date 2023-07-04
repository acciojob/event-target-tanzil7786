class EventTarget {
    constructor() {
      this.listeners = new Map();
    }
  
    addEventListener(event, callback) {
		if (!this.listeners.has(event)) {
			this.listeners.set(event, new Set());
		}
    this.listeners.get(event).add(callback);
    }
  
    removeEventListener(event, callback) {
		if (this.listeners.has(event)) {
			const eventListeners = this.listeners.get(event);
			eventListeners.delete(callback);
			if (eventListeners.size === 0) {
				this.listeners.delete(event);
			}
		}
    }
  
    dispatchEvent(event) {
		if (this.listeners.has(event)) {
			const eventListeners = this.listeners.get(event);
			eventListeners.forEach((callback) => {
				callback();
			});
		}
    }
  }
  
