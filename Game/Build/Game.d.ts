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
        forestCounter: number;
        dangerousPathChosen: boolean;
    };
    function showCredits(): void;
}
declare namespace VisualNovel {
    function cave(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function childhood(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function theCurse(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function dangerousWay(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function flower(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function theForest(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function gameOver(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function theGrassland(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function longWay(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function lostAgastTheBasilik(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function lostinTheWoods(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function theMountain(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function prehistory(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function saveMother(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function theStranger(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function tooLate(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function unexpectedEncounter(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function warkBack(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function winAgastTheBasilik(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function wrongWay(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function startAnimations(): Promise<void>;
}
declare namespace VisualNovel {
    let items: {
        [itemName: string]: ƒS.ItemDefinition;
    };
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
    function useItem(_item: string): void;
    function activateItems(_item: ƒS.ItemDefinition[]): Promise<ƒS.ItemDefinition>;
    function activateItem(_item: ƒS.ItemDefinition): Promise<ƒS.ItemDefinition>;
}
declare namespace VisualNovel {
    let protagonistPositionVector: ƒ.Vector2;
    let secondPersonsPositionVector: ƒ.Vector2;
    let thirdPersonsPositionVector: ƒ.Vector2;
    function playParagraph(_text: StoryText): Promise<void>;
    function showCharacter(_character: string, _pose?: POSES): Promise<void>;
    function endSpeakingAnimation(_character: string, _pose?: POSES): Promise<void>;
    function startSpeakingAnimation(_character: string, _pose?: POSES): Promise<void>;
    function showAnnouncements(_location: ƒS.LocationDefinition, _announcment: ƒS.LocationDefinition, _firstTransition: Transition, _secondTransition?: Transition): Promise<void>;
}
declare namespace VisualNovel {
    let animations: {
        startSpeaking: {
            start: {
                scaling: ƒ.Vector2;
                color: ƒ.Color;
            };
            end: {
                scaling: ƒ.Vector2;
                color: ƒ.Color;
            };
            duration: number;
            playmode: ƒ.ANIMATION_PLAYMODE;
        };
        endSpeaking: {
            start: {
                scaling: ƒ.Vector2;
                color: ƒ.Color;
            };
            end: {
                scaling: ƒ.Vector2;
                color: ƒ.Color;
            };
            duration: number;
            playmode: ƒ.ANIMATION_PLAYMODE;
        };
        speaking: {
            start: {
                scaling: ƒ.Vector2;
                color: ƒ.Color;
            };
            end: {
                scaling: ƒ.Vector2;
                color: ƒ.Color;
            };
            duration: number;
            playmode: ƒ.ANIMATION_PLAYMODE;
        };
    };
}
declare namespace VisualNovel {
    let announcements: {
        [name: string]: ƒS.LocationDefinition;
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
    let locations: {
        [name: string]: ƒS.LocationDefinition;
    };
}
declare namespace VisualNovel {
    let sounds: {
        fightMusic: string;
        adventureMusic: string;
        mysteriousMusic: string;
    };
}
declare namespace VisualNovel {
    type Transition = {
        duration: number;
        alpha: string;
        edge: number;
    };
    let transitions: {
        [transitionName: string]: Transition;
    };
}
