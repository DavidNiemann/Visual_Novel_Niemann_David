namespace VisualNovel {
    export async function prehistory(): ƒS.SceneReturn {
        console.log("start Story", "Scene:  prehistory");

        let storiesText = {
            backstory: {
                Narrator_001: "In einer fantastischen Welt, in der zu überall Magie finden war,",
                Narrator_002: "egal ob im tiefsten Wald oder in den Städten.",
                Narrator_003: "Über all konnte man ein Hauch von Magie vernehmen.",
                Narrator_004: "Es gab magische Kreaturen, manche den Menschen gut gesinnt , aber viele auch waren grauenhafte Monster.",
                Narrator_005: "Der Mensch studierte diese Kraft und lernte sie für sich zu nutzen.",
                Narrator_006: "Zwar es konnten nur Wenige Menschen die Magie mit eigener Kraft beherrschen und jene die dies Konnten waren mächtig und hoch angesehen.",
                Narrator_007: "Dennoch stellten die Menschen Werkzeuge her mit den Jeder teile der diese leicht beeinflussen Konten.",
                Narrator_008: "Mit diesen konnte man schnell Verletzungen heilen, schwere Lasten tragen, das Dunkle erleuchten und vieles mehr.",
                Narrator_009: " Die Magie war das Schönste was man sich vorstellen hat den Menschen ein einfaches Leben ermöglicht,",
                Narrator_010: "aber so gut sie auch sein mag so viele gefahren war mit Ihr verbunden und war der Schlimmste Gabe."
                
            }
              
        };
          
        await playParagraph( storiesText.backstory);

        await ƒS.Speech.tell(characters.narrator, "Dieser Junge heißt");
        dataForSave.nameProtagonist = await ƒS.Speech.getInput();
        characters.protagonist.name =  dataForSave.nameProtagonist;
    }
}  