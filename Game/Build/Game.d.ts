declare namespace VisualNovle {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transitions: {
        puzzle: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sounds: {
        nightclub: string;
        click: string;
    };
    let locations: {
        nightpark: {
            name: string;
            background: string;
        };
    };
    let characters: {
        narrator: {
            name: string;
        };
        aisaka: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                upset: string;
            };
        };
    };
    let dataForSave: {
        nameProtagonist: string;
        scrore: number;
    };
    function showCredits(): void;
}
declare namespace VisualNovle {
    function Scene(): ƒS.SceneReturn;
}
