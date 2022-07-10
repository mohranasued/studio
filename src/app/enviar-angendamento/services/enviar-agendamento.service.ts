import { Injectable } from "@angular/core";
import { addDoc, arrayUnion, doc, Firestore, setDoc } from '@angular/fire/firestore';
import { Observable } from "rxjs";
import { InfoClienteModel } from "../model/info-cliente.model";
import * as uuid from 'uuid';

@Injectable({
    providedIn: 'root'
})
export class EnviarAgendamentoService {
    constructor(
        public _firestore: Firestore
    ) { }

    adicionarReserva(dia: string, hora: string) {
        const agendaDocRef = doc(this._firestore, `agendamento/${dia}`);  
        return setDoc(agendaDocRef, { horarios: arrayUnion(hora) }, { merge: true });
    }

    adicionarInfoCliente(infoCliente: InfoClienteModel) {
        const agendaDocRef = doc(this._firestore, `agendadas/${uuid.v4()}`);  
        return setDoc(agendaDocRef, {
            nome: infoCliente.nome,
            sobrenome: infoCliente.sobrenome ?? '',
            celular: infoCliente.celular,
            observacao: infoCliente.observacao ?? '',
            data: infoCliente.data,
            hora: infoCliente.hora
        });
    }
}