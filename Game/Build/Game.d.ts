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
        Protagonist: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                happy: string;
                sad: string;
                frightend: string;
            };
        };
    };
    let items: {
        blume: {
            name: string;
            description: string;
            image: string;
        };
        fisch: {
            name: string;
            description: string;
            image: string;
        };
        fee: {
            name: string;
            description: string;
            image: string;
        };
        stein: {
            name: string;
            description: string;
            image: string;
        };
        schwerd: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        buch: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
    };
    let dataForSave: {
        nameProtagonist: string;
        scrore: number;
    };
    function showCredits(): void;
    function playMonologue(_character: ƒS.Character | Object, _text: {
        [textname: string]: string;
    }): Promise<void>;
}
declare namespace VisualNovle {
    function Scene(): ƒS.SceneReturn;
}
declare namespace VisualNovle {
    function Prehistory(): ƒS.SceneReturn;
}
