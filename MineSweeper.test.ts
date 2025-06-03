import { assertEquals } from "jsr:@std/assert";

function rechecheMineCote(i:number):number{
    const premirerLigne=[".",".","*","*","."];
    let compteurMine=0;

    if(premirerLigne[i+1]==="."){
        compteurMine=compteurMine;
    }

    return compteurMine;
}

Deno.test("0 mines à droite", ()=>{
    assertEquals(rechecheMineCote(0),0);
});