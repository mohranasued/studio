import { Injectable } from "@angular/core";
import { ServicoModel } from "../model/servicos.model";

@Injectable({
    providedIn: 'root'
})
export class ServicosService {
    constructor() { }

    getServicos(): ServicoModel[] {
        return [
            {
                id: 1,
                nome: 'Design Estratégico',
                descricao: 'É uma técnica aonde fazemos a epilação correta dos fios, deixando elas harmônicas e tem como objetivo valorizar o rosto e expressão da cliente. Para isso, é levado em consideração o mapeamento e estrutura do seu rosto dentro do visagismo.',
                imgUrl: '../../assets/img/img01.jpeg',
                preco: 35
            },
            {
                id: 2,
                nome: 'Design Estratégico + Henna',
                descricao: 'Henna tem a função de corrigir pequenas falhas, alongar e realçar as sobrancelhas. Com a durabilidade na pele de 5 a 8 dias.',
                imgUrl: '../../assets/img/img02.jpeg',
                preco: 45
            },
            {
                id: 3,
                nome: 'Design Estratégico + Tintura',
                descricao: 'A tintura tem como função colorir os fios brancos , sem agredir os fios , durabilidade de 20 a 30 dias.',
                imgUrl: '../../assets/img/img03.jpeg',
                preco: 45
            },
            {
                id: 4,
                nome: 'Epilação de Buço',
                descricao: 'Função de remover os pelos do buço com auxílio de cera.',
                imgUrl: '../../assets/img/img03.jpeg',
                preco: 8
            },
            {
                id: 5,
                nome: 'Brow Lamination',
                descricao: 'Essa técnica usa a sobrancelha natural da pessoa e com a ajuda de produtos químicos, a deixa com aspecto de volumosa e com os pelos mais alinhados”,  durabilidade de 40 a 60 dias.',
                imgUrl: '../../assets/img/img03.jpeg',
                preco: 100
            },
            {
                id: 6,
                nome: 'Micropigmentação Labial',
                descricao: 'Com a micropigmentação você conquista lábios com a cor que você deseja, podendo ser em tons mais naturais até aos mais vibrantes, como o vermelho. Também pode corrigir assimetrias e imperfeições como cicatrizes! Técnica realizada com auxílio de anestésico tópico.',
                imgUrl: '../../assets/img/img03.jpeg',
                preco: 320
            },            
            {
                id: 7,
                nome: 'Nanopigmentação Sombrancelhas',
                descricao: 'Implantação de um pigmento na primeira camada da pele , aproximando a aparência dos pelos reais da sobrancelha. E também temos o efeito Shadow que aparenta o efeito da henna , ambas com durabilidade de 8 a 12 meses.',
                imgUrl: '../../assets/img/img03.jpeg',
                preco: 320
            },            
        ]
    }
}