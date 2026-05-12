---
title: 'Conventions'
description: 'Conventions'
---

## Altitude Calculation {#altitude-calculation}

When determining the **rising** and **setting** of an object, the effect of [atmospheric refraction][] is usually considered, making the object's rising time slightly earlier and the setting time later than they would be when there is no refraction. In this project, the atmosphere model used in calculating the altitude of a target is the same as in computing the star's apparent positions. The atmospheric pressure in this model is the sea-level standard and the temperature is set to 10°C, deriving a negative angle of approximately 34 arcminutes at the horizon. For more details, please refer to the [computing your own refraction angle][] section in the documentation of [Skyfield][] — the key scientific Python package we use in this project.

[computing your own refraction angle]: external:https://rhodesmill.org/skyfield/almanac.html#computing-your-own-refraction-angle
[atmospheric refraction]: external:https://en.wikipedia.org/wiki/Atmospheric_refraction

## Sunrise and Sunset {#sunrise-and-sunset}

Both the atmospheric refraction and the radius of the sun are taken into account in defining sunrise and sunset. [Skyfield][] uses the [official definition of sunrise and sunset][] from the **United States Naval Observatory (USNO)**:

> *For computational purposes, **sunrise** or **sunset** is defined to occur when … the center of the Sun is geometrically **50 arcminutes** below a horizontal plane … The 50-arcminute geometric depression of the Sun's center used for the computations is obtained by adding the **average apparent radius of the Sun** (16 arcminutes) to the **average amount of atmospheric refraction at the horizon** (34 arcminutes).*

[Skyfield]: external:https://rhodesmill.org/skyfield/
[official definition of sunrise and sunset]: external:https://aa.usno.navy.mil/faq/RST_defs

## Star Visibility During Twilights {#visibility-during-twilights}

::: card "Twilight Definitions from USNO"
**Sunset:** 0°
**Civil Twilight:** 0° to 6° below horizon
**Nautical Twilight:** 6° to 12° below horizon
**Astronomical Twilight:** 12° to 18° below horizon
**Nightfall:** 18° below horizon
:::

According to [Tousey and Koomen (1953)][Tousey1953], the visibility of stars and planets during twilights are as follows:

- **Sunrise/sunset:** At this time, only the brightest stars or planets, such as Venus and Jupiter, may be visible to the naked eye.
- **Civil dawn starts starts/ends:** At this time, stars brighter than magnitude 1 are visible to the naked eye in most parts of the sky.
- **Nautical twilight starts/ends:** At this time, stars brighter than magnitude 4 are visible to the naked eye in most parts of the sky.

[Tousey1953]: external:https://opg.optica.org/josa/viewmedia.cfm?uri=josa-43-3-177&seq=0&html=true

## Time Zone {#time-zone}

The time zone ID dataset invoked in this project is the ["**Same since 1970**" from Timezone Boundary Builder][Same since 1970]. According to the [IANA time zone database][IANA], this database attempts to record historical time zones and all civil changes since 1970 (the Unix time epoch).

The time zone IDs and standard offsets in this project represent the **current time zone** of a specific location. This is for deriving stable and unambiguous IDs while providing more familiar and intuitive local time reference for users. These time zone IDs are only used for deriving equinox/solstice dates, the time window determination for the rising/setting calculation, and the displayed `Standard Time` column in the result table.

[Same since 1970]: external:https://github.com/evansiroky/timezone-boundary-builder#same-since-1970
[IANA]: external:https://www.iana.org/time-zones

## Symbols of Arcminute and Arcsecond {#arcminute-and-arcsecond}

**Arcminutes** and **arcseconds** are marked with the ASCII **straight single quote `'`** and **straight double quote `"`** to adapt to various systems and media.

## Date Format {#date-format}

### ISO 8601

[ISO 8601: Date and time format](external:https://www.iso.org/iso-8601-date-and-time-format.html)

```text
# ISO 8601-2:2019
Date and time: YYYY-MM-DDThh:mm:ss[.sss][Z|±hh:mm]
Time range: YYYY-MM-DD/YYYY-MM-DD
```

### Common Era {#common-era}

[Year Dating Conventions from NASA](external:https://eclipse.gsfc.nasa.gov/SEhelp/dates.html) explaining using `BCE/CE` instead of `BC/AD`:
> *In recent years, some historical scholars have advocated the use of the religiously neutral abbreviations BCE (for "Before Common Era") to substitute for "BC," and "CE" (for "Common Era") to replace "AD." These secular terms are both used as suffixes making them better suited to computer generated tables.*
