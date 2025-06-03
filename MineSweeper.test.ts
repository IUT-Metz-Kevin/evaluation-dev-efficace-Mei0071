import { assertEquals } from "jsr:@std/assert";

function rechecheMine(i:number,p:number):string{
    const matrice=[
        [".",".","*","*","."],
        ["*","*","*",".","."],
        ["*",".","*",".","."],        
        ["*","*","*",".","."]        
    ];
    let compteurMine=0;

    if(matrice[i][p]==="."){
        if(i<matrice.length-1){
            if(matrice[i+1][p]==="."){
                compteurMine=compteurMine;
            }else{
                compteurMine++
            }

            if(matrice[i][p+1]==="."){
                compteurMine=compteurMine;
            }else{
                compteurMine++
            }
        }

        if(p<matrice[p].length-1){
            if(matrice[i-1][p+1]==="."){
                    compteurMine=compteurMine;
                }else{
                    compteurMine++;
            }

            if(matrice[i+1][p+1]==="."){
                    compteurMine=compteurMine;
                }else{
                    compteurMine++;
            }
        }

        if(i>0){
            if(matrice[i-1][p]==="."){
                compteurMine=compteurMine;
            }else{
                compteurMine++
            }

            if(matrice[i][p-1]==="."){
                 compteurMine=compteurMine;
            }else{
                compteurMine++
            }
        }

        if(p<0){
            if(matrice[i-1][p-1]==="."){
                compteurMine=compteurMine;
            }else{
                compteurMine++;
            }

            if(p<0){
                if(matrice[i+1][p-1]==="."){
                    compteurMine=compteurMine;
                }else{
                    compteurMine++;
                }
            }
        }

        return compteurMine.toString();
    }else return "*";  
}

Deno.test("recherche mine  tous les cotes", ()=>{
    assertEquals(rechecheMine(2,1),"8");
});














