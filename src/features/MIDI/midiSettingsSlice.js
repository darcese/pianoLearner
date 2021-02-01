import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchInitialState = createAsyncThunk('midiSettings/fetchInitialState', async () => {
    const response = await fetch('fakeMidiUserSettings.json');
    const data = await response.json();
    return data;
  })

export const midiSettingsSlice = createSlice({
    name: 'midiSettings',
    initialState: {
      currentInstrument: '',
      allInstrumentsMidiKeyMap: {},
      status: 'idle',
      error: null // remember it has to be plain serializble object. only nested strings and numbers inside
    },                              // let allInstrumentsMap = {instru1 : {65: "A", 66: "B"}}; passes json parse json stringyfy test
    reducers: {                     // allInstrumentsMap["instru1"][65] gives back the mapped key ie "A"
                                    // allInstrumentsMap["instru2"] = {65: "C", 66: "D"} so maybe pass in instrument name and map as object
      changeCurrentInstrument: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.currentInstrument = action.payload;
      },
      updateAllInstrumentsMidiKeyMap: (state, action) => {
        state.allInstrumentsMidiKeyMap = action.payload;
      },   
    },
    extraReducers: {
        [fetchInitialState.pending]: (state, action) => {
          state.status = 'loading'
        },
        [fetchInitialState.fulfilled]: (state, action) => {
          
          // Add any fetched posts to the array
          state.currentInstrument = action.payload["currentInstrument"];
          state.allInstrumentsMidiKeyMap = action.payload["allInstrumentsMidiKeyMap"];
          state.status = 'succeeded'
        },
        [fetchInitialState.rejected]: (state, action) => {
          state.status = 'failed'
          state.error = action.payload
        },
      }});
  

export const updateCurrentInstrumentMidiKeyMap = singleInstrumentMidiKeyMap =>{
    return (dispatch, getState) => {
      const settings = getState().midiSettings;
      let changingAllInstrumentsMidiKeyMap = settings.allInstrumentsMidiKeyMap;
      changingAllInstrumentsMidiKeyMap[settings.currentInstrument] = singleInstrumentMidiKeyMap;    

      dispatch(updateAllInstrumentsMidiKeyMap(changingAllInstrumentsMidiKeyMap));    
    }
  }
  
  export const {changeCurrentInstrument, updateAllInstrumentsMidiKeyMap} = midiSettingsSlice.actions;
  export const selectCurrentInstrumentMidiKeyMap = state => state.notesPlaying;
 
  export default midiSettingsSlice.reducer;

