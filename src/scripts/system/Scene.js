import * as PIXI from "pixi.js";
import { App } from "./App";

export class Scene {
    constructor() {
        this.container = new PIXI.Container();
        this.container.interactive = true;
        this.create();
        App.app.ticker.add(this.update, this);
    }

    update() {

    }

    destroy() {
        
    }
}