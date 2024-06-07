import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
      .addCase(fetchWorks.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(fetchWorks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch.";
      });
  },
});

export const fetchWorks = createAsyncThunk("works/fetchWorks", async () => {
  const response = await fetch("/data/works.json");
  const data = await response.json();
  return data.works;
});

export default works.reducer;
