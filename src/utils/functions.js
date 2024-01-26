export const calculateTheScoreEvaluation = (obj) => {
    const valuesArray = Object.values(obj);
    const score = valuesArray.reduce((prev, curr) => {
        return prev + curr;
    }, 0);

    return score / valuesArray.length;
};
export const ScoreLevel = (score) => {
    const level = Math.ceil((score / 5) * 100);
    return level;
};
