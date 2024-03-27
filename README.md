# NIST Header and Footer Template

This repo can be used as a source for the NIST headers and footers that are required for use on public-facing sites.  It is recommended that you DO NOT copy these files into your repo, but rather link to them in-place so that you will automatically receive any changes or updates.

**EXCEPTION:** If you expect high traffic volume or need it to be highly available, and it does not reside on **pages.nist.gov**, you *should* copy these files to your site and use the local copy. pages.nist.gov is not highly available.

Otherwise, to use this repo you do NOT have to copy any files; just insert the following into your pages' HEAD section:

```
  <link rel="stylesheet" href="https://pages.nist.gov/nist-header-footer/css/nist-combined.css">
  <script src="https://pages.nist.gov/nist-header-footer/js/nist-header-footer.js" type="text/javascript" defer="defer"></script>
```

Should you want to increase security, or prevent any future javascript changes from affecting you, you can use the versioned instance of the js file as shown below.

```
  <link rel="stylesheet" href="https://pages.nist.gov/nist-header-footer/css/nist-combined.css">
  <script src="https://pages.nist.gov/nist-header-footer/js/nist-header-footer-v-2.0.js" type="text/javascript" defer="defer"></script>
```

## Requirements
Nothing other than the javascript file nist-header-footer.js. This version does away with the jQuery dependency which is nice. Shout out to Greg Fiumara for doing that work on his own initiative.

## Tips
If you would like the footer to be pushed to the bottom of the browser window on short pages, add the `nist-footer-bottom` class to the top level html element. Also make sure to add ID selector `#main` to content body wrapper.
```
<html class="nist-footer-bottom">
```
