namespace VisualNovle {
    export async function theCurse(): ƒS.SceneReturn {
        console.log("Scene:  the Curse");

        let storiesText = {
            introduction: {
                Narrator_text_001: "Es gingen viele Jahre in die Lande.",
                Narrator_text_002: "Seitdem Tod des Vaters, hatte die Familie es nicht  immer leicht, da sie nicht viel Geld hatten.",
                Narrator_text_003: "Die verdienten sich genug, indem sie Gemüse, selbst der Junge hat direkt nach dem Tod seiner Mutter auf dem Felt geholfen. "
            },
            before_the_accident: {
                Mother_text_001: "steh auf " + `${dataForSave.nameProtagonist}` + " wir müssen die Karotten ernten.",
                Protagonist_text_002: "ich komme gleich ich esse Kutz noch ein Stück Brot.",
                Mother_text_003: "ok ich gehe schon mal vor, komm dann nach.",
                Narrator_text_004: "nach dem " + `${dataForSave.nameProtagonist}` + " sein Brot gegessen hatte machte er sich auch auf dem Weg zum Feld.",
                Mother_text_005: "Beim Feld angekommen fing er seiner Mutter zu helfen Karotten aus der Erde zu ziehen.",
                Protagonist_text_006: "mutter schau mal das ist aber eine komische Karotte.",
                Narrator_text_007: "der Junge fängt an der Pflanze zu ziehen.",
                Protagonist_text_008: "die geht aber schwer raus.",
                Narrator_text_009: "Erzähler: Mutter dreht sich.",
                Mother_text_010: "Mutter HALTTTTTT, das ist eine ….",
                Mother_text_011: "….",
                Narrator_text_012: "der Junge zieht die Wurzel raus, die Mutter springt zu  " + `${dataForSave.nameProtagonist}` + " und hebt in den Ohren zu."
                //U001: "AAAAAAAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH" -> Sound
            },
            after_the_accident: {
                Narrator_text_001: "es wurde still und der junge dreht sich zu seiner Mutter um sich zu.",
                Mother_text_002: "ich liebe….",
                Protagonist_text_003: "Mutter, mutter…MAMAAAAAAA.",
                Protagonist_text_004: "Sag was.Ich muss Hilfe holen ich muss mich beeilen.",
                Narrator_text_005: "Er legt die Muttervorsichtig zu Boden und fing an zu dem Dorfe zu rennen um den Arzt zu Holen."
            },
            get_help: {
                Narrator_text_001: `${dataForSave.nameProtagonist}` + " geht sich zu dem Dorf Arztl, und schildert ihm die Situation,",
                Narrator_text_002: "Der Arzt namens Dr.Bader ging und " + `${dataForSave.nameProtagonist}` + " die gingen schnellstmöglich zum Feld zurück."
            },
            talk_with_the_doctor: {
                Protagonist_text_001: "Helfen sie bitte meiner Mutter.",
                Doctor_text_002: "Ich ferstehe jetzt was, passiert ist.Sie hat den schrei einer Alraune gehört und wurde dadurch zu stein verwandelt.",
                Doctor_text_003: "Ich kann ihr leider nicht helfen, keiner meiner Gegenstände kann gegen so ein mächtiger Zauber wie diesen etwas ausrichten.",
                Protagonist_text_005: "Es muss doch irgendetwas geben was wir tun können, sie ist das Einzige was ich habe.",
                Doctor_text_006: "bringen wir sie erstmals zurück ins Dorf."

            },
            transition_to_the_village: {
                Narrator_text_001: "der Arzt und " + `${dataForSave.nameProtagonist}` + " bringen die Mutter vorsichtig zurück ins Dorf."
            },
            about_the_way: {
                Protagonist_text_001: "Bitte Dr.Bader es muss doch irgendwas geben was man tun kann, ich flehe sie an ich würde alles tun.",
                Doctor_text_002: "Wir brauchten jemand oder etwas was mächtig genug, ist, um diesen Zauber zu lösen und dies innerhalb der nächsten <b>7</b> Tage, danach, kann man nicht mehr für sie tun",
                Doctor_text_003: "Das einzige, das Mir bekannt wehre, ist ein Magische pflanze, die im " + `${locations.forest.name}` + "  Zu finden ist.",
                Doctor_text_004: "Es wir erzählt, dass sie inmitten dieses Waldes eine kleine Wiese ist, auf die Die Sonne durchs Dickicht leichtet. Auf dieser Wiese soll die Blume wachsen und magisch von der Sonne angeleuchtet werden.",
                Doctor_text_005: "Dieser ist aber ein 3 Tages marsch entfernt und der Weg ist sehr gefährlich.",
                Protagonist_text_006: "Ist mir egal ich muss es versuchen, wie komme ich zu dem Wald.",
                Doctor_text_007: "Du musst nach Norden zu den " + `${locations.grasslands.name}` + ", aber pass auf dort wimmelt es von Schleimen sie sind nicht zwar nicht stark, aber man sollte sich trotzdem von ihnen in Acht nehme.",
                Doctor_text_008: "nach den Felder kommst du zu dem " + `${locations.mountains.name}` + ", wenn du dich beeilst, kommst du noch bis heute Abend dort an.",
                Doctor_text_009: "ein Pfad führt durch das Gebirge, über diesen Weg ist es ein 2 Tages Marsch.",
                Doctor_text_010: "er ist ziemlich sicher aber ist lange. ",
                Doctor_text_011: "Man kann auch eine Klippe durch den Berg gehen, aber dort ist es steil und manchem tauchen dort Monster auf.",
                Doctor_text_012: "Dahinter ist schon der " + `${locations.forest.name}` + " .Die Blume scheint tief im Wald zu wachsen. ",
                Doctor_text_013: "Man sagt das in dem Wald ein endloses Labyrinth ist und schon Ewigkeiten Kamm keiner mehr aus dem Wald der Versucht hat die Blume zu pflücken.",
                Protagonist_text_014: "<i>Mein Vater hätte es sicher geschafft, ich wollte immer so sein, aber nach seinem Tod war mir bewusst was führ gefahren da daraus sind, und hatte nur noch Angst.</i>",
                Protagonist_text_015: "<i>Ich muss es versuchen, Sie ich bin daran Schuld die Alraune aus dem Boden zu gezogen zu haben.</i>",
                Protagonist_text_016: "<i>Alles ist meine Schuld.</i>",
                Protagonist_text_017: "Ich werde die Blume Holen, ich bin daran schuld an allem.",
                Narrator_text_018: `${dataForSave.nameProtagonist}` + "rennt in sein Zimmer hol seinen Rucksack.In die Küche packt etwas zu essen und trinken eine. Schnappt sich das " + `${items.sword.name}` + " was er von seinem Vater, was jetzt eher einem Doch nach der grösser ist und eilt zur Tür.",
                Doctor_text_019: "Warte!!",
                Doctor_text_020: "Nimm da hier, ein " + `${items.healing_potion.name}` + ". Er ist zwar nur schwach, aber besser als gar nicht.",
                Doctor_text_021: "Ich hoffe du wirst ich nicht brauchen.",
                Protagonist_text_022: "Danke. Passen sie auf meine Mutter auf.",
                Narrator_text_023: "Und so machte sich " + `${dataForSave.nameProtagonist}` + " auf ein Abenteuer."
            }


        };
        
        await playParagraph(storiesText.introduction);
        //TODO:  übergang zum feld
        await playParagraph(storiesText.before_the_accident);
        //TODO:  übergang mit Schrein (sound),  Erzähler: …,
        await playParagraph(storiesText.after_the_accident);
        //TODO: Schawarzer hintergund
        await playParagraph(storiesText.get_help);
        //TODO: zurück aufs Feld
        await playParagraph(storiesText.talk_with_the_doctor);
        //TODO: zurück uns dorf übergang
        await playParagraph(storiesText.transition_to_the_village);
        //TODO: Dorf sitchtabar machen
        await playParagraph(storiesText.about_the_way);
        //TODO: items Geben Schwert, Leib brot , wasser Beutel, Heiltrank


    }
}  