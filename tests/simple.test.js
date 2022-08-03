function getNum(headers, showExpand, singleSelect) {
  if (singleSelect) {
    return headers.length - 1;
  }
  return showExpand ? headers.length - 2 : headers.length;
}

test('gets the right number', () => {
  const length = 3;
  const headers = Array.from({ length });
  expect(getNum(headers, true, true)).toBe(length - 1);
  expect(getNum(headers, true, false)).toBe(length - 2);
  expect(getNum(headers, false, false)).toBe(length);
  expect(getNum(headers, false, true)).toBe(length - 1);
});