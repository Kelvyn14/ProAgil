import { Lote } from "./Lote";
import { RedeSocial } from "./RedeSocial";
import { Palestrante } from "./Palestrante";

export interface Evento {
    id: number;
    local: string;
    dataEvento: Date;
    tema: string;
    qtdPessoas: number;
    uRL: string;
    telefone: string;
    email: string;
    lotes: Lote[];
    sociais: RedeSocial[];
    eventos: Palestrante[];
    imagemURL: string;
}
