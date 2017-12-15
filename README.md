# nist-header-footer
Static html version of the nist.gov header bar and footer.

## Requirements
- Compatible with jQuery 1.7+ (3.2.1 is included)

## Tips and Tricks

### Push footer to the bottom

When a page is very short, you can push footer to the bottom with [CSS
Flexbox](https://philipwalton.github.io/solved-by-flexbox/):

```css
<style>
  html, body {
    height: 100%;
  }
  body {
    display: flex;
    flex-direction: column;
  }
  .main {
    flex: 1 0 auto;
  }
</style>
```
