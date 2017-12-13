/**
 * Created by laixiangran on 2016/11/23.
 * homepage：http://www.laixiangran.cn.
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
	selector: '[eNgxChecked]',
	exportAs: 'eNgxChecked'
})
export class ENgxCheckedDirective {

	/**
	 * 0：未选中
	 * 1：待确定
	 * 2：选中
	 */
	@Input('eNgxChecked')
	set eNgxChecked(value: any) {
		this.renderer.setProperty(this.el.nativeElement, 'indeterminate', false);
		if (value === 2) {
			this.renderer.setProperty(this.el.nativeElement, 'checked', true);
		} else if (value === 1) {
			this.renderer.setProperty(this.el.nativeElement, 'indeterminate', true);
		} else {
			this.renderer.setProperty(this.el.nativeElement, 'checked', false);
		}
	}

	constructor(private el: ElementRef, private renderer: Renderer2) {
	}
}
