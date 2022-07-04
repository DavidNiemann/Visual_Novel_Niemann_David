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
            dialog.querySelector("button").addEventListener("pointerdown", hndUse);
            for (let index = 0; index < _item.length; index++) {
                let itemId: string = _item[index].name.replaceAll(" ", "_");
                let itemElement: HTMLLIElement = <HTMLLIElement>dialog.querySelector(`[id=${itemId}]`);

                itemElement.addEventListener("pointerdown", hndUse);
            }
            //@ts-ignore
            dialog.showModal();
            invetoryOpen = true;
            function hndUse(_event: Event): void {

                dialog.querySelector("button").removeEventListener("pointerdown", hndUse);
                let choosenItem: ƒS.ItemDefinition = null;
                for (let index = 0; index < _item.length; index++) {
                    let itemId: string = _item[index].name.replaceAll(" ", "_");
                    let itemElement: HTMLLIElement = <HTMLLIElement>dialog.querySelector(`[id=${itemId}]`);
                    itemElement.removeEventListener("pointerdown", hndUse);
                    if (_event.currentTarget && itemId == (<HTMLLIElement>_event.currentTarget).id) {
                        choosenItem = _item[index];
                    }
                }
                if (choosenItem) {
                    useItem(choosenItem.name);
                }

                invetoryOpen = false;
                //@ts-ignore
                dialog.close();
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

    export async function saveInventory(): Promise<void> {
        dataForSave.inventoryItems = [];
        for (const item in items) {
            let amount = ƒS.Inventory.getAmount(items[item]);
            for (let i = 0; i < amount; i++) {
                dataForSave.inventoryItems.push(item);

            }
        }
        console.log(dataForSave.inventoryItems);
    }
    export async function loadInvetory(): Promise<void> {
        let dialog: HTMLDialogElement = <HTMLDialogElement>document.querySelector("dialog[type=inventory]");
        let ul: HTMLUListElement = dialog.querySelector("ul");
        console.log(ul);
        ul.innerHTML = "";
        for (const saveItem of dataForSave.inventoryItems) {
            for (const item in items) {
                if (item == saveItem) {
                    ƒS.Inventory.add(items[item]);
                }

            }
        }
    }

}