---
title: '引用資源'
description: '引用資源'
---

## 星曆錶 {#ephemeris}

**數據來源：** [美國噴氣推進實驗室（JPL）星曆錶](https://ssd.jpl.nasa.gov/planets/eph_export.html)
**本項目中使用的星曆錶數據：** `DE406`
**日期範圍：**

```sh
# DE406 (created May 1997, 286.9MiB)
-3000-01-29/3000-05-06 (Gregorian)
-3000-02-23/3000-04-15 (Julian)
# DE422 (created September 2009, 622.7MiB)
-3000-11-13/3000-01-30 (Gregorian)
-3000-12-07/3000-01-10 (Julian)
```

## 依巴谷星表 {#hip}

**數據來源：** [依巴谷和第谷星表](https://cdsarc.cds.unistra.fr/ftp/cats/I/239)

## 拜耳星名和專有名稱 {#bayer-designation-and-proper-name}

**數據來源：** [依巴谷和第谷星表中的交叉證認表](https://cdsarc.cds.unistra.fr/ftp/I/239/version_cd/tables)
**表格：**
`ident4` —— 拜耳星名與依巴谷星表編號
`ident6` —— 專有名稱與依巴谷星表編號

## 中文星名 {#chinese-star-names}

**原始表格（繁體中文）：** [香港天文台的亮星中英對照表](https://web.archive.org/web/20120209032035/http://www.lcsd.gov.hk/CE/Museum/Space/Research/StarName/c_research_chinengstars.htm)

::: collapsible "添加的條目"
列表中添加了這些條目：

- Proxima Centauri,a,Cen_C,比鄰星
- Theemin,n,Eri,九州殊口四
- Ta Tsun,y,UMa,太尊

:::

::: collapsible "修改的條目"
為保持一致性，修改了列表中的這些條目：

- 九<span style="color:red">洲</span>殊口 → 九州殊口
- Ta Tsun,p,UMa,"內階增七 , 內階增九" → Althiba II,p1,UMa,內階增九
- Vendemiatrix,e,Vir,"東次<span style="color:red">相</span> , 太微左垣四" → Vendemiatrix,e,Vir,"東次將 , - 太微左垣四"
- ...,x,Cet,天倉四 → ...,z,Cet,天倉四
- ...,x,Dra,"上弼 , 紫微左垣四" → ...,z,Dra,"上弼 , 紫微左垣四"
- ...,x,Leo,軒轅十一 → ...,z,Leo,軒轅十一
- ...,x,Peg,雷電一 → ...,z,Peg,雷電一
- ...,x,Sgr,鬥宿六 → ...,z,Sgr,鬥宿六
- ...,x,UMi,勾陳四 → ...,z,UMi,勾陳四
- ...,a,Cap,牛宿二 → ...,a2,Cap,牛宿二

:::

::: collapsible "刪除的重複條目"
這些條目與其他條目重複因此已刪除：

- Sadatoni,z,Car,柱二(畢宿)
- Suhail Radar,z,Car,柱二(畢宿)
- Arkab,b,Sgr,"天淵一 , 天淵二"
- Dabih Major,b1,Cap,牛宿一
- Dabih Minor,b2,Cap,牛宿一

:::

::: collapsible "添加依巴谷星表編號"
添加了缺少的依巴谷星表編號：

- k_Pup,弧矢六,37229

:::

## 簡繁轉換 {#ts-sc-conversion}

**Python 包：** [開放中文轉換](https://pypi.org/project/OpenCC)

用來將繁體中文星名錶轉換為簡體中文。

## 拼音 {#pinyin}

**Python 包：** [漢字拼音轉換工具](https://github.com/mozillazg/python-pinyin)

用來將繁體中文星名錶轉換為拼音。

## 農曆 {#chinese-calendar}

**Python 包：** [中歷-公曆轉換](https://github.com/ytliu0/ChineseCalendar-python)
**支持的日期範圍：** 公元前 722 年至公元 2200 年
