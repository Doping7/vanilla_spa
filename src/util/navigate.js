/*
* navigate 구현
* */


export const navigate = (to, isReplace = false) => {
    const historyChangeEvent = new CustomEvent("historychange", {
        detail: {
            to,
            isReplace
        }
    });

    dispatchEvent(historyChangeEvent);
}
