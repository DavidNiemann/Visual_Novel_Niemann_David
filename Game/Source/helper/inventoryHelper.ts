namespace VisualNovel {

    export function useItem(_item: string): void {

        let dialog: HTMLDialogElement = <HTMLDialogElement>document.querySelector("dialog[type=inventory]");
        let itemId: string = _item.replaceAll(" ", "_");
        let itemElement: HTMLLIElement = <HTMLLIElement>dialog.querySelector(`[id=${itemId}]`);
        if (itemElement) {
            let amount: HTMLElement = itemElement.querySelector("amount");
            amount.innerHTML = (parseInt(amount.innerHTML) - 1).toString();
            if (parseInt(amount.innerHTML) == 0) {
                itemElement.remove();
            }
        }
    }
    export async function activateItems(_item: ƒS.ItemDefinition[]): Promise<ƒS.ItemDefinition> {
        let dialog: HTMLDialogElement = <HTMLDialogElement>document.querySelector("dialog[type=inventory]");
        return await new Promise((_resolve) => {
            for (let index = 0; index < _item.length; index++) {
                let itemId: string = _item[index].name.replaceAll(" ", "_");
                let itemElement: HTMLLIElement = <HTMLLIElement>dialog.querySelector(`[id=${itemId}]`);

                itemElement.addEventListener("pointerdown", hndUse);
            }
            //@ts-ignore
            dialog.showModal();
            function hndUse(_event: Event): void {
                let choosenItem: ƒS.ItemDefinition = null;
                for (let index = 0; index < _item.length; index++) {
                    let itemId: string = _item[index].name.replaceAll(" ", "_");
                    let itemElement: HTMLLIElement = <HTMLLIElement>dialog.querySelector(`[id=${itemId}]`);
                    itemElement.removeEventListener("pointerdown", hndUse);
                    if (itemId == (<HTMLLIElement>_event.currentTarget).id) {
                        choosenItem = _item[index];
                    }
                }
                console.log();
                //@ts-ignore
                dialog.close();
                useItem(choosenItem.name);
                _resolve(choosenItem);

            }
        });
    }

    export async function activateItem(_item: ƒS.ItemDefinition): Promise<ƒS.ItemDefinition> {

        let dialog: HTMLDialogElement = <HTMLDialogElement>document.querySelector("dialog[type=inventory]");
        let itemId: string = _item.name.replaceAll(" ", "_");
        let itemElement: HTMLLIElement = <HTMLLIElement>dialog.querySelector(`[id=${itemId}]`);

        return await new Promise((_resolve) => {
            function hndUse(_event: Event): void {
                itemElement.removeEventListener("pointerdown", hndUse);
                console.log((<HTMLLIElement>_event.currentTarget).id);
                //@ts-ignore
                dialog.close();
                useItem(_item.name);
                _resolve(_item);
            }
            //@ts-ignore
            dialog.showModal();

            itemElement.addEventListener("pointerdown", hndUse);
        });

    }

}