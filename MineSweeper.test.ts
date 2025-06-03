import { assertEquals } from "jsr:@std/assert";

/*function rechecheMineDroite(i:number):string{
    const premiereLigne=[".",".","*","*","."];
    let compteurMine=0;

    if(i<premiereLigne.length-1){
        if(premiereLigne[i+1]==="."){
            compteurMine=compteurMine;
        }else{
            compteurMine++;
        }
    }
    

    return compteurMine.toString();
}

function rechecheMineGauche(i:number):string{
    const premiereLigne=[".",".","*","*","."];
    let compteurMine=0;

    if(i>0){
        if(premiereLigne[i-1]==="."){
            compteurMine=compteurMine;
        }else{
            compteurMine++;
        }
    
    }
      
    return compteurMine.toString();
}*/

function rechecheMineCote(i:number):string{
    const premiereLigne=[".",".","*","*",".","*"];
    let compteurMine=0;

    if(premiereLigne[i]==="."){
        if(i<premiereLigne.length-1){
            if(premiereLigne[i+1]==="."){
                compteurMine=compteurMine;
            }else{
                compteurMine++;
            }
        }

        if(i>0){
            if(premiereLigne[i-1]==="."){
                compteurMine=compteurMine;
            }else{
                compteurMine++;
            }
        
        }
        return compteurMine.toString();

    }else return "*";

}

/*function rechecheMineHaut(i:number,p:number):string{
    const matrice=[
        [".",".","*","*","."],
        [".","*",".",".","."]
    ];
    let compteurMine=0;
    
    if(matrice[i][p]==="."){
        if(i>0){
            if(matrice[i-1][p]==="."){
                compteurMine=compteurMine;
            }else{
                compteurMine++
            }
        }
        return compteurMine.toString();
    }else return "*";  
}

function rechecheMineBas(i:number,p:number):string{
    const matrice=[
        [".",".","*","*","."],
        [".","*",".",".","."]
    ];
    let compteurMine=0;
    
    if(matrice[i][p]==="."){
         if(i<matrice.length-1){
            if(matrice[i+1][p]==="."){
                compteurMine=compteurMine;
            }else{
                compteurMine++
            }
        }
        return compteurMine.toString();
    }else return "*";  
}*/

function rechecheMineHautBas(i:number,p:number):string{
    const matrice=[
        [".",".","*","*","."],
        [".","*",".",".","."],
        [".","*","*",".","."]        
    ];
    let compteurMine=0;

    if(matrice[i][p]==="."){
        if(i<matrice.length-1){
            if(matrice[i+1][p]==="."){
                compteurMine=compteurMine;
            }else{
                compteurMine++
            }
        }

        if(i>0){
            if(matrice[i-1][p]==="."){
                compteurMine=compteurMine;
            }else{
                compteurMine++
            }
        }
        return compteurMine.toString();
    }else return "*";  
}

/*Deno.test("0 mine à droite", ()=>{
    assertEquals(rechecheMineDroite(0),"0");
});

Deno.test("1 mine à droite", ()=>{
    assertEquals(rechecheMineDroite(1),"1");
});

Deno.test("recherche mines à droite par rapport à la case la plus à droite de la ligne", ()=>{
    assertEquals(rechecheMineDroite(4),"0");
});

Deno.test("0 mine à gauche", ()=>{
    assertEquals(rechecheMineGauche(1),"0");
});

Deno.test("1 mine à gauche", ()=>{
    assertEquals(rechecheMineGauche(4),"1");
});

Deno.test("recherche mines à gauche par rapport à la case la plus à gauche de la ligne", ()=>{
    assertEquals(rechecheMineGauche(0),"0");
});*/

Deno.test("0 mine à droite et à gauche", ()=>{
    assertEquals(rechecheMineCote(0),"0");
});

Deno.test("1 mine d'un cote", ()=>{
    assertEquals(rechecheMineCote(1),"1");
});

Deno.test("1 mine de chaque cote", ()=>{
    assertEquals(rechecheMineCote(4),"2");
});

/*Deno.test("0 mine au dessus", ()=>{
    assertEquals(rechecheMineHaut(1,0),"0");
});

Deno.test("recherche mine au dessu de la ligne la plus haute", ()=>{
    assertEquals(rechecheMineHaut(0,0),"0");
});

Deno.test("0 mine en dessous", ()=>{
    assertEquals(rechecheMineBas(0,0),"0");
});

Deno.test("recherche mine en dessous de la ligne la plus basse", ()=>{
    assertEquals(rechecheMineBas(1,0),"0");
});*/

/*Deno.test("1 mine en haut", ()=>{
    assertEquals(rechecheMineHautBas(1,2),"1");
});*/

Deno.test("1 mine en haut et 1 en bas", ()=>{
    assertEquals(rechecheMineHautBas(1,2),"2");
});











