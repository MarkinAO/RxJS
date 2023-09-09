export default class VisualManager {
    constructor(container) {
        this.container = container;
        this.contentBox = null;
    }    

    createDashboard() {        
        const container = document.createElement('div');
        container.classList.add('container');
        this.container.appendChild(container);

        const decorPanel = document.createElement('div');
        decorPanel.classList.add('decorPanel');
        container.appendChild(decorPanel);
        for (let i = 0; i < 3; i++) {
            const cercle = document.createElement('span');
            cercle.classList.add('cercle');
            decorPanel.appendChild(cercle);
        }

        this.contentBox = document.createElement('div');
        this.contentBox.classList.add('contentBox');
        container.appendChild(this.contentBox);
    }
    
    showMails() {
        const mailwrap = document.createElement('div');
        mailwrap.classList.add('mail__wrap');
        this.contentBox.append(mailwrap);

        const mailArea = document.createElement('div');
        mailArea.classList.add('mail__area');
        mailwrap.append(mailArea);        
    }

    addMessage(mes) {        
        const mailArea = document.querySelector('.mail__area');    

        const messageWrap = document.createElement('div');
        messageWrap.classList.add('message-wrap');

        const messageBody = document.createElement('div');
        messageBody.classList.add('message-body');

        const from = document.createElement('div');
        from.textContent = mes.from;

        const text = document.createElement('div');
        text.classList.add('message-title');
        if(mes.subject.length > 15) {
            const slice = mes.subject.slice(0, 15);
            text.textContent = slice + '...';
        } else {
            text.textContent = mes.subject;
        }
        
        const timestamp = document.createElement('div');
        timestamp.textContent = mes.received.toLocaleString().slice(0, -3);      
        
        messageWrap.append(messageBody);
        messageBody.append(from);
        messageBody.append(text);
        messageBody.append(timestamp);
        mailArea.prepend(messageWrap);        
    }    
}