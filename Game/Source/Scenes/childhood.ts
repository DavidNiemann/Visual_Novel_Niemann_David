/// <reference path= "../main.ts"/>
namespace VisualNovel {

    export async function childhood(): ƒS.SceneReturn {
        console.log("Scene:  childhood");

        let storyTexts: { [paragraphName: string]: StoryText } = {
            introduction: {
                Narrator_001: { text: "In dieser Welt am Rande eines Dorfes in der Man die Magie wenig verwendete, lebt Junge, mit Seinem Vater und Mutter." },
                Narrator_002: { text: "An einem Tag ging der Vater auf Reise in die Nächste Stadt, um seiner Arbeit nachzugehen." }
            },
            childhoodStory_Part1: {
                Protagonist_001: { text: "Mama wann kommt Papa endlich nach Hause.", pose: POSES.CHILD },
                Mother_002: { text: "Er Kommt wird schon bald wieder Kommen.", pose: POSES.HAPPY },
                Mother_003: { text: "Du bist doch gewohnt, dass Er länger nicht zuhause ist. Wenn er arbeiten ist.", pose: POSES.HAPPY },
                Protagonist_004: { text: "Ich weiß Mama, aber ist schon ungewöhnlich lange weg, dafür das er nur in die Stadt gehen wollte und einen leichten Auftrag erfüllen.", pose: POSES.CHILD }
            },
            childhoodStory_Part2: {
                Narrator_001: { text: "ein Bote Kamm vorbei und brachte der Familie einen Brief in dem Stand," },
                Narrator_002: { text: "dass Der Vater bei einem Auftrag einen Händler zu begleiten von Monstern überfallen wurde und dabei stab." },
                Narrator_003: { text: "Der Junge fing auf diese Nachricht an zu weinen." },
                Narrator_004: { text: "Er schaute immer zu seinem Vater auf und wollte auch ein Abenteurer wie sein Vater werden." }
            }

        };

        if (inventoryLoaded == false) {
            await loadInvetory();
            inventoryLoaded = true;
        }

        await playParagraph(storyTexts.introduction);
        // übergang
        await ƒS.Location.show(locations.village);
        await showAnnouncement(locations.village, announcements.some_days_pass, transitions.leftTORight);
        await playParagraph(storyTexts.childhoodStory_Part1);
        /*  ƒS.Character.hideAll(); */
        // übergang
        await showAnnouncement(locations.village, announcements.some_days_pass, transitions.leftTORight);
        await playParagraph(storyTexts.childhoodStory_Part2);

        return "3";
    }
}  