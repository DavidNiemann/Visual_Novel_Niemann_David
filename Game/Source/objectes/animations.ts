namespace VisualNovel {
    export let animations = {
        startSpeaking: {
            start: {
                scaling: new ƒS.Position(1, 1), color: ƒS.Color.CSS("gray")
            },
            end: { scaling: new ƒS.Position(1.2, 1.2), color: ƒS.Color.CSS("white") },
            duration: 0.1,
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        },
        endSpeaking: {
            start: {
                scaling: new ƒS.Position(1.2, 1.2), color: ƒS.Color.CSS("white")
            },
            end: { scaling: new ƒS.Position(1, 1), color: ƒS.Color.CSS("gray") },
            duration: 0.1,
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        },
        speaking: {
            start: {
                scaling: new ƒS.Position(1, 1), color: ƒS.Color.CSS("gray")
            },
            end: { scaling: new ƒS.Position(1.2, 1.2), color: ƒS.Color.CSS("white") },
            duration: 0,
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        }

    };
}