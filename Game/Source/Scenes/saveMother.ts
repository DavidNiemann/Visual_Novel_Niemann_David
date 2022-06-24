namespace VisualNovel {
    export async function saveMother(): ƒS.SceneReturn {
        console.log("Scene: seve Mother");

        let storyTexts: { [paragraphName: string]: StoryText } = {
            save_mother_with_flower: {

                Protagonist_001: { text: `${characters.doctor.name}` + " ich bin endlich zurück,</i>", pose: POSES.HAPPY },
                Protagonist_002: { text: "ich habe die Blume gefunden und dabei.", pose: POSES.HAPPY },
                Doctor_003: { text: "Endlich bist du zurück, ich habe mir schon sorgen gemacht.", pose: POSES.HAPPY },
                Doctor_004: { text: "Gib mir die Blume.", pose: POSES.HAPPY },
                Narrator_005: { text: `${dataForSave.nameProtagonist}` + "  übergibt die Blume " + `${characters.doctor.name}` },
                Narrator_006: { text: `${characters.doctor.name}` + " verarbeite die Blume zu Medizin und schüttet die die Flüssichkeit über die Regungslose Mutter." },
                Mother_007: { text: "...", pose: POSES.NEUTRAL },
                Protagonist_008: { text: "Du lebst...", pose: POSES.HAPPY },
                Mother_009: { text: "was ist passiert das Letzte was ich mich erinnern ist das wir auf dem Feld waren.", pose: POSES.NEUTRAL },
                Doctor_010: { text: "du wurdest von dem Zauber einer Alraune versteinert, " + `${dataForSave.nameProtagonist}` + " hat eine Heil Mittel aus dem " + `${locations.forest.name}` + " geholt.", pose: POSES.HAPPY },
                Mother_011: { text: "Ich erinnere mich, vielen Dank mein Sohn, der Wald ist doch min weit, wie lange war ich versteinert.", pose: POSES.NEUTRAL },
                Doctor_012: { text: "Sie waren " + `${dataForSave.dayCounter}` + " weg, wenn es noch länger und wir hätten dich nicht zurückholen können", pose: POSES.HAPPY },
                Mother_013: { text: "Vielen danke euch.", pose: POSES.NEUTRAL },
                Protagonist_014: { text: "Dank mir nicht, ich war an der ganzen Situation auch schuld.", pose: POSES.HAPPY },
                Mother_015: { text: "ich danke dir. Nicht jeder hätte es Geschäft die Blume rechtzeitig besorgen", pose: POSES.NEUTRAL },
                Mother_016: { text: "Das erinnert mich an deinen Vater.", pose: POSES.NEUTRAL },

            },
            save_mother_with_wather: {

                Protagonist_017: { text: `${characters.doctor.name}` + " ich bin endlich zurück,</i>", pose: POSES.HAPPY },
                Protagonist_018: { text: "Ich habe zwar nicht die Blume dabei, aber ich habe die Fee gefunden.", pose: POSES.HAPPY },
                Protagonist_019: { text: "Sie hat mir magisches Wasser übergebe mit de wir meine Mutter auch retten können.", pose: POSES.HAPPY },
                Doctor_020: { text: "Endlich bist du zurück, ich habe mir schon sorgen gemacht.", pose: POSES.HAPPY },
                Doctor_021: { text: "also waren die Geschichten wahr, aber gib mir zuerst Wasser, die Geschichte kannst du mir später erzählen", pose: POSES.HAPPY },
                Narrator_022: { text: `${dataForSave.nameProtagonist}` + " übergibt das quell Wesser " + `${characters.doctor.name}` },
                Narrator_023: { text: `${characters.doctor.name}` + " schüttet die wasser über die Regungslose Mutter." },
                Mother_024: { text: "...", pose: POSES.NEUTRAL },
                Protagonist_025: { text: "Du lebst...", pose: POSES.HAPPY },
                Mother_026: { text: "was ist passiert das Letzte was ich mich erinnern ist das wir auf dem Feld waren.", pose: POSES.NEUTRAL },
                Doctor_027: { text: "du wurdest von dem Zauber einer Alraune versteinert, " + `${dataForSave.nameProtagonist}` + " hat Quell Wasser von der Fee geholt" + `${locations.forest.name}` + " geholt.", pose: POSES.HAPPY },
                Mother_028: { text: "Ich erinnere mich, vielen Dank mein Sohn, der Wald ist doch min weit, wie lange war ich versteinert.", pose: POSES.NEUTRAL },
                Doctor_029: { text: "Sie waren " + `${dataForSave.dayCounter}` + " weg, wenn es noch länger und wir hätten dich nicht zurückholen können", pose: POSES.HAPPY },
                Mother_030: { text: "Vielen danke euch.", pose: POSES.NEUTRAL },
                Protagonist_031: { text: "Dank mir nicht, ich war an der ganzen Situation auch schuld.", pose: POSES.HAPPY },
                Mother_032: { text: "ich danke dir. Nicht jeder hätte es Geschäft die Gunst einer Fee zu bekommen und ihr Quellwasser zu bekommen rechtzeitig besorgen", pose: POSES.NEUTRAL },
                Mother_033: { text: "Das erinnert mich an deinen Vater.", pose: POSES.NEUTRAL }

            }

        };

        if (ƒS.Inventory.getAmount(items.magic_water) > 0) {
            await playParagraph(storyTexts.save_mother_with_wather);
        } else {
            await playParagraph(storyTexts.save_mother_with_flower);
        }

        return "99";

    }

}
