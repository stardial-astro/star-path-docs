---
title: 'Documentation'
description: 'Trace apparent motion of planets and stars observed from any location on any chosen date.'
titleAppend: false
---

::: hero

# Welcome to Star&nbsp;Path&nbsp;Viewer

<img src="../../assets/images/spv-preview-dark.png" alt="Preview" width="300" class="img-dark size-medium align-center">
<img src="../../assets/images/spv-preview-light.png" alt="Preview" width="300" class="img-light size-medium align-center">

An astronomical application to track the apparent motion of a given celestial object.

::: button "Guides" ./guides/location.md icon:telescope
::: button "GitHub" external:https://github.com/stardial-astro/star-path-viewer color:#333 icon:github
:::

## :rocket: Quick Start

[Star Path Viewer][] computes this target's positions on the celestial sphere based on the querying information. It generates a diagram with a curved path representing the [apparent motion][] in the observer's local [horizontal coordinate system][]. A table of the rising/setting/transit/twilight times will also be appended.

- **Step 1.** To make a request, fill out these three sections: [`LOCATION`][Location Input], [`LOCAL DATE`][Date Input], and [`CELESTIAL OBJECT`][Star Input].

- **Step 2.** Click the [`DRAW STAR PATH`][Draw] button to submit the request. The results will be displayed below this button.

::: callout tip "There are other things you can do using this app as a handy tool"
[:arrow_right: Obtain the **latitude/longitude** of a location by searching an address.][Search Address]
[:arrow_right: Query the **equinox/solstice** dates of a certain year.][Quick Entry]
[:arrow_right: Check a date in multiple **calendars**.][Enter Date]
[:arrow_right: Look up a star's **Hipparcos Catalogue** number by a name, and vice versa.][HIP]
[:arrow_right: By querying a star's that shows up tonight, view the **sunset and twilight times** from the results to determine the ideal time to observe the aurora borealis or meteor showers.][Anno]

[Search Address]: /guides/location/#search-address
[Quick Entry]: /guides/date/#look-up-an-equinoxsolstice
[Enter Date]: /guides/date/#enter-a-date-in-the-gregorian-or-julian-calendar
[HIP]: /guides/star#provide-a-hipparcos-catalogue-number-hip
[Anno]: /guides/results

:::

[Star Path Viewer]: https://star-path-viewer.pages.dev/
[apparent motion]: https://en.wikipedia.org/wiki/Diurnal_motion
[horizontal coordinate system]: https://en.wikipedia.org/wiki/Horizontal_coordinate_system
[Location Input]: /guides/location
[Date Input]: /guides/date
[Star Input]: /guides/star
[Draw]: /guides/results

## :dart: Key Features

::: grids
::: grid
::: card "Across the Ages" icon:pyramid
Covers a wide range of querying dates from **3001 BCE** to **3000 CE**.
:::
:::
::: grid
::: card "Twilight Stages" icon:sunrise
Marks the times and star positions of **rising**, **setting**, **transit**, and **twilights**.
:::
:::
::: grid
::: card "Multiple Calendars" icon:calendars
Supports **Gregorian** & **Julian** calendars. Displays available **Chinese calender**.
:::
:::
::: grid
::: card "Equinoxes and Solstices" icon:zodiac-aries
Easily queries **equinox** and **solstice** dates by a given year and location.
:::
:::
:::
