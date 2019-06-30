import { put, takeEvery } from 'redux-saga/effects';
import GetAllItemsAPI from './../fetchAPI/GetAllItemsAPI';
import PatchItemAPI from './../fetchAPI/PatchItemAPI';
import PostItemAPI from '../fetchAPI/PostItemAPI';
import * as type from './../constants';

function* getAllItems() {  
    try {
        const res1 = yield GetAllItemsAPI();
        yield put({
            type: type.GET_ALL_ITEMS_SUCSESS, 
            payload: res1
        })


    } catch (error) {
        yield put({
            type: type.GET_ALL_ITEMS_RFAILURE, 
            payload: {
                errorMessage: error.Message
            }
        })
    }

}

function* patchItem(param) {  
    try {
        const res1 = yield PatchItemAPI(param.payload);
        yield put({
            type: type.PATCH_ITEM_SUCSESS, 
            payload: res1
        })
        yield put({
            type: type.GET_ALL_ITEMS_REQUEST, 
            payload: res1
        })


    } catch (error) {
        yield put({
            type: type.PATCH_ITEM_RFAILURE, 
            payload: {
                errorMessage: error.Message
            }
        })
    }

}

function* postItem(param) {  
    try {
        const res1 = yield PostItemAPI(param.payload);
        yield put({
            type: type.POST_ITEM_SUCSESS, 
            payload: res1
        })
        yield put({
            type: type.GET_ALL_ITEMS_REQUEST, 
            payload: res1
        })


    } catch (error) {
        yield put({
            type: type.POST_ITEM_RFAILURE, 
            payload: {
                errorMessage: error.Message
            }
        })
    }

}



export const IteamSaga = [
    takeEvery(type.GET_ALL_ITEMS_REQUEST, getAllItems),
    takeEvery(type.PATCH_ITEM_REQUEST, patchItem),
    takeEvery(type.POST_ITEM_REQUEST, postItem)

];   