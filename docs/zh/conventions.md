---
title: '惯例约定'
description: '惯例约定'
---

## 升落点

当定义一颗星的**升落点**时，通常考虑[大气折射][atmospheric refraction]效应。本应用中计算升落点使用的大气模型和计算视运动轨迹时使用的一致。

[atmospheric refraction]: https://zh.wikipedia.org/wiki/%E5%A4%A7%E6%B0%A3%E6%8A%98%E5%B0%84

## 日出和日落

本项目遵循的[日出和日落定义][sunrise and sunset conventions]：

> For computational purposes, **sunrise** or **sunset** is defined to occur when … the center of the Sun is geometrically 50 arcminutes below a horizontal plane. … The 50-arcminute geometric depression of the Sun's center used for the computations is obtained by adding the average apparent radius of the Sun (16 arcminutes) to the average amount of atmospheric refraction at the horizon (34 arcminutes).

[sunrise and sunset conventions]: https://aa.usno.navy.mil/faq/RST_defs

## 晨昏蒙影分界点

根据 [Tousey and Koomen (1953)][Tousey1953]，晨昏蒙影分界点定义为：

> - The **civil dawn/dusk** is the transition point between the civil twilight and the nautical twilight, marking the time when the sun is **6 degrees** below the horizon.
> - The **nautical dawn/dusk** is the transition point between the nautical twilight and the astronomical twilight, marking the time when the sun is **12 degrees** below the horizon.
> - The **astronomical dawn/dusk** is the beginning/ending of the astronomical twilight, marking the time when the sun is **18 degrees** below the horizon.

[Tousey1953]: https://opg.optica.org/josa/viewmedia.cfm?uri=josa-43-3-177&seq=0&html=true

## 角分和角秒符号

角分和角秒分别使用 ASCII **半角单引号 `'`**和**半角双引号 `"`**以适应不同显示方式。

## 时区

本项目中的时区数据使用的是 ["**Same since 1970**" from Timezone Boundary Builder][Same since 1970]。根据 [IANA time zone database][IANA]，这个数据库该数据库试图记录自 1970 年（Unix 时间戳）以来的历史时区和所有民事变更。

本项目中的时区标识和标准偏移量代表特定位置的**当前时区**。这是为了保证生成稳定且无歧义的时区标识，同时也为用户提供更熟悉、更直观的当地时间参考。这些时区标识仅用于计算二分二至日期、计算升落时间窗口以及结果表格中“标准时间”这一列的数据显示。

应用中的地方平时（LMT）直接由当地经纬度计算得出。

[Same since 1970]: https://github.com/evansiroky/timezone-boundary-builder#same-since-1970
[IANA]: https://www.iana.org/time-zones
