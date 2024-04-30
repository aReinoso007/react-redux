/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
export default (state: any, actions: { type: any; payload: any; }) => {
    switch(actions.type){
        case "rotate":
            return actions.payload;
        default:
            return state;
    }
}