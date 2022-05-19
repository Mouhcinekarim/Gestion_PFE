export interface GroupPfe {
    pfeInfoId:number;
	email:string;
	description:string;
	titre:string;	
	niveau:string;
	GroupId:number;
	anne:number;
	etudiant:Etudiant[];
	nom_prof:string;
	prenom_prof:string;
	email_prof:string;
	
}

interface Etudiant {
    EtudiantId:number;
    nom:string;
    prenom:string;
    Appogee:string;
}