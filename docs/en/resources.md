---
title: 'Resources'
description: 'Resources'
---

## Ephemeris {#ephemeris}

**Data source:** [JPL Planetary and Lunar Ephemerides](https://ssd.jpl.nasa.gov/planets/eph_export.html)
**Ephemeris used in this project:** `DE406`

::: card "Date Range"

```sh
# DE406 (created May 1997, 286.9MiB)
-3000-01-29/3000-05-06 (Gregorian)
-3000-02-23/3000-04-15 (Julian)
# DE422 (created September 2009, 622.7MiB)
-3000-11-13/3000-01-30 (Gregorian)
-3000-12-07/3000-01-10 (Julian)
```

:::

## Hipparcos Catalogue {#hip}

**Data source:** [The Hipparcos and Tycho Catalogues](https://cdsarc.cds.unistra.fr/ftp/cats/I/239)

## Bayer Designation and Proper Name {#bayer-designation-and-proper-name}

**Data source:** [Tables from The Hipparcos and Tycho Catalogues](https://cdsarc.cds.unistra.fr/ftp/I/239/version_cd/tables)
Tables: `ident4`, `ident6`

## Chinese Star Names {#chinese-star-names}

**Original list (in Traditional Chinese):** [Chinese star name list from Hong Kong Observatory](https://web.archive.org/web/20120209032035/http://www.lcsd.gov.hk/CE/Museum/Space/Research/StarName/c_research_chinengstars.htm)

::: collapsible "Added Entries"
These entries are added to the list:

- Proxima Centauri,a,Cen_C,比鄰星
- Theemin,n,Eri,九州殊口四
- Ta Tsun,y,UMa,太尊

:::

::: collapsible "Modified Entries"
These entires are modified for consistency:

- 九<span style="color:red">洲</span>殊口 → 九州殊口
- Ta Tsun,p,UMa,"內階增七 , 內階增九" → Althiba II,p1,UMa,內階增九
- Vendemiatrix,e,Vir,"東次<span style="color:red">相</span> , 太微左垣四" → Vendemiatrix,e,Vir,"東次將 , - 太微左垣四"
- ...,x,Cet,天倉四 → ...,z,Cet,天倉四
- ...,x,Dra,"上弼 , 紫微左垣四" → ...,z,Dra,"上弼 , 紫微左垣四"
- ...,x,Leo,軒轅十一 → ...,z,Leo,軒轅十一
- ...,x,Peg,雷電一 → ...,z,Peg,雷電一
- ...,x,Sgr,斗宿六 → ...,z,Sgr,斗宿六
- ...,x,UMi,勾陳四 → ...,z,UMi,勾陳四
- ...,a,Cap,牛宿二 → ...,a2,Cap,牛宿二

:::

::: collapsible "Removed Duplicates"
Duplicates of these entries are removed:

- Sadatoni,z,Car,柱二(畢宿)
- Suhail Radar,z,Car,柱二(畢宿)
- Arkab,b,Sgr,"天淵一 , 天淵二"
- Dabih Major,b1,Cap,牛宿一
- Dabih Minor,b2,Cap,牛宿一
- Added HIP:
- k_Pup,弧矢六,37229

:::

## Traditional/Simplified Chinese Conversion {#ts-sc-conversion}

**Python package:** [Open Chinese Convert](https://pypi.org/project/OpenCC)

This package is used to generate star names in Simplified Chinese from the Traditional Chinese star name list.

## Pinyin {#pinyin}

**Python package:** [python-pinyin](https://github.com/mozillazg/python-pinyin)

This package is used to generate pinyin names from the Traditional Chinese star name list.

## Chinese Calendar {#chinese-calendar}

**Python package:** [Conversion Between Western and Chinese Calendar](https://github.com/ytliu0/ChineseCalendar-python)
**Available date range:** 722 BCE to 2200 CE
