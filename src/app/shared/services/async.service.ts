import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
export class AsyncService {
    greetAsync(name:string):Promise<string>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(`Hi, ${name}`)
            },100);
        });
    };

}