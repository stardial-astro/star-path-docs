---
title: '慣例約定'
description: '慣例約定'
---

## 升落點

當定義一顆星的**升落點**時，通常考慮[大氣折射][atmospheric refraction]效應。本應用中計算升落點使用的大氣模型和計算視運動軌跡時使用的一致。

[atmospheric refraction]: https://zh.wikipedia.org/wiki/%E5%A4%A7%E6%B0%A3%E6%8A%98%E5%B0%84

## 日出和日落

本項目遵循的[日出和日落定義][sunrise and sunset conventions]：

> For computational purposes, **sunrise** or **sunset** is defined to occur when … the center of the Sun is geometrically 50 arcminutes below a horizontal plane. … The 50-arcminute geometric depression of the Sun's center used for the computations is obtained by adding the average apparent radius of the Sun (16 arcminutes) to the average amount of atmospheric refraction at the horizon (34 arcminutes).

[sunrise and sunset conventions]: https://aa.usno.navy.mil/faq/RST_defs

## 晨昏蒙影分界點

根據 [Tousey and Koomen (1953)][Tousey1953]，晨昏蒙影分界點定義為：

> - The **civil dawn/dusk** is the transition point between the civil twilight and the nautical twilight, marking the time when the sun is **6 degrees** below the horizon.
> - The **nautical dawn/dusk** is the transition point between the nautical twilight and the astronomical twilight, marking the time when the sun is **12 degrees** below the horizon.
> - The **astronomical dawn/dusk** is the beginning/ending of the astronomical twilight, marking the time when the sun is **18 degrees** below the horizon.

[Tousey1953]: https://opg.optica.org/josa/viewmedia.cfm?uri=josa-43-3-177&seq=0&html=true

## 角分和角秒符號

角分和角秒分別使用 ASCII **半角單引號 `'`**和**半角雙引號 `"`**以適應不同顯示方式。

## 時區

本項目中的時區數據使用的是 ["**Same since 1970**" from Timezone Boundary Builder][Same since 1970]。根據 [IANA time zone database][IANA]，這個數據庫該數據庫試圖記錄自 1970 年（Unix 時間戳）以來的歷史時區和所有民事變更。

本項目中的時區標識和標準偏移量代表特定位置的**當前時區**。這是為了保證生成穩定且無歧義的時區標識，同時也為用户提供更熟悉、更直觀的當地時間參考。這些時區標識僅用於計算二分二至日期、計算升落時間窗口以及結果表格中“標準時間”這一列的數據顯示。

應用中的地方平時（LMT）直接由當地經緯度計算得出。

[Same since 1970]: https://github.com/evansiroky/timezone-boundary-builder#same-since-1970
[IANA]: https://www.iana.org/time-zones
