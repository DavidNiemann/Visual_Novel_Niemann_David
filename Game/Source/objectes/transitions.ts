namespace VisualNovel {
    export type Transition = { duration: number, alpha: string, edge: number };
    export let transitions: { [transitionName: string]: Transition } = {
        leftTORight: {
            duration: 1,
            alpha: "./Transitions/left_to_right.png",
            edge: 2
        },
        outToIn: {
            duration: 1,
            alpha: "./Transitions/out_to_in.png",
            edge: 2
        },
        bottomToTop: {
            duration: 1,
            alpha: "./Transitions/bottom_to_top.png",
            edge: 2
        },
        inToOut: {
            duration: 1,
            alpha: "./Transitions/in_to_out.png",
            edge: 2
        }
    };
}