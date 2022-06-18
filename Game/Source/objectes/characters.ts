namespace VisualNovel {

    export enum POSES {
        SAD = "sad",
        FRIGHTEND = "frightend",
        HAPPY = "happy",
        NEUTRAL = "neutral",
        CHILD = "child"
    }

    export let characters: { [name: string]: ƒS.CharacterDefinition } = {
        narrator: {
            name: undefined,
            origin: undefined,
            pose: undefined
        },
        protagonist: {
            name: "Protagonist",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "./Images/Characters/Protagonist/protagonist_happy.png",
                sad: "./Images/Characters/Protagonist/protagonist_sad.png",
                frightend: "./Images/Characters/Protagonist/protagonist_frightend.png",
                child: "./Images/Characters/Protagonist/protagonist_sad.png"
            }
        },
        mother: {
            name: "Mutter",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "./Images/Characters/Mother/mother_happy.png",
                neutral: "./Images/Characters/Mother/mother_neutral.png",
                frightend: "./Images/Characters/Mother/mother_frightend.png"
            }
        },
        doctor: {
            name: "Dr.Bader",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "./Images/Characters/Doctor/doctor_happy.png",
                sad: "./Images/Characters/Doctor/doctor_sad.png"

            }
        },
        strange_man: {
            name: "Fremder Mann",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "./Images/Characters/Strange_man/strange_man_happy.png"

            }
        },
        fairy: {
            name: "große Fee des Waldes",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "./Images/Characters/Fairy/fairy_happy.png"
            }
        }
    };
}