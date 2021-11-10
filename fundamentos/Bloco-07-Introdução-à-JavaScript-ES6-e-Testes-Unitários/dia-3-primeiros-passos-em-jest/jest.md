# How to use jest:

## install:

To install jest, you first need to start a NPM project with the command;

```shell
npm init -y
```

Done that, you will run the command;

```she
npm install --save-dev jest

# --save-dev:  install jest like a development dependency
```

## Configure: 

Having installed the jest, you will enter in the `package.json` file to add jest in the `npm test` command.

```json
"scripts": {
    "test": "jest"
},
// Insert jest in the script section
```

Done that, the jest is installed and configured to use.

---

## Using jest:

First you need to create a file with `.test` in the name, because jest will search this name in `js` files to locate the tests.

```exemple
archive.test.js
```

This file will be responsible for run the test will you created.

Now, to use jest in your scripts, it is necessary to create a function an export that in the final of the file.

```javascript
function teste() {
    return "farofa é top";
}

module.exports = teste;
```

And in the `.test` file you need to import the function, and you are already free to use the functions in the tests.

```js
const teste = require("caminho para o arquivo que contem a função");
```

## Creating tests:

From the moment the jest was imported, it is already possible to use a function called `test`.

In this function is possible to create tests with the previously imported functions.

### Test structure:

```js
test('Text will appear in description', () => {
  expect(function(param, param)).toEqual(`expected return`);
});

// Example;
test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});
```

