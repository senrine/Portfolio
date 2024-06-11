import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface WorkItem {
  name: string;
  description: string;
  technologies: Array<string>;
  longDescription: string;
  image: string;
  lien: string;
}

interface WorkState {
  data: WorkItem[];
  loading: boolean;
  error: string | null;
}

const initialState: WorkState = { data: [], loading: false, error: null };

export const fetchWorks = createAsyncThunk<
  WorkItem[],
  { lang: string },
  { rejectValue: string }
>("works/fetchWorks", async ({ lang }, { rejectWithValue }) => {
  try {
    const response = await fetch(`/data/works${lang}.json`);
    const data = await response.json();
    return data.works;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

export const works = createSlice({
  name: "works",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchWorks.fulfilled,
        (state, action: PayloadAction<WorkItem[]>) => {
          state.loading = false;
          state.error = null;
          state.data = action.payload;
        }
      );
  },
});
export default works.reducer;
