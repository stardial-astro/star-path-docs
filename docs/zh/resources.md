---
title: '引用资源'
description: '引用资源'
---

## 星历表 {#ephemeris}

**数据来源：** [JPL Planetary and Lunar Ephemerides](https://ssd.jpl.nasa.gov/planets/eph_export.html)
**本项目中使用的星历表数据：** `DE406`

::: card "日期范围"

```sh
# DE406 (created May 1997, 286.9MiB)
-3000-01-29/3000-05-06 (Gregorian)
-3000-02-23/3000-04-15 (Julian)
# DE422 (created September 2009, 622.7MiB)
-3000-11-13/3000-01-30 (Gregorian)
-3000-12-07/3000-01-10 (Julian)
```

:::

## 依巴谷星表 {#hip}

**数据来源：** [The Hipparcos and Tycho Catalogues](https://cdsarc.cds.unistra.fr/ftp/cats/I/239)

## 拜耳命名法星名和固有名称 {#bayer-designation-and-proper-name}

**数据来源：** [Tables from The Hipparcos and Tycho Catalogues](https://cdsarc.cds.unistra.fr/ftp/I/239/version_cd/tables)
表格：`ident4`、`ident6`

## 中文星名 {#chinese-star-names}

**原始表格（繁体中文）：** [香港天文台的亮星中英对照表](https://web.archive.org/web/20120209032035/http://www.lcsd.gov.hk/CE/Museum/Space/Research/StarName/c_research_chinengstars.htm)

::: collapsible "添加的条目"
列表中添加了这些条目：

- Proxima Centauri,a,Cen_C,比鄰星
- Theemin,n,Eri,九州殊口四
- Ta Tsun,y,UMa,太尊

:::

::: collapsible "修改的条目"
为保持一致性，修改了列表中的这些条目：

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

::: collapsible "删除的重复条目"
删除了这些条目的重复项：

- Sadatoni,z,Car,柱二(畢宿)
- Suhail Radar,z,Car,柱二(畢宿)
- Arkab,b,Sgr,"天淵一 , 天淵二"
- Dabih Major,b1,Cap,牛宿一
- Dabih Minor,b2,Cap,牛宿一
- Added HIP:
- k_Pup,弧矢六,37229

:::

## 简繁转换 {#ts-sc-conversion}

**Python 包：** [开放中文转换](https://pypi.org/project/OpenCC)

用来将繁体中文星名表转换为简体中文。

## 拼音 {#pinyin}

**Python 包：** [汉字拼音转换工具](https://github.com/mozillazg/python-pinyin)

用来将繁体中文星名表转换为拼音。

## 农历 {#chinese-calendar}

**Python 包：** [中历-公历转换](https://github.com/ytliu0/ChineseCalendar-python)
**支持的日期范围：** 公元前 722 年至公元 2200 年
