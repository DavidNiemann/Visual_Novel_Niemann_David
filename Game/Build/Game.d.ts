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
        villageBackgroundMusic: string;
        grasslandsBackgroundMusic: string;
        forestBackgroundMusic: string;
        caveBackgroundMusic: string;
    };
    let locations: {
        village: {
            name: string;
            background: string;
        };
        grasslands: {
            name: string;
            background: string;
        };
        forest: {
            name: string;
            background: string;
        };
        cave: {
            name: string;
            background: string;
        };
        mountains: {
            name: string;
            background: string;
        };
    };
    let characters: {
        [name: string]: ƒS.CharacterDefinition;
    };
    let items: {
        flower: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        sword: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        water_bag: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        healing_potion: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        empty_glass_bottle: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        loaf_of_bread: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
    };
    let dataForSave: {
        nameProtagonist: string;
        dayCounter: number;
        bottleWasGiven: boolean;
    };
    function showCredits(): void;
    function playParagraph(_text: {
        [textname: string]: string;
    }): Promise<void>;
}
declare namespace Test {
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
declare namespace Test {
    function Scene(): ƒS.SceneReturn;
}
declare namespace VisualNovle {
    function childhood(): ƒS.SceneReturn;
}
declare namespace VisualNovle {
    function theCurse(): ƒS.SceneReturn;
}
declare namespace VisualNovle {
    function Prehistory(): ƒS.SceneReturn;
}
