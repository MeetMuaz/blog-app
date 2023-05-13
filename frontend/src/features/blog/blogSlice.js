import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import blogApi from '../../common/api/blogApi';

export const fetchAsyncAllBlogs = createAsyncThunk(
    'blogs/fetchAsyncAllBlogs',
    async () => {
        const response = await blogApi.get(
            `read-all-blog`
        );
        return response.data
    }
);

export const fetchAsyncSingleBlog = createAsyncThunk(
    'blogs/fetchAsyncSingleBlog',
    async (id) => {
        const response = await blogApi.get(
            `read-one-blog/${id}`
        );
        return response.data
    }
);

const initialState = {
    allBlogs: {},
    singleBlog: {},
}

const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers:{

    },
    extraReducers: {
        [fetchAsyncAllBlogs.pending]: () => {
            console.log('Fetched Pending!');
        },
        [fetchAsyncAllBlogs.fulfilled]: (state, { payload }) => {
            console.log('Fetched Successfull!');
            return { ...state, allBlogs: payload };
        },
        [fetchAsyncAllBlogs.rejected]: () => {
            console.log('Fetched Rejected!');
        },
        [fetchAsyncSingleBlog.pending]: () => {
            console.log('Fetched Pending!');
        },
        [fetchAsyncSingleBlog.fulfilled]: (state, { payload }) => {
            console.log('Fetched Successfull!');
            return { ...state, singleBlog: payload };
        },
        [fetchAsyncSingleBlog.rejected]: () => {
            console.log('Fetched Rejected!');
        },
    },
});

export const getAllBlogs = (state) => state.blogs.allBlogs;
export const getSingleBlog = (state) => state.blogs.singleBlog;
export default blogSlice.reducer;
