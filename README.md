# NIST Header and Footer Template

This repo can be used as a source for the NIST headers and footers that are required for use on public-facing sites.  It is recommended that you DO NOT copy these files into your repo, but rather link to them in-place so that you will automatically receive any changes or updates.

To use this repo you do NOT have to copy any files; just insert the following into your pages' HEAD section:

```
  <link rel="stylesheet" href="https://pages.nist.gov/nist-header-footer/css/nist-combined.css>
  <script src="https://pages.nist.gov/nist-header-footer/js/jquery-1.9.0.min.js" type="text/javascript" defer="defer"></script>
  <script src="https://pages.nist.gov/nist-header-footer/js/nist-header-footer.js" type="text/javascript" defer="defer"></script>
```

## Requirements
* Compatible with jQuery 1.7+ (1.9 is included)

## Tips
If you would like the footer to be pushed to the bottom of the browser window on short pages, add the `nist-footer-bottom` class to the top level html element.
```
<html class="nist-footer-bottom">
```
