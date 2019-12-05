/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import test from 'ava';
import { binarySearch } from '../index.js';

test('search result with exact match (ascending)', function(t) {
  let list = [1, 2, 3, 3.07, 3.1, 3.12, 3.13, 3.14, 3.3, 5, 12];
  let value = 3.12;
  let baseLum = 0.7;
  let searchResult = binarySearch(list, value, baseLum);

  t.is(
    searchResult,
    3.12
  );
});

test('search result with exact match (descending)', function(t) {
  let list = [12, 5, 3.3, 3.14, 3.13, 3.12, 3.1, 3.07, 3, 2, 1];
  let value = 3.12;
  let baseLum = 0.3;
  let searchResult = binarySearch(list, value, baseLum);

  t.is(
    searchResult,
    3.12
  );
});

test('closest match (ascending)', function(t) {
  let list = [1, 2, 3, 3.07, 3.1, 3.12, 3.13, 3.14, 3.3, 5, 12];
  let value = 3.09;
  let baseLum = 0.7;
  let searchResult = binarySearch(list, value, baseLum);

  t.is(
    searchResult,
    3.1
  );
});
