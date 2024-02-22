export const calculateTheScoreEvaluation = (obj) => {
    const valuesArray = Object.values(obj);
    const score = valuesArray.reduce((prev, curr) => {
        return prev + curr;
    }, 0);

    return score / valuesArray.length;
};
export const scoreLevel = (score) => {
    const level = Math.ceil((score / 5) * 100);
    return level;
};

export const dateFormatting = (date, isFull) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthsFull = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    if (date) {
        const day = new Date(date);
        return `${day.getDate()} ${isFull ? monthsFull[day.getMonth()] : months[day.getMonth()]}`;
    }
    return 'N/A';
};

export const dateFormattingNumber = (_date) => {
    if (_date) {
        const day = new Date(_date);
        const month = day.getMonth() + 1;
        const date = day.getDate();

        return `${date.toString().length === 1 ? '0' + date.toString() : date} / ${
            month.toString().length === 1 ? '0' + month.toString() : month
        } / ${day.getFullYear().toString().slice(2, 5)}`;
    }
    return 'N/A';
};

export const pagination = (page, length) => {
    const PAGE_LIMIT = 10;

    return {
        count: Math.ceil(length / PAGE_LIMIT) || 1,
        start: PAGE_LIMIT * (page - 1),
        end: page * PAGE_LIMIT,
    };
};
