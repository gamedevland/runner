import * as PIXI from "pixi.js";
import { App } from "../system/App";
import { Platform } from "./Platform";

export class Platforms {
    constructor() {
        this.platforms = [];
        this.container = new PIXI.Container();

        this.createPlatform({
            rows: 4,
            cols: 6,
            x: 200
        });
    }

    get randomData() {
        this.ranges = App.config.platforms.ranges;
        let data = { rows: 0, cols: 0, x: 0 };

        const offset = this.ranges.offset.min + Math.round(Math.random() * (this.ranges.offset.max - this.ranges.offset.min));

        data.x = this.current.container.x + this.current.container.width + offset;
        data.cols = this.ranges.cols.min + Math.round(Math.random() * (this.ranges.cols.max - this.ranges.cols.min));
        data.rows = this.ranges.rows.min + Math.round(Math.random() * (this.ranges.rows.max - this.ranges.rows.min));

        return data;
    }

    
    createPlatform(data) {
        const platform = new Platform(data.rows, data.cols, data.x);
        this.container.addChild(platform.container);
        this.platforms.push(platform);
        this.current = platform;
    }

    update() {
        if (this.current.container.x + this.current.container.width < window.innerWidth) {
            this.createPlatform(this.randomData);
        }

        // 06
        this.platforms.forEach(platform => platform.move());
    }

    // [14]
    destroy() {
        this.platforms.forEach(platform => platform.destroy());
        this.container.destroy();
    }
}