class MyParagraph extends HTMLElement {
  constructor() {
    super();
    // templateタグに「my-paragraph」というIDを振ってあるので、それを起点にテンプレートの情報を取得する
    let template = document.getElementById('my-paragraph');
    let templateContent = template.content;

    // テンプレの内容が他のDOMに影響を及ぼさないように、シャドウDOMを使用する
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    // シャドウルートの内部に、id=my-paragraphで取得した内容をコピーして追加する
    shadowRoot.appendChild(templateContent.cloneNode(true));
  }
}
// 「my-paragraph」という名前のhtmlタグに対して、MyParagraphクラスで書いた機能を定義する
customElements.define('my-paragraph', MyParagraph);
