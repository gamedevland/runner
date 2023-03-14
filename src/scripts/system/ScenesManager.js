import * as PIXI from "pixi.js";
import { App } from "./App";

export class ScenesManager {
    constructor() {
        this.container = new PIXI.Container();
        this.container.interactive = true;
        this.scene = null;
    }

    start(scene) {
        if (this.scene) {
            this.scene.destroy();
        }

        this.scene = new App.config.scenes[scene]();
        this.container.addChild(this.scene.container);
    }

    update(dt) {
        if (this.scene && this.scene.update) {
            this.scene.update(dt);
        }
    }
}