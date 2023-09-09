import VisualManager from "./VisualManager";
import RxJs from "./RxJs";

export default class Chat {
  constructor(container) {
    this.contentBox = null;
    this.user = null;
    this.manager = new VisualManager(container);
    this.url = 'https://rxjs-backend-7vq2.onrender.com/messages/unread';
  }

  init() {
    this.manager.createDashboard();
    this.manager.showMails();
    this.getMessages = this.getMessages.bind(this);
    this.rxjs = new RxJs(this.getMessages, this.url);
    this.rxjs.init();
  }

  async getMessages(res) {
    if(res.status === 'ok') {
      res.messages.forEach(msg => {
        this.createMessage(msg)
      });
    }    
  }

  createMessage(msg) {    
    if(msg) {
      this.manager.addMessage(msg);
    }
  }
}