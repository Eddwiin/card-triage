import { Arrhythmias } from "@ct-core/enum/arrhythmias.enum";
import { CardStatus } from "@ct-core/enum/card-status.enum";

export interface CardApiResponse {
    id: number;
    created_date: string;
    patient_name: string;
    status: CardStatus;
    arrhythmias: Arrhythmias[]
}