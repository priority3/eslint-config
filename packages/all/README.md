## @pity/eslint-config

* Single quotes, no semi
* Auto fix for formatting (aimed to be used standalone without Prettier)
* TypeScript, Vue, React out-of-box
* Lint also for json, yaml, markdown
* Sorted imports, dangling commas for cleaner commit diff
* Reasonable defaults, best practices, only one-line of config


### Usage

## install

```bash
pnpm add @pity/eslint-config -D
```

### Config .eslintrc

```json
{
  "extends": "@pity"
}
```
> You don't need .eslintignore normally as it has been provided by the preset.


### Add Script in package.json

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```


### Config VS Code auto fix

```json
{
  "prettier.enable": "false",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
