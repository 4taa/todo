export default class View {
    private element: HTMLElement;
    private template: any;

    constructor(element: any, template: any) {
        this.element = element;
        this.template = template;
    }

    render(data: any) {
        this.element.innerHTML = this.template;
    }
}
