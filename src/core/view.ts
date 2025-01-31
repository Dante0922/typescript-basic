export default abstract class View {
    private template: string;
    private renderTemplate: string;
    private contatiner: HTMLElement;
    private htmlList: string[];

    constructor(containerId: string, template: string) {
        const containerElement = document.getElementById
        (containerId);
        if (!containerElement) {
            throw '최상위 컨테이너가 없어 UI를 진행하지 못합니다.';
        }

        this.contatiner = containerElement;
        this.template = template;
        this.renderTemplate = template;
        this.htmlList = [];
    }

    protected updateView(): void {
        this.contatiner.innerHTML = this.renderTemplate;
        this.renderTemplate = this.template;
    }

    protected addHtml(htmlString: string): void {
        this.htmlList.push(htmlString);
    }

    protected getHtml(): string {
        const snapshot = this.htmlList.join('');
        this.clearHtmlList();
        return snapshot;
    }

    protected setTemplateData(key: string, value: string): void {
        this.renderTemplate = this.renderTemplate.replace(`{{__${key}__}}`, value);
    }

    private clearHtmlList() {
        this.htmlList = [];
    }

    abstract render(id: string): void;
}