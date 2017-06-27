# `@orodio/interleave`

[![Build Status](https://travis-ci.org/orodio/gate.svg?branch=master)](https://travis-ci.org/orodio/interleave)

### Install

```
yarn add @orodio/interleave
```

### Use

```
import { interleave } from '@orodio/interleave'

const arr1 = [1, 2, 3, 4, 5]
const arr2 = ["a", "b", "c", "d"]

const arr3 = interleave(arr1, arr2)
const arr4 = [1, "a", 2, "b", 3, "c", 4, "d", 5]

assert(arr3, arr4)
```
