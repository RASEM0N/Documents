class PopupInfo extends HTMLElement {

    // отслеживаем измение аттрибутов в купе с методом attributeChangedCallback
    static observedAttributes = ['text', 'image', 'position']

    static templateName = 'template-popup-info'

    static template() {
        const ref = document.getElementById(PopupInfo.templateName);
        const content = ref.content.cloneNode(true);

        return {
            content,
            image: content.querySelector('img'),
            text: content.querySelector('.text')
        }
    }

    constructor() {
        super();

        // https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow
        const shadow = this.attachShadow({ mode: 'closed' })
        const { content, image, text } = PopupInfo.template()

        this._templateImage = image;
        this._templateText = text;

        shadow.appendChild(content);
    }


    attributeChangedCallback(name, oldValue, newValue) {

        if (oldValue === newValue) {
            return;
        }

        switch (name) {
            case 'text': {
                return this._changeText(newValue)
            }

            case 'image': {
                return this._changeImage(newValue);
            }

            case 'position': {
                return this._changePosition(newValue);
            }

            default: {
                break;
            }
        }
    }

    _changeImage(value) {
        if (value) {
            this._templateImage.src = value;
        } else {
            this._templateImage.src = 'img/default.png'
        }
    }

    _changeText(value) {
        if (value) {
            this._templateText.textContent = value;
        } else {
            this._templateText.textContent = 'None'
        }
    }

    _changePosition(value) {
        this._templateText.className = 'text'

        if (value === 'right') {
            return this._templateText.classList.add('text_right')
        }

        if (value === 'left') {
            return this._templateText.classList.add('text_left')
        }
    }
}

customElements.define('popup-info', PopupInfo)


document.getElementById('content').innerHTML = `
    <popup-info style="transform: scale(1.5);" text="Какой-то текст" image="" position="right"></popup-info>
    <popup-info text="Хочу арбуз" image="img/alt.png" position="left"></popup-info>
`