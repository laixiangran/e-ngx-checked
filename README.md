# e-ngx-checked

基于Angular的切换复选框状态组件。

## Usage

1. Install

	```shell
	npm install --save e-ngx-checked@latest
	```

3. Add the ENgxCheckedModule

	```typescript
	import {ENgxCheckedModule} from "e-ngx-checked";
	@NgModule({
	    imports: [
	        ENgxCheckedModule
	    ]
	})
	```

4. Use in Template

	```html
	<input [eNgxChecked]="checked" type="checkbox">
	```

5. Use in Component

	```typescript
	checked: number = 0; // or 1 or 2
	```

## API

### exportAs

- `eNgxChecked` - 导出的指令变量，可在模板获取指令类并调用（`#eNgxChecked="eNgxChecked"`）。

### Inputs

- `eNgxChecked`（`number`） - 复选框的状态值，可取：0（未选中），1（待确定），2（已选中）

## Develop

	```shell
	npm install // 安装依赖包
	
	npm start // 启动项目
	```

# License

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)
