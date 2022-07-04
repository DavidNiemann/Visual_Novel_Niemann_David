namespace VisualNovel {
    export async function prehistory(): ƒS.SceneReturn {
        console.log("start Story", "Scene:  prehistory");

        let storyTexts: { [paragraphName: string]: StoryText } = {
            backstory: {
                Narrator_001: { text: "In einer fantastischen Welt, in der zu überall Magie finden war," },
                Narrator_002: { text: "egal ob im tiefsten Wald oder in den Städten." },
                Narrator_003: { text: "Über all konnte man ein Hauch von Magie vernehmen." },
                Narrator_004: { text: "Es gab magische Kreaturen, manche den Menschen gut gesinnt , aber viele auch waren grauenhafte Monster." },
                Narrator_005: { text: "Der Mensch studierte diese Kraft und lernte sie für sich zu nutzen." },
                Narrator_006: { text: "Zwar es konnten nur Wenige Menschen die Magie mit eigener Kraft beherrschen und jene die dies Konnten waren mächtig und hoch angesehen." },
                Narrator_007: { text: "Dennoch stellten die Menschen Werkzeuge her mit den Jeder teile der diese leicht beeinflussen Konten." },
                Narrator_008: { text: "Mit diesen konnte man schnell Verletzungen heilen, schwere Lasten tragen, das Dunkle erleuchten und vieles mehr." },
                Narrator_009: { text: " Die Magie war das Schönste was man sich vorstellen hat den Menschen ein einfaches Leben ermöglicht," },
                Narrator_010: { text: "aber so gut sie auch sein mag so viele gefahren war mit Ihr verbunden und war der Schlimmste Gabe." }

            }

        };

        if (inventoryLoaded == false) {
            await loadInvetory();
            inventoryLoaded = true;
        }
  
        await ƒS.Sound.fade(sounds.adventureMusic, 0.5, 1, true);
        await playParagraph(storyTexts.backstory);
        await ƒS.Speech.tell(characters.narrator, "Dieser Junge heißt ");
        dataForSave.nameProtagonist = await ƒS.Speech.getInput();
        characters.protagonist.name = dataForSave.nameProtagonist;
        return "2";
    }
  
}  