# essence-ng2-checked

essence-ng2-checked is an Angular directive that change checkbox status.

## Usage

1. Install

	```shell
	npm install --save essence-ng2-checked@latest
	```

3. Add the EssenceNg2CheckedModule

	```typescript
	import {EssenceNg2CheckedModule} from "essence-ng2-checked";
	@NgModule({
	    imports: [
	        EssenceNg2CheckedModule
	    ]
	})
	```

4. Use in Template

	```html
	<input [essence-ng2-checked]="checked" type="checkbox">
	```

5. Use in Component

	```typescript
	checked: number = 0; // or 1 or 2
	```

## API

### exportAs

- `eNgChecked` - 导出的指令变量，可在模板获取指令类并调用（`#eNgChecked="eNgChecked"`）。

### Inputs

- `essence-ng2-checked`（`number`） - 复选框的状态值，可取：0（未选中），1（待确定），2（已选中）

## Develop

	```shell
	npm install // 安装依赖包
	
	npm start // 启动项目
	```

# License

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)
