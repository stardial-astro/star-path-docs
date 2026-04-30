---
title: '日期输入'
description: '填写年月日或快速输入二分二至日期'
---

填写查询的年月日，或使用**二分二至**按钮期快速输入相应日期。

## 输入格里历或儒略历日期

可查询的日期范围为：**公元前3001年2月23日（儒略历）**至**公元3000年5月6日（格里历）**。

![输入日期](../../../assets/images/image-20.png){ .img-light } ![输入日期](../../../assets/images/image-21.png){ .img-dark }

`年`的输入值根据 [天文计年法][astronomical year numbering]，`0` 表示**公元前1年**。

::: callout info "日历转换"
格里历和儒略历的日期会在生成图像时同时返回。日期不会在切换这两种历时转换，而是在计算轨迹的同时进行转换。
:::

::: callout tip "农历"
如存在相应的[农历][CC-python]日期，将[以提示的形式显示在结果中][CC].

[CC-python]: https://github.com/ytliu0/ChineseCalendar-python/blob/master/README_simp.md
[CC]: /guides/results

:::

[astronomical year numbering]: https://zh.wikipedia.org/wiki/%E5%A4%A9%E6%96%87%E8%A8%88%E5%B9%B4

## 查询二分二至日期

当`年`给定且已经选定了地点时，点击`快捷输入`面板上其中一个**二分二至**按钮，可自动填入相应日期。该日期以当地的**标准时间**显示。

![二分二至](../../../assets/images/image-22.png){ .img-light } ![二分二至](../../../assets/images/image-23.png){ .img-dark }

::: callout info
二分二至日期时始终显示为格里历。
:::

在南半球，春分点又称为[三月分点][March equinox]，夏至点又称为[六月至点][June solstice]，以此类推。

[March equinox]: https://zh.wikipedia.org/wiki/%E5%8C%97%E5%88%86%E9%BB%9E
[June solstice]: https://zh.wikipedia.org/wiki/%E5%85%AD%E6%9C%88%E8%87%B3%E9%BB%9E
