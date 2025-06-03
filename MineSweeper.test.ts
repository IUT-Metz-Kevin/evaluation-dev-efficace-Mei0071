import { assertEquals } from "jsr:@std/assert";

function rechecheMineDroite(i:number):number{
    const premirerLigne=[".",".","*","*","."];
    let compteurMine=0;

    if(i<premirerLigne.length-1){
        if(premirerLigne[i+1]==="."){
            compteurMine=compteurMine;
        }else{
            compteurMine++;
        }
    }
    

    return compteurMine;
}

function rechecheMineGauche(i:number):number{
    const premirerLigne=[".",".","*","*","."];
    let compteurMine=0;

    if(i>0){
        if(premirerLigne[i-1]==="."){
            compteurMine=compteurMine;
        }else{
            compteurMine++;
        }
    
    }
      
    return compteurMine;
}


Deno.test("0 mine à droite", ()=>{
    assertEquals(rechecheMineDroite(0),0);
});

Deno.test("1 mine à droite", ()=>{
    assertEquals(rechecheMineDroite(1),1);
});

Deno.test("recherche mines à droite par rapport à la case la plus à droite de la ligne", ()=>{
    assertEquals(rechecheMineDroite(4),0);
});

Deno.test("0 mine à gauche", ()=>{
    assertEquals(rechecheMineGauche(1),0);
});

Deno.test("1 mine à gauche", ()=>{
    assertEquals(rechecheMineGauche(4),1);
});

Deno.test("recherche mines à gauche par rapport à la case la plus à gauche de la ligne", ()=>{
    assertEquals(rechecheMineGauche(0),0);
});

Deno.test("0 mine à droite et à gauche", ()=>{
    assertEquals(rechecheMineCote(0),0);
});

