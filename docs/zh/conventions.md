---
title: '惯例约定'
description: '惯例约定'
---

## 计算高度角 {#altitude-calculation}

当定义一颗星的**升落点**时，通常需要考虑[大气折射][atmospheric refraction]（蒙气差）。这个效应使升起的时间略早于无折射的情况，而下落时间则显得略晚。本项目中计算高度角和天体视运动轨迹时使用同一个大气模型。模型中使用标准大气压，温度为 10°C，由此得到的地平线处折射角约为 34 角分。更多细节请参阅本项目使用的主要 Python 科学包 [Skyfield][] 文档中的[计算折射角][computing your own refraction angle]部分。

[computing your own refraction angle]: https://rhodesmill.org/skyfield/almanac.html#computing-your-own-refraction-angle
[atmospheric refraction]: https://zh.wikipedia.org/wiki/%E5%A4%A7%E6%B0%A3%E6%8A%98%E5%B0%84

## 日出和日落 {#sunrise-and-sunset}

定义日出和日落时，不仅包含大气折射，也计入太阳半径。[Skyfield][] 遵循美国海军天文台给出的[日出日落定义][official definition of sunrise and sunset]：

> *出于计算目的，日出日落被定义为……日面中心位于地平线下方 **50 角分**处……这 50 角分是通过将**太阳平均视半径**（16 角分）与**地平线处平均大气折射角**（34 角分）相加得到的。*

[Skyfield]: https://rhodesmill.org/skyfield/
[official definition of sunrise and sunset]: https://aa.usno.navy.mil/faq/RST_defs

## 晨昏时分的天体可见度 {#visibility-during-twilights}

::: card "美国海军天文台给出的晨昏蒙影定义"
**日落：** 0°
**民用晨昏蒙影：** 地平线下 0° 至 6°
**航海晨昏蒙影：** 地平线下 6° 至 12°
**天文晨昏蒙影：** 地平线下 12° 至 18°
**入夜：** 地平线下 18°
:::

根据 [Tousey 和 Koomen（1953）][Tousey1953]，各晨昏蒙影阶段天体可见度如下：

- **日出/日落：** 此时只有金星、木星等非常亮的星才能肉眼可见。
- **民用曙光始/民用暮光终：** 此时在大部分天区亮于 1 等的星能够肉眼可见。
- **航海曙光始/航海暮光终：** 此时在大部分天区亮于 4 等的星能够肉眼可见。

[Tousey1953]: https://opg.optica.org/josa/viewmedia.cfm?uri=josa-43-3-177&seq=0&html=true

## 时区 {#time-zone}

本项目中调用的时区数据使用的是 ["**Same since 1970**" from Timezone Boundary Builder][Same since 1970]。根据 [IANA time zone database][IANA]，这个数据库该数据库试图记录自 1970 年（Unix 时间戳）以来的历史时区和所有民事变更。

本项目中的时区标识和标准偏移量代表特定位置的**当前时区**。这是为了保证生成稳定且无歧义的时区标识，同时也为用户提供更熟悉、更直观的当地时间参考。这些时区标识仅用于计算二分二至日期、计算升落时间窗口以及结果表格中`标准时间`这一列的数据显示。

[Same since 1970]: https://github.com/evansiroky/timezone-boundary-builder#same-since-1970
[IANA]: https://www.iana.org/time-zones

## 角分和角秒符号 {#arcminute-and-arcsecond}

角分和角秒分别使用 ASCII **半角单引号 `'`** 和**半角双引号 `"`** 以适应不同的显示方式。

## 日期格式 {#date-format}

### ISO 8601

[ISO 8601: 日期和时间格式](https://www.iso.org/iso-8601-date-and-time-format.html)

```text
# ISO 8601-2:2019
日期和时间: YYYY-MM-DDThh:mm:ss[.sss][Z|±hh:mm]
时间范围: YYYY-MM-DD/YYYY-MM-DD
```

### 公历纪元 {#common-era}

[NASA 关于公历纪元表示方法的约定](https://eclipse.gsfc.nasa.gov/SEhelp/dates.html) 解释了使用 `BCE/CE` 代替 `BC/AD` 的理由：

> *近年来，一些历史学者提倡使用宗教中立的缩写词 BCE（公元前）代替“BC”、使用“CE”（公元）代替“AD”。由于这种表示方法的两个缩写都是后缀，因此更适合计算机表格的显示。*
