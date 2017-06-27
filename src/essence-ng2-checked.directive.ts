/**
 * Created by laixiangran on 2016/11/23.
 * homepage：http://www.laixiangran.cn.
 */
import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
@Directive({
    selector: '[essence-ng2-checked]'
})
export class EssenceNg2CheckedDirective implements OnInit {

    /**
     * 0：未选中
     * 1：待确定
     * 2：选中
     */
    @Input('essence-ng2-checked') essenceChecked: number;

    constructor(private el: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        if (this.essenceChecked === 2) {
            this.renderer.setProperty(this.el.nativeElement, 'checked', true);
        } else if (this.essenceChecked === 1) {
            this.renderer.setProperty(this.el.nativeElement, 'indeterminate', true);
        } else {
            this.renderer.setProperty(this.el.nativeElement, 'checked', false);
        }
    }
}
