# NIST Header and Footer Template

This repo can be used as a source for the NIST headers and footers that are required for use on public-facing sites.  It is recommended that you DO NOT copy these files into your repo, but rather link to them in-place so that you will automatically receive any changes or updates.

<strong>EXCEPTION:</strong> If you expect high traffic volume or need it to be highly available, and it does not reside on pages.nist.gov, you *should* copy these files to your site and use the local copy. <strong>pages.nist.gov is not highly available.</strong>

To use this repo you do NOT have to copy any files; just insert the following into your pages' HEAD section:

```
  <link rel="stylesheet" href="https://pages.nist.gov/nist-header-footer/css/nist-combined.css">
  <script src="https://pages.nist.gov/nist-header-footer/js/nist-header-footer.js" type="text/javascript" defer="defer"></script>
```

## Tips
If you would like the footer to be pushed to the bottom of the browser window on short pages, add the `nist-footer-bottom` class to the top level html element. Also make sure to add ID selector `#main` to content body wrapper.
```
<html class="nist-footer-bottom">
```
