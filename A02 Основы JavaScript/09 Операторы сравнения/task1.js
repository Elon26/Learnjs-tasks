"use strict"

5 > 4 // true - сравнение чисел
"ананас" > "яблоко" // false, посимвольное сравнение строк, символ "а" меньше "я"
"2" > "12" // true, посимвольное сравнение строк, символ "2" больше "1"
undefined == null // true - специальный случай
undefined === null // false - сравнение разных типов данных
null == "\n0\n" // false - null равно только undefined и только при нестрогом сравнении
null === +"\n0\n" // false - сравнение разных типов данных