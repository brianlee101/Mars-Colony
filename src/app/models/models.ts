export interface Job {
    name: string;
    id: number;
    description: string;
}

export class NewColonist {
    name:string;
    age:number;
    job_id: Job; 
}

export interface Colonist {
    name: string;
    id: number;
    age: number;
    job: Job;
}

export interface Aliens {
    tupe: string;
    id: number;
    description: string;
    submitted: string;
}

export class NewEncounter{
    date: number;
    type: string;
    action: string; 
    colonist_id: string;
}

export interface Encounters {
    date: string;
    id: number;
    type: string;
    colonist_id: string;
}