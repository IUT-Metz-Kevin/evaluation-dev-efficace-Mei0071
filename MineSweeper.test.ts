import { assertEquals } from "jsr:@std/assert";

function rechecheMineCote(i:number):number{
    const premirerLigne=[".",".","*","*","."];
    let compteurMine=0;

    if(premirerLigne[i+1]==="."){
        compteurMine=compteurMine;
    }else{
        compteurMine++;
    }

    return compteurMine;
}

Deno.test("0 mine à droite", ()=>{
    assertEquals(rechecheMineCote(0),0);
});

Deno.test("1 mine à droite", ()=>{
    assertEquals(rechecheMineCote(1),1);
});

Deno.test("recherche mines à droite par rapport à la case la plus à droite de la ligne", ()=>{
    assertEquals(rechecheMineCote(4),0);
});