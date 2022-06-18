namespace VisualNovel {
    export let animations = {
        startSpeaking: {
            start: {
                scaling: new ƒS.Position(1, 1)
            },
            end: { scaling: new ƒS.Position(1.2, 1.2) },
            duration: 0.1,
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        },
        endSpeaking: {
            start: {
                scaling: new ƒS.Position(1.2, 1.2)
            },
            end: { scaling: new ƒS.Position(1, 1) },
            duration: 0.1,
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        }

    };
}