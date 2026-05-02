---
title: '慣例約定'
description: '慣例約定'
---

## 計算高度角 {#altitude-calculation}

當定義一顆星的**升落點**時，通常需要考慮[大氣折射][atmospheric refraction]（蒙氣差）。這個效應使升起的時間略早於無折射的情況，而下落時間則顯得略晚。本項目中計算高度角和天體視運動軌跡時使用同一個大氣模型。模型中使用標準大氣壓，温度為 10°C，由此得到的地平線處折射角約為 34 角分。更多細節請參閲本項目使用的主要 Python 科學包 [Skyfield][] 文檔中的[計算折射角][computing your own refraction angle]部分。

[computing your own refraction angle]: https://rhodesmill.org/skyfield/almanac.html#computing-your-own-refraction-angle
[atmospheric refraction]: https://zh.wikipedia.org/wiki/%E5%A4%A7%E6%B0%A3%E6%8A%98%E5%B0%84

## 日出和日落 {#sunrise-and-sunset}

定義日出和日落時，不僅包含大氣折射，也計入太陽半徑。[Skyfield][] 遵循美國海軍天文台給出的[日出日落定義][official definition of sunrise and sunset]：

> 出於計算目的，日出日落被定義為……日面中心位於地平線下方 **50 角分**處……這 50 角分是通過將**太陽平均視半徑**（16 角分）與**地平線處平均大氣折射角**（34 角分）相加得到的。

[Skyfield]: https://rhodesmill.org/skyfield/
[official definition of sunrise and sunset]: https://aa.usno.navy.mil/faq/RST_defs

## 晨昏時分的天體可見度 {#visibility-during-twilights}

::: card "美國海軍天文台給出的晨昏蒙影定義"
**日落：** 0°
**民用晨昏蒙影：**地平線下 0° 至 6°
**航海晨昏蒙影：**地平線下 6° 至 12°
**天文晨昏蒙影t：**地平線下 12° 至 18°
**入夜：**地平線下 18°
:::

根據 [Tousey 和 Koomen（1953）][Tousey1953]，各晨昏蒙影階段天體可見度如下：

- **日出/日落：**此時只有金星、木星等非常亮的星才能肉眼可見。
- **民用曙光始/民用暮光終：**此時在大部分天區亮於 1 等的星能夠肉眼可見。
- **航海曙光始/航海暮光終：**此時在大部分天區亮於 4 等的星能夠肉眼可見。

[Tousey1953]: https://opg.optica.org/josa/viewmedia.cfm?uri=josa-43-3-177&seq=0&html=true

## 角分和角秒符號 {#arcminute-and-arcsecond}

角分和角秒分別使用 ASCII **半角單引號 `'`** 和**半角雙引號 `"`** 以適應不同的顯示方式。

## 時區 {#time-zone}

本項目中調用的時區數據使用的是 ["**Same since 1970**" from Timezone Boundary Builder][Same since 1970]。根據 [IANA time zone database][IANA]，這個數據庫該數據庫試圖記錄自 1970 年（Unix 時間戳）以來的歷史時區和所有民事變更。

本項目中的時區標識和標準偏移量代表特定位置的**當前時區**。這是為了保證生成穩定且無歧義的時區標識，同時也為用户提供更熟悉、更直觀的當地時間參考。這些時區標識僅用於計算二分二至日期、計算升落時間窗口以及結果表格中`標準時間`這一列的數據顯示。

[Same since 1970]: https://github.com/evansiroky/timezone-boundary-builder#same-since-1970
[IANA]: https://www.iana.org/time-zones
