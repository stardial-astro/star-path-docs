---
title: 'Documentation'
description: 'Trace apparent motion of planets and stars observed from any location on any chosen date.'
titleAppend: false
---

::: hero layout:split glow:false

# Welcome to Star&nbsp;Path Viewer

An astronomical application for tracking the apparent motion of a given celestial object.

::: button "Guides" ./guides/location.md icon:telescope
::: button "GitHub" external:https://github.com/stardial-astro/star-path-viewer color:#333 icon:github

== side
<img src="../../assets/images/spv-preview-dark.png" alt="Preview" width="280" class="img-dark align-center">
<img src="../../assets/images/spv-preview-light.png" alt="Preview" width="280" class="img-light align-center">
:::

## :rocket: Quick Start {#quick-start}

[Star Path Viewer][] computes this target's positions on the celestial sphere based on the querying information. It generates a diagram with a curved path representing the [apparent motion][] projected onto the observer's local [horizontal coordinate system][]. A table of the rising/setting/transit/twilight times and star positions will also be appended.

**Step 1.** To make a request, please provide the [`LOCATION`][Location Input], [`LOCAL DATE`][Date Input], and [`CELESTIAL OBJECT`][Star Input].

**Step 2.** Click the [`DRAW STAR PATH`][Draw] button to submit the request. The results will be displayed below this button.

::: callout tip "There are other things you can do using this app as a handy gizmo"
**→** [Obtain the **latitude/longitude** of a location by searching an address.][Search Address]
**→** [Query the **equinox/solstice** dates of a certain year.][Quick Entry]
**→** [Check a date in multiple **calendars**.][Enter Date]
**→** [Look up a star's **Hipparcos Catalogue** number by its name, and vice versa.][HIP]
**→** [By querying a star's that shows up tonight, view the **sunset and twilight times** from the results to determine the ideal time to observe the aurora borealis or meteor showers.][Anno]

[Search Address]: ./guides/location/#search-address
[Quick Entry]: ./guides/date/#look-up-season
[Enter Date]: ./guides/date/#enter-date
[HIP]: ./guides/star/#search-hip
[Anno]: ./guides/results/#legend-and-table

:::

[Star Path Viewer]: https://star-path-viewer.pages.dev/
[apparent motion]: https://en.wikipedia.org/wiki/Diurnal_motion
[horizontal coordinate system]: https://en.wikipedia.org/wiki/Horizontal_coordinate_system
[Location Input]: ./guides/location
[Date Input]: ./guides/date
[Star Input]: ./guides/star
[Draw]: ./guides/results

## :sparkles: Highlights {#highlights}

::: grids
::: grid
::: card "Across the Ages" icon:pyramid
Covers a wide range of querying dates from **3001 BCE** to **3000 CE**.
:::
:::
::: grid
::: card "Twilight Transitions" icon:sunrise
Marks a star's **rising/setting/transit** times and its positions during **twilights**.
:::
:::
::: grid
::: card "Multiple Calendars" icon:calendars
Supports **Gregorian** and **Julian** calendars. Displays available **Chinese calender**.
:::
:::
::: grid
::: card "Equinoxes and Solstices" icon:zodiac-aries
Easily queries **equinoxes** and **solstices** by giving a year and a location.
:::
:::
:::
