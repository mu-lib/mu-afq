# mu-afq

Asynchronous Function Queue

## Usage

First of you should add the `afq` oneliner in the top of you page, preferably in the `HEAD` tag

```html
<script>
window.afq = window.afq || function () { (afq.q = afq.q || []).push(arguments) };
</script>
```

Now you are ready to load the script

```html
<script src="afq.js" async="true"></script>
```

After that call your methods like so :

```javascript
afq("methodName", 1, 2, 3);
```

Methods are provided like so :

```javascript
afq("provide", "methodName", function(a, b, c) {});
```
