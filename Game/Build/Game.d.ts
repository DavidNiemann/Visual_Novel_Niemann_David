declare namespace VisualNovel {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    type StoryText = {
        [textname: string]: {
            text: string;
            pose?: POSES;
        };
    };
    let dataForSave: {
        nameProtagonist: string;
        dayCounter: number;
        bottleWasGiven: boolean;
    };
    function showCredits(): void;
}
declare namespace VisualNovel {
    function childhood(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function theCurse(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function grassland(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function prehistory(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function theStranger(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    type Enemy = {
        name: string;
        health: number;
        damage: number;
    };
    export let enemys: {
        [id: string]: Enemy;
    };
    export function fight(_enemy: Enemy): Promise<boolean>;
    export {};
}
declare namespace VisualNovel {
    let protagonistPositionVector: ƒ.Vector2;
    let otherPersonsPositionVector: ƒ.Vector2;
    function playParagraph(_text: StoryText): Promise<void>;
    function showCharacter(_character: string, _pose?: POSES): Promise<void>;
    function endSpeakingAnimation(_character: string, _pose?: POSES): Promise<void>;
    function startSpeakingAnimation(_character: string, _pose?: POSES): Promise<void>;
}
declare namespace VisualNovel {
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
}
declare namespace VisualNovel {
    enum POSES {
        SAD = "sad",
        FRIGHTEND = "frightend",
        HAPPY = "happy",
        NEUTRAL = "neutral",
        CHILD = "child"
    }
    let characters: {
        [name: string]: ƒS.CharacterDefinition;
    };
}
declare namespace VisualNovel {
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
        magic_water: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
    };
}
declare namespace VisualNovel {
    let locations: {
        [name: string]: ƒS.LocationDefinition;
    };
}
declare namespace VisualNovel {
    let sounds: {
        villageBackgroundMusic: string;
        grasslandsBackgroundMusic: string;
        forestBackgroundMusic: string;
        caveBackgroundMusic: string;
    };
}
declare namespace VisualNovel {
    let transitions: {
        puzzle: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
}
