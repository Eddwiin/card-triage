import { Arrhythmias } from "@ct-core/enum/arrhythmias.enum";
import { CardStatus } from "@ct-core/enum/card-status.enum";

export const CARDS_MOCK = [
    {
        "arrhythmias": [
            Arrhythmias.AFib,
            Arrhythmias.AVBlock,
            Arrhythmias.Pause,
            Arrhythmias.PSVC,
            Arrhythmias.PVC
        ],
        "created_date": "2020-03-10T13:14:59+0000",
        "id": 0,
        "patient_name": "Bob",
        "status": CardStatus.Pending
    },
    {
        "arrhythmias": [
            Arrhythmias.Pause
        ],
        "created_date": "2020-01-01T00:12:21+0000",
        "id": 1,
        "patient_name": "Bill",
        "status": CardStatus.Rejected
    },
    {
        "arrhythmias": [
            Arrhythmias.AFib,
            Arrhythmias.Pause
        ],
        "created_date": "2019-12-31T00:11:14+0000",
        "id": 2,
        "patient_name": "Elsa",
        "status": CardStatus.Done
    },
    {
        "arrhythmias": [
            Arrhythmias.PVC,
            Arrhythmias.PSVC,
            Arrhythmias.AFib
        ],
        "created_date": "2019-01-23T00:18:34+0000",
        "id": 3,
        "patient_name": "Flora",
        "status": CardStatus.Rejected
    },
    {
        "arrhythmias": [
            Arrhythmias.AVBlock,
            Arrhythmias.PVC
        ],
        "created_date": "2019-02-21T00:08:58+0000",
        "id": 4,
        "patient_name": "Marc",
        "status": CardStatus.Pending
    },
    {
        "arrhythmias": [
            Arrhythmias.Pause,
            Arrhythmias.PVC,
            Arrhythmias.PSVC
        ],
        "created_date": "2019-02-21T00:09:32+0000",
        "id": 5,
        "patient_name": "John",
        "status": CardStatus.Pending
    }
]