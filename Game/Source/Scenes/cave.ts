/* 
Übergang zu Die Große Fee
Die Große Fee
Erzähler: als <name> die Höhle  betritt hört er ein leises Singen
Protagonist: „was ist das, singt Hier eine Frau?“
Protagonist: “vielleicht hat sich hier noch andere Menschen Verlaufen“
Erzähler: <name>  geht tiefer in die Höhle.
Erzähler: nach einer Weile tauchte eine Quelle vor ihm auf.
Protagonist: Eine Quelle?!
Protagonist: aber es scheint niemand hier zu sein, das Singen ist auch verstummt.   
Erzähler: <name> schreitet and die Quelle Heran 
Erzähler: plötzlich taucht eine junge Frau von Geisterhand über der Quelle auf.
Große Fee: hehehe ich bin die Große Fee diese Quelle
Große Fee: mich hat seinen Jahrhunderten niemand mehr besucht
Große Fee: Was für dich zu mir?
Protagonist: ich haben mich im Wald verlaufen. 
Protagonist: ich war auf der such nach den <Blumenbamen>?
Große Fee: hehehe so ist, dass, warum bist du suchst du diese, du musst, ein langer Weg hinter dir haben, 
Übergang mit Schrift: „Erzählt seine Geschichte“ 
Große Fee: ich sehen du versuchst deine Mutter zu retten, wie Helden Haft  hehehe.
Protagonist: ich bin kein Held, durch meine Unwissenheit, Kamm es erst zu dieser Situation. 
Protagonist: und die Blumen habe ich auch noch nicht gefunden. 
Große Fee: du bist doch schon so nah an denen Ziel, du wirst doch nicht aufgeben.
Protagonist: ich werde nicht auf Geben, aber ich habe keine Zeit, ich muss die Blumen finden und sie in mein Dorf bringen, bevor es zu spät ist. 
Große Fee: hehehe
Protagonist: kannst du mir nicht den Weg zu den Blumen zeigen.
Große Fee: das könnte ich, aber tue ich nicht hehehe.
Protagonist: warum nicht? Dann werde ich sie selbst suchen 
Große Fee: Du hast eine reines herz und starken willen. 
Große Fee: hehehe
Große Fee: Du kannst statt der Blume, eine Glas Wasser dieser Magischen haben, das sollte das sollte deiner Mutter Rettern Können. Die Blumen haben auch nur diese Kraft, weil sie Wasser aus dieser Quelle beziehen. Dass Das Wasser sogar größer Erfolgschance hat,  hehehe. 
Protagonist:  vielen Dank 
Große Fee: es war schön mit dir zu reden hehehe.
Erzähler: Füllte einen Wasser Tasche voll mit dem Quellwasser. 
Protagonist: „Warum wird mir wird schwindelig “
Erzähler: <name> wird schwarz vor Augen
Übergang 

Nächster morgen
Erzähler: <name> wacht am nächsten morgen am Eingang des Waldes wieder auf  
Protagonist:  „was ist da passiert ich war doch gerade noch in einer Höhler mit einer Fee“
Erzähler: er schaut in seine Tasche
Protagonist: „zum Glück ich habe noch das Wasser ich hoffe die Fee hat mich nicht angelogen “
 Protagonist dann mache ich mich wohl auf den Heimweg:
Übergang zu Zeitung ins Dorf 
 */

namespace VisualNovel {
    export async function cave(): ƒS.SceneReturn {
        console.log("Scene: the cave");

        let storyTexts: { [paragraphName: string]: StoryText } = {
            the_cave: {
                Narrator_001: { text: `${dataForSave.nameProtagonist}` + " quälte sich durch enges getrübt bis vor einer Höhle vor ihm erscheint." },
                Protagonist_02: { text: "<i> Eine Höhle?!, ich bin hier will falsch.</i>", pose: POSES.HAPPY },
                Protagonist_03: { text: "<i> Es wird schon wieder Dunkel, ich muss den ganze tag in dem Wald umhergeirrt sein.</i>", pose: POSES.HAPPY },
                Protagonist_04: { text: "<i> Ich muss aufpassen das kein Monster darin wohnt.</i>", pose: POSES.HAPPY },
                Protagonist_05: { text: "<i> Bis jetzt war der Wald sehr ruhig, ich denke nicht, dass hier ein Monster lebt.</i>", pose: POSES.HAPPY },
                Protagonist_06: { text: "<i> Ich muss wohl bis zum morgen Schutz in der Höhle suchen.</i>", pose: POSES.SAD },
            }


        };
        await playParagraph(storyTexts.the_cave);
    }
    

}
/* Erzähler: <name> quälte sich durch enges getrübt bis vor einer Höhle vor ihm erscheint.  
Protagonist: „eine Höhle?!, ich bin hier will falsch“
Protagonist: es wird schon wieder Dunkel, ich muss den ganze tag in dem Wald umhergeirrt sein.
Protagonist: ich muss aufpassen das kein Monster darin wohnt. 
Protagonist: bis jetzt war der Wald sehr ruhig, ich denke nicht, dass hier ein Monster lebt.
Protagonist: ich muss wohl bis zum morgen Schutz in der Höhle suchen. */