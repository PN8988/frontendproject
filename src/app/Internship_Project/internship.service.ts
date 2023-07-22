import{ Injectable} from '@angular/core'
import { Interns } from './intern';
import{Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class InterService{

    private baseUrl="http://localhost:8080/interns";

    constructor(private http:HttpClient){ }

    //get interns by id
    getIntern(id:number):Observable<Interns>{
        return this.http.get<Interns>(`${this.baseUrl}/${id}}`);
    }

    //registrering data intern
    registerInterns(intern:Interns):Observable<Object>{
        return this.http.post(`${this.baseUrl}`,intern);

    }
}