import { Injectable } from "@angular/core";
import { arrayRemove, arrayUnion, collection, collectionChanges, collectionData, deleteDoc, doc, docData, docSnapshots, Firestore, getDocs, query, setDoc, where } from '@angular/fire/firestore';
import { AgendadasModel } from "../model/agendadas.model";


@Injectable({
    providedIn: 'root'
})
export class AdministracaoServices {
    constructor(
        public _firestore: Firestore
    ) { }

    async buscarAgendamentos(data: string): Promise<AgendadasModel[]> {
        const q = query(collection(this._firestore, 'agendadas'), where('data', '==', data));    
        const snapshot = await getDocs(q);    
        return snapshot.docs.map((doc) => ({
            ...doc.data(), id: doc.id
        })) as AgendadasModel[];
    }

    async removerReservaAgendadas(id: string) {
        console.log(id);
        //const q = query(collection(this._firestore, `agendadas/${id}`)/*, where('dir', '==', id)*/);   
        const agendaDocRef = doc(this._firestore, `agendadas/${id}`);   
        return deleteDoc(agendaDocRef);
    }    

    removerReservaAgendamento(dia: string, hora: string) {
        const agendaDocRef = doc(this._firestore, `agendamento/${dia}`);  
        return setDoc(agendaDocRef, {horarios: arrayRemove(hora)}, { merge: true });
    }
}