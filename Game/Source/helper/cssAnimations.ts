namespace VisualNovel {

    export async function startAnimations(): Promise<void> {
     
        let canvas: HTMLCanvasElement = document.querySelector("canvas");
        
        let animation = canvas.animate(
            [

                { transform: "translateX(0px) rotate(0deg)" },
                { transform: "translateX(10px) rotate(5deg)" },
                { transform: "translateX(0px) rotate(0deg)" },
                { transform: "translateX(-10px) rotate(-5deg)" },
                { transform: "translateX(0px) rotate(0deg)" }
            ],
            {
                duration: 150,
                iterations: 3,
                easing: "ease-in-out"
            }
        );
        
        animation.play();
    }
}