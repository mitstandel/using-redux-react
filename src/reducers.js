export const numberOfClicksReducer = (state = 0, action) => {
    const { type } = action;

    switch(type) {
        case 'COUNTER_BUTTON_CLICKED':
            return state.payload.amount
        case 'default':
            return state;
    }
}
