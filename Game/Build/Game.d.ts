declare namespace VisualNovle {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let protagonistPositionVector: ƒ.Vector2;
    let otherPersonsPositionVector: ƒ.Vector2;
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
    let animations: {
        startSpeaking: {
            start: {
                scaling: ƒ.Vector2;
            };
            end: {
                scaling: ƒ.Vector2;
            };
            duration: number;
            playmode: ƒ.ANIMATION_PLAYMODE;
        };
        endSpeaking: {
            start: {
                scaling: ƒ.Vector2;
            };
            end: {
                scaling: ƒ.Vector2;
            };
            duration: number;
            playmode: ƒ.ANIMATION_PLAYMODE;
        };
    };
    function playParagraph(_text: {
        [textname: string]: string;
    }): Promise<void>;
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
