/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let newArray: number[] = [];
    if (numbers.length == 1) {
        newArray = [...numbers, ...numbers];
    } else if (numbers.length > 1) {
        const copied: number[] = [...numbers];
        newArray = [copied[0], copied[numbers.length - 1]];
    }
    return newArray;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((a_number: number): number => a_number * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const integers = numbers.map((a_string: string): number =>
        !Number.isNaN(parseInt(a_string)) ? parseInt(a_string) : 0
    );
    return integers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const removedDollars = amounts.map((a_string: string): string =>
        a_string[0] === "$" ? a_string.slice(1) : a_string
    );
    const integers = removedDollars.map((a_string: string): number =>
        !Number.isNaN(parseInt(a_string)) ? parseInt(a_string) : 0
    );

    return integers;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQuestion = messages
        .filter(
            (message: string): boolean => message[message.length - 1] != "?"
        )
        .map((message: string): string =>
            message[message.length - 1] === "!"
                ? message.toUpperCase()
                : message
        );
    return noQuestion;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word: string): boolean => word.length < 4);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    } else {
        const notRGB = colors.filter(
            (color: string): boolean =>
                color != "red" && color != "blue" && color != "green"
        );

        let a: boolean;
        if (notRGB.length === 0) {
            a = true;
        } else {
            a = false;
        }
        return a;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    } else {
        const sum = addends.reduce(
            (total: number, num: number) => total + num,
            0
        );
        const s = addends.join("+");
        s.slice(addends.length - 1, addends.length - 1);
        const eqxn = sum + "=" + s;
        return eqxn;
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const arr = [...values];
    const first_negative = arr.findIndex((value: number): boolean => value < 0);
    let sum = 0;
    if (first_negative === -1) {
        sum = arr.reduce((total: number, num: number) => total + num, 0);
        arr.splice(values.length, 0, sum);
    } else {
        const trimmed_arr = [...values].splice(0, first_negative);
        sum = trimmed_arr.reduce(
            (total: number, num: number) => total + num,
            0
        );
        arr.splice(first_negative + 1, 0, sum);
    }
    return arr;
}
