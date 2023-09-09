import { ajax } from 'rxjs/ajax';
import { map, catchError, interval } from 'rxjs';

export default class RxJs {
    constructor(getMessages, url) {
        this.getMessages = getMessages;
        this.url = url;
    }

    init() {
        const repeats$ = interval(2000);
        repeats$.subscribe({
            next: () => {
                const obs$ = ajax.getJSON(this.url).pipe(
                    map(userResponse => this.getMessages(userResponse)),
                    catchError(error => {
                        console.log('error: ', error);
                        return;
                    })
                );        
                
                obs$.subscribe({
                    next: value => console.log(value),
                    error: err => console.log(err)
                });
            }
        })
    }
}