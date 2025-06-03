import { assertEquals } from "jsr:@std/assert";

Deno.test("0 mines à droite", ()=>{
    assertEquals(rechecheMineCote(0),0);
});