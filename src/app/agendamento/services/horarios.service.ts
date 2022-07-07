import { Injectable } from "@angular/core";
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { Observable } from "rxjs";
import { HorariosDisponiveisFirebaseModel } from "../model/horarios-disponiveis-firebase.model";
@Injectable({
    providedIn: 'root'
})
export class HorarioService {
    constructor(
        public _firestore: Firestore
    ) { }

    buscaHorariosDisponiveis(dia: string): Observable<HorariosDisponiveisFirebaseModel>  {
        const agendaDocRef = doc(this._firestore, `agendamento/${dia}`);        
        return docData(agendaDocRef) as Observable<HorariosDisponiveisFirebaseModel>;        
    }
}