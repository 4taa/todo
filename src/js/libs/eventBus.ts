export default class EventBus {
    constructor(private events: Map<string, any>) {}

    callEvent(key: string, ...args) {
        try {
            this.events.get(key)(...args);
        } catch (error) {
            throw error;
        }
    }

    addCallback(key: string, callback: Function) {
        try {
            this.events.set(key, callback);
        } catch (error) {
            throw error;
        }
    }
}