namespace VisualNovle {

    export async function grassland(): ƒS.SceneReturn {
        console.log("Scene:  grassland");

        let storiesText = {
            before_the_fight: {
                Narrator_001: "nach paar Stunden ist  " + `${dataForSave.nameProtagonist}` + " schon mitten auf den " + `${locations.grasslands.name}` + " unterwegs, es ist ruhig. ",
                Narrator_002: `${dataForSave.nameProtagonist}` + " ist seit der das Dorf verlassen hat auf niemanden mehr gestoßen.",
                Protagonist_003: "<i>Dr.Bader hat gesagt hier wimmelt es von Schleimen ich sollte mich eher in Acht nehmen, zum Glück bin ich noch keinem begegnet.</i>",
                Narrator_004: "nach einer Weile raschelt es in einem Busch neben ihn.",
                Narrator_005: "es springen 3 Schleime vor um ihn herum und verspären in dem Weg",
                Protagonist_006: "<i>ich muss mich beeilen.</i>",
                Protagonist_007: "<i>ich komm nicht durch ich muss wohl Kämpfen.</i>",
                Narrator_008: `${dataForSave.nameProtagonist}` + "greifen zu seinem Schwert."
            },
            after_the_fight: {

                Narrator_009: "Die Restlichen schleime suchen das Weite.",
                Protagonist_010: "<i>endlich ist es vorbei, ich muss schnell weiter und darf keine Zeit verlieren.</i>",
                Narrator_011: `${dataForSave.nameProtagonist}` + " läuft den Weg weiter."
            }

        };

        await ƒS.Location.show(locations.grasslands);
        await ƒS.update(1);
        await playParagraph(storiesText.before_the_fight);
        //Dodo: add fight 
        await playParagraph(storiesText.after_the_fight);
    }
}


