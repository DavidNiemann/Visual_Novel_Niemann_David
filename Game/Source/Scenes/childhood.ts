namespace VisualNovle {
    export async function childhood(): ƒS.SceneReturn {
        console.log("Scene:  childhood");

        let storiesText = {
            introduction: {
                Narrator_text_001: "In dieser Welt am Rande eines Dorfes in der Man die Magie wenig verwendete, lebt Junge, mit Seinem Vater und Mutter.",
                Narrator_text_002: "An einem Tag ging der Vater auf Reise in die Nächste Stadt, um seiner Arbeit nachzugehen."
            },
            childhoodStoryPart1: {
                Protagonist_text_001: "Mama wann kommt Papa endlich nach Hause.",
                Mother_text_002: "Er Kommt wird schon bald wieder Kommen.",
                Mother_text_003: "Du bist doch gewohnt, dass Er länger nicht zuhause ist. Wenn er arbeiten ist.",
                Protagonist_text_004: "Ich weiß Mama, aber ist schon ungewöhnlich lange weg, dafür das er nur in die Stadt gehen wollte und einen leichten Auftrag erfüllen."
            },
            childhoodStoryPart2: {
                Narrator_text_001: "ein Bote Kamm vorbei und brachte der Familie einen Brief in dem Stand,",
                Narrator_text_002: "dass Der Vater bei einem Auftrag einen Händler zu begleiten von <Monster> überfallen wurde und dabei stab.",
                Narrator_text_003: "Der Junge fing auf diese Nachricht an zu weinen.",
                Narrator_text_004: "Er schaute immer zu seinem Vater auf und wollte auch ein Abenteurer wie sein Vater werden."
            }

        };

        await playParagraph(storiesText.introduction);
        // TODO: übergang einfügen
        await playParagraph(storiesText.childhoodStoryPart1);
        // TODO: übergang einfügen
        await playParagraph(storiesText.childhoodStoryPart2);
    }
}  