---
title: 'Conventions'
description: 'Conventions'
---

## Risings and Settings

When defining the **rising** and **setting** of a star, the effect of [atmospheric refraction][] is usually considered. In this app, the atmosphere model used in deriving the rising and setting times is the same as in calculating the star's apparent positions.

[atmospheric refraction]: https://en.wikipedia.org/wiki/Atmospheric_refraction

## Sunrise and Sunset

We follow these [sunrise and sunset conventions][]:

> For computational purposes, **sunrise** or **sunset** is defined to occur when … the center of the Sun is geometrically 50 arcminutes below a horizontal plane. … The 50-arcminute geometric depression of the Sun's center used for the computations is obtained by adding the average apparent radius of the Sun (16 arcminutes) to the average amount of atmospheric refraction at the horizon (34 arcminutes).

[sunrise and sunset conventions]: https://aa.usno.navy.mil/faq/RST_defs

## Twilight Stage Transition Points

According to [Tousey and Koomen (1953)][Tousey1953], the twilight stage transition points are defined as follows:

> - The **civil dawn/dusk** is the transition point between the civil twilight and the nautical twilight, marking the time when the sun is **6 degrees** below the horizon.
> - The **nautical dawn/dusk** is the transition point between the nautical twilight and the astronomical twilight, marking the time when the sun is **12 degrees** below the horizon.
> - The **astronomical dawn/dusk** is the beginning/ending of the astronomical twilight, marking the time when the sun is **18 degrees** below the horizon.

[Tousey1953]: https://opg.optica.org/josa/viewmedia.cfm?uri=josa-43-3-177&seq=0&html=true

## Arcminute and Arcsecond Symbols

**Arcminutes** and **arcseconds** are marked with the ASCII **straight single quote `'`** and **straight double quote `"`** to adapt to multiple systems and media.

## Time Zone

The time zone ID dataset used in this app is the ["**Same since 1970**" from Timezone Boundary Builder][Same since 1970]. According to the [IANA time zone database][IANA], this database attempts to record historical time zones and all civil changes since 1970 (the Unix time epoch).

The time zone IDs and standard offsets in this project represent the **current time zone** of a specific location. This is for deriving stable and unambiguous IDs while providing more familiar and intuitive local time reference for users. These time zone IDs are only used for deriving equinox/solstice dates, the time window determination for the rising/setting calculation, and the displayed Standard Time column in the result table.

The Local Mean Time (LMT) in this app is derived directly from the latitude/longitude.

[Same since 1970]: https://github.com/evansiroky/timezone-boundary-builder#same-since-1970
[IANA]: https://www.iana.org/time-zones
