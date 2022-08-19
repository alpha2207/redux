import { combineReducers } from "redux";

const songReducer = () =>{
    return [
        { title: "We do it too", duration: '120' },
        { title: "Love me like you do", duration: '129' },
        { title: "Yeah Buddy", duration: '112' }
    ]
}

const selectSongReducer= (selectedSong=null,action) => {
    if(action.type==="SONG_SELECTED"){
        return action.payload;
    }
    return selectedSong;
}

export default reducers=combineReducers({
    songs:songReducer,
    selectedSong: selectSongReducer
})