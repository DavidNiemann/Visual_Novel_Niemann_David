namespace VisualNovle {
    export async function Prehistory(): ƒS.SceneReturn {
        console.log("start Story", "Scene:  prehistory");

        let text = {
            Navigator: {
                T001: "es war einmal",
                T002: "Ein Komet knalte auf die Erde",
                T003: "ein junger Mann",
                T004: "sein Vater verschwand als er kleinwar, er war eine Abenteurer und ist auf Reisen gegange und Kamm nicht merh zurück"

            }
        };

        await playMonologue(characters.narrator, text.Navigator);

    }
}  