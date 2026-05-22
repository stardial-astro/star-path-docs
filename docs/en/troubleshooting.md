---
title: 'Troubleshooting'
description: 'Troubleshooting'
---

## FAQ {#faq}

### Draw button is greyed out {#draw-btn-disabled}

Typically, if there are invalid input values or any errors, the button will be disabled. First, check if there are any error messages on the page and correct the values. If no errors showing, try clearing any input value, typing in any field, or toggling any input types. In this way, the input validation will be triggered and enable the button if values are valid. If none works, refreshing the page to reset all states can solve the issue.

### Nothing happens after clicking draw button {#draw-btn-not-working}

If the querying parameters (latitude/longitude, date, and star information) are the same as the last time, it displays the cached result unless the data stales. In this case, if the results from the last query is not cleared out before sending the current request (e.g., by refreshing the page), the content on the page stays unchanged.

The results of the equinox/solstice queries are also cached.

### Server is inaccessible {#server-inaccessible}

When a "server inaccessible" error occurs, it might due to a poor network connection. Please check the network connection (especially if using a proxy) then refresh the page and try again. If the server goes down or has issues, we will work to fix it as soon as possible.

### Geocoding service is inaccessible {#geo-service-inaccessible}

The geocoding service is automatically determined and cached when the app loads. If you see an incorrect service is in use or the service is inaccessible, please first check the system time zone and whether a proxy is on, then clear cache and refresh the page before trying again.
