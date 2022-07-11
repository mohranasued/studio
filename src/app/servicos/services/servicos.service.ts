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
                imgUrl: 'https://raw.githubusercontent.com/mohranasued/studio/main/src/assets/img/img1.jpeg',
                preco: 35
            },
            {
                id: 2,
                nome: 'Design Estratégico + Henna',
                descricao: 'Henna tem a função de corrigir pequenas falhas, alongar e realçar as sobrancelhas. Com a durabilidade na pele de 5 a 8 dias.',
                imgUrl: 'https://raw.githubusercontent.com/mohranasued/studio/main/src/assets/img/img2.jpeg',
                preco: 45
            },
            {
                id: 3,
                nome: 'Design Estratégico + Tintura',
                descricao: 'A tintura tem como função colorir os fios brancos , sem agredir os fios , durabilidade de 20 a 30 dias.',
                imgUrl: 'https://raw.githubusercontent.com/mohranasued/studio/main/src/assets/img/img3.jpeg',
                preco: 45
            },
            {
                id: 4,
                nome: 'Epilação de Buço',
                descricao: 'Função de remover os pelos do buço com auxílio de cera.',
                imgUrl: 'https://raw.githubusercontent.com/mohranasued/studio/main/src/assets/img/img4.jpeg',
                preco: 8
            },
            {
                id: 5,
                nome: 'Brow Lamination',
                descricao: 'Essa técnica usa a sobrancelha natural da pessoa e com a ajuda de produtos químicos, a deixa com aspecto de volumosa e com os pelos mais alinhados”,  durabilidade de 40 a 60 dias.',
                imgUrl: 'https://raw.githubusercontent.com/mohranasued/studio/main/src/assets/img/img5.jpeg',
                preco: 100
            },
            {
                id: 6,
                nome: 'Micropigmentação Labial',
                descricao: 'Com a micropigmentação você conquista lábios com a cor que você deseja, podendo ser em tons mais naturais até aos mais vibrantes, como o vermelho. Também pode corrigir assimetrias e imperfeições como cicatrizes! Técnica realizada com auxílio de anestésico tópico.',
                imgUrl: 'https://raw.githubusercontent.com/mohranasued/studio/main/src/assets/img/img6.jpeg',
                preco: 320
            },            
            {
                id: 7,
                nome: 'Nanopigmentação Sobrancelhas',
                descricao: 'Implantação de um pigmento na primeira camada da pele , aproximando a aparência dos pelos reais da sobrancelha. E também temos o efeito Shadow que aparenta o efeito da henna , ambas com durabilidade de 8 a 12 meses.',
                imgUrl: 'https://raw.githubusercontent.com/mohranasued/studio/main/src/assets/img/img7.jpeg',
                preco: 320
            }, 
            {
                id: 8,
                nome: 'Curso de Design de Sobrancelhas',
                descricao: 'Curso de Design estratégico vip, do básico ao avançado 🌸.',
                imgUrl: 'https://raw.githubusercontent.com/mohranasued/studio/main/src/assets/img/img8.jpeg',
                preco: 0
            },                       
        ]
    }
}