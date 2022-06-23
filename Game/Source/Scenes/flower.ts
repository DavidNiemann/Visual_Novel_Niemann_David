namespace VisualNovel {
    export async function flower(): ƒS.SceneReturn {
        console.log("Scene:  flower");

        let storyTexts: { [paragraphName: string]: StoryText } = {
            flower_field: {
                Narrator_001: { text: `${dataForSave.nameProtagonist}` + " hat das Ende des Waldes erreicht." },
                Narrator_002: { text: "Als er Das Sonnen licht betritt öffnet sich vor ihm eine kleine Wise voller weisen Kleinen Blumen." },
                Narrator_003: { text: "Die Blüten reflektieren das Licht, und funkeln wie eine Sternen Himmel neben dem Schatten der Bäume." },
                Protagonist_004: { text: "<i>Es ist wunder Schön.</i>", pose: POSES.HAPPY },
                Protagonist_005: { text: "<i>Ich habe es Geschäft.</i>", pose: POSES.HAPPY },
                Protagonist_006: { text: "<i>ich muss schell die Blumen Holen, und so schnell wie möglich wieder auf den Heimweg machen.</i>", pose: POSES.HAPPY },
                Narrator_007: { text: `${dataForSave.nameProtagonist}` + " nimmt sich einen Straus der Blume mit uns steckt sie in das Restwasser in seinem Beutel, dass sie nicht verrocken, und machst sich wieder auf den Weg aus dem Wald." },
                Protagonist_008: { text: "<i>Zum Glück habe ich mir den Weg gemerkt.</i>", pose: POSES.HAPPY }
            },
            way_back: {
                Narrator_009: { text: "Passend zum sonnen Untergang, schaft es <name > aus dem Wald heraus." },
                Protagonist_010: { text: "<i>ich habe es geschafft. Ich bin aus dem Wald draußen, bevor die Sonne untergegangen ist, </i>", pose: POSES.HAPPY },
                Protagonist_011: { text: "<i>Morgenfrühe mache ich mich direkt auf den Weg zurück ins Dorf.</i>", pose: POSES.HAPPY }


            },
            next_morning: {
                Protagonist_012: { text: "<i> ich habe nicht mehr viel Zeit. Auf ins Dorf. </i>", pose: POSES.HAPPY }
            }

        };

        await playParagraph(storyTexts.flower_field);
        //TODO: übergang 
        await playParagraph(storyTexts.way_back);

        dataForSave.dayCounter += 1;
        //TODO: übergang Nechster Tag
        await playParagraph(storyTexts.next_morning);
       
    }


}  