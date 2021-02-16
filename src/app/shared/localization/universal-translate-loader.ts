import { TranslateLoader } from "@ngx-translate/core";
import { Observable } from "rxjs";

import * as enUS from '../../../translations/en-US.json';
import * as frFR from '../../../translations/fr-FR.json';

export class UniversalTranslateLoader implements TranslateLoader {
    
    public getTranslation(lang: string): Observable<any> {
        return new Observable((observer:any) => {
            console.log("Translation loader lang " + lang)
            if(lang === 'fr'){
                observer.next(frFR);
                console.log(" fr ==>", frFR);
            } else{
                observer.next(enUS);
                console.log(" en ==>", enUS);
            }
            observer.complete();
        })
    }

} 