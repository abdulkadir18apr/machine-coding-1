export const HabitReducer=(state,action)=>{
    const {type,payload}=action;
    switch(type){
        case "Add-Habit":
            console.log("inside")
            return {
                ...state,habits:[...state.habits,payload]
            }
        case "Edit-Habit":
            console.log(payload);
            return {
                ...state, habits:[...state.habits.map((habit)=>habit.id===payload.id?{...payload}:{...habit})]
            }
        case "Set-Archive":
            return {
                ...state,habits:[...state.habits.map((habit)=>habit.id===payload?{...habit,isArchive:true}:{...habit})]
            }
        case "Un-Set-Archive":
            return {
                ...state,habits:[...state.habits.map((habit)=>habit.id===payload?{...habit,isArchive:false}:{...habit})]
            }
        case "Delete-Habit":
            return {
                ...state,habits:[...state.habits.filter((habit)=>habit.id!==payload)]
            }
        default:
            return state;
    }

}