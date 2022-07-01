namespace VisualNovel {
    export async function theCurse(): ƒS.SceneReturn {
        console.log("Scene:  the Curse");

        let storyTexts: { [paragraphName: string]: StoryText } = {
            introduction: {
                Narrator_001: { text: "Es gingen viele Jahre in die Lande." },
                Narrator_002: { text: "Seitdem Tod des Vaters, hatte die Familie es nicht  immer leicht, da sie nicht viel Geld hatten." },
                Narrator_003: { text: "Die verdienten sich genug, indem sie Gemüse, selbst der Junge hat direkt nach dem Tod seiner Mutter auf dem Felt geholfen. " }
            },
            before_the_accident: {
                Mother_001: { text: "steh auf " + `${dataForSave.nameProtagonist}` + " wir müssen die Karotten ernten.", pose: POSES.HAPPY },
                Protagonist_002: { text: "ich komme gleich ich esse Kutz noch ein Stück Brot.", pose: POSES.HAPPY },
                Mother_003: { text: "ok ich gehe schon mal vor, komm dann nach.", pose: POSES.HAPPY },
                Narrator_004: { text: "nach dem " + `${dataForSave.nameProtagonist}` + " sein Brot gegessen hatte machte er sich auch auf dem Weg zum Feld." },
                Mother_005: { text: "Beim Feld angekommen fing er seiner Mutter zu helfen Karotten aus der Erde zu ziehen.", pose: POSES.HAPPY },
                Protagonist_006: { text: "mutter schau mal das ist aber eine komische Karotte.", pose: POSES.HAPPY },
                Narrator_007: { text: "der Junge fängt an der Pflanze zu ziehen." },
                Protagonist_008: { text: "die geht aber schwer raus.", pose: POSES.HAPPY },
                Narrator_009: { text: "Mutter dreht sich." },
                Mother_010: { text: "Mutter HALTTTTTT, das ist eine ….", pose: POSES.FRIGHTEND },
                Mother_011: { text: "….", pose: POSES.NEUTRAL },
                Narrator_012: { text: "der Junge zieht die Wurzel raus, die Mutter springt zu  " + `${dataForSave.nameProtagonist}` + " und hebt in den Ohren zu." }
                //U001:  { text: "AAAAAAAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH" -> Sound
            },
            after_the_accident: {
                Narrator_001: { text: "es wurde still und der junge dreht sich zu seiner Mutter um sich zu." },
                Mother_002: { text: "ich liebe….", pose: POSES.HAPPY },
                Protagonist_003: { text: "Mutter, mutter…MAMAAAAAAA.", pose: POSES.FRIGHTEND },
                Protagonist_004: { text: "Sag was.Ich muss Hilfe holen ich muss mich beeilen.", pose: POSES.FRIGHTEND },
                Narrator_005: { text: "Er legt die Muttervorsichtig zu Boden und fing an zu dem Dorfe zu rennen um den Arzt zu Holen." }
            },
            get_help: {
                Narrator_001: { text: `${dataForSave.nameProtagonist}` + " geht sich zu dem Dorf Arztl, und schildert ihm die Situation," },
                Narrator_002: { text: "Der Arzt namens Dr.Bader ging und " + `${dataForSave.nameProtagonist}` + " die gingen schnellstmöglich zum Feld zurück." }
            },
            talk_with_the_doctor: {
                Protagonist_001: { text: "Helfen sie bitte meiner Mutter.", pose: POSES.SAD },
                Doctor_002: { text: "Ich ferstehe jetzt was, passiert ist.Sie hat den schrei einer Alraune gehört und wurde dadurch zu stein verwandelt.", pose: POSES.SAD },
                Doctor_003: { text: "Ich kann ihr leider nicht helfen, keiner meiner Gegenstände kann gegen so ein mächtiger Zauber wie diesen etwas ausrichten.", pose: POSES.SAD },
                Protagonist_005: { text: "Es muss doch irgendetwas geben was wir tun können, sie ist das Einzige was ich habe.", pose: POSES.SAD },
                Doctor_006: { text: "bringen wir sie erstmals zurück ins Dorf.", pose: POSES.SAD }

            },
            transition_to_the_village: {
                Narrator_001: { text: "der Arzt und " + `${dataForSave.nameProtagonist}` + " bringen die Mutter vorsichtig zurück ins Dorf." }
            },
            about_the_way: {
                Protagonist_001: { text: "Bitte Dr.Bader es muss doch irgendwas geben was man tun kann, ich flehe sie an ich würde alles tun.", pose: POSES.SAD },
                Doctor_002: { text: "Wir brauchten jemand oder etwas was mächtig genug, ist, um diesen Zauber zu lösen und dies innerhalb der nächsten <b>7</b> Tage, danach, kann man nicht mehr für sie tun", pose: POSES.SAD },
                Doctor_003: { text: "Das einzige, das Mir bekannt wehre, ist ein Magische pflanze, die im " + `${locations.forest.name}` + "  Zu finden ist.", pose: POSES.SAD },
                Doctor_004: { text: "Es wir erzählt, dass sie inmitten dieses Waldes eine kleine Wiese ist, auf die Die Sonne durchs Dickicht leichtet. Auf dieser Wiese soll die Blume wachsen und magisch von der Sonne angeleuchtet werden.", pose: POSES.SAD },
                Doctor_005: { text: "Dieser ist aber ein 3 Tages marsch entfernt und der Weg ist sehr gefährlich.", pose: POSES.SAD },
                Protagonist_006: { text: "Ist mir egal ich muss es versuchen, wie komme ich zu dem Wald.", pose: POSES.SAD },
                Doctor_007: { text: "Du musst nach Norden zu den " + `${locations.grasslands.name}` + ", aber pass auf dort wimmelt es von Schleimen sie sind nicht zwar nicht stark, aber man sollte sich trotzdem von ihnen in Acht nehme.", pose: POSES.SAD },
                Doctor_008: { text: "nach den Felder kommst du zu dem " + `${locations.mountains.name}` + ", wenn du dich beeilst, kommst du noch bis heute Abend dort an.", pose: POSES.SAD },
                Doctor_009: { text: "ein Pfad führt durch das Gebirge, über diesen Weg ist es ein 2 Tages Marsch.", pose: POSES.SAD },
                Doctor_010: { text: "er ist ziemlich sicher aber ist lange. ", pose: POSES.SAD },
                Doctor_011: { text: "Man kann auch eine Klippe durch den Berg gehen, aber dort ist es steil und manchem tauchen dort Monster auf.", pose: POSES.SAD },
                Doctor_012: { text: "Dahinter ist schon der " + `${locations.forest.name}` + " .Die Blume scheint tief im Wald zu wachsen. ", pose: POSES.SAD },
                Doctor_013: { text: "Man sagt das in dem Wald ein endloses Labyrinth ist und schon Ewigkeiten Kamm keiner mehr aus dem Wald der Versucht hat die Blume zu pflücken.", pose: POSES.SAD },
                Protagonist_014: { text: "<i>Mein Vater hätte es sicher geschafft, ich wollte immer so sein, aber nach seinem Tod war mir bewusst was führ gefahren da daraus sind, und hatte nur noch Angst.</i>", pose: POSES.SAD },
                Protagonist_015: { text: "<i>Ich muss es versuchen, Sie ich bin daran Schuld die Alraune aus dem Boden zu gezogen zu haben.</i>", pose: POSES.SAD },
                Protagonist_016: { text: "<i>Alles ist meine Schuld.</i>", pose: POSES.SAD },
                Protagonist_017: { text: "Ich werde die Blume Holen, ich bin daran schuld an allem.", pose: POSES.SAD },
                Narrator_018: { text: `${dataForSave.nameProtagonist}` + "rennt in sein Zimmer hol seinen Rucksack.In die Küche packt etwas zu essen und trinken eine. Schnappt sich das " + `${items.sword.name}` + " was er von seinem Vater, was jetzt eher einem Doch nach der grösser ist und eilt zur Tür." },
                Doctor_019: { text: "Warte!!", pose: POSES.SAD },
                Doctor_020: { text: "Nimm da hier, ein " + `${items.healing_potion.name}` + ". Er ist zwar nur schwach, aber besser als gar nicht.", pose: POSES.SAD },
                Doctor_021: { text: "Ich hoffe du wirst ich nicht brauchen.", pose: POSES.SAD },
                Protagonist_022: { text: "Danke. Passen sie auf meine Mutter auf.", pose: POSES.SAD },
                Narrator_023: { text: "Und so machte sich " + `${dataForSave.nameProtagonist}` + " auf ein Abenteuer." }
            }


        };

        await playParagraph(storyTexts.introduction);
        //TODO:  übergang zum feld
        await playParagraph(storyTexts.before_the_accident);
        //TODO:  übergang mit Schrein (sound),  Erzähler: …,
        await playParagraph(storyTexts.after_the_accident);
        //TODO: Schawarzer hintergund
        await playParagraph(storyTexts.get_help);
        //TODO: zurück aufs Feld
        await playParagraph(storyTexts.talk_with_the_doctor);
        //TODO: zurück uns dorf übergang
        await playParagraph(storyTexts.transition_to_the_village);
        //TODO: Dorf sitchtabar machen
        await playParagraph(storyTexts.about_the_way);
        ƒS.Inventory.add(items.healing_potion);
        ƒS.Inventory.add(items.sword);
        ƒS.Inventory.add(items.water_bag);
        ƒS.Inventory.add(items.loaf_of_bread);
        return "4";
    }
}  