/* eslint-env jest */
import React from "react";
import {
    mount
} from "enzyme";
import { createStore } from "redux";
import { Provider } from "react-redux";
import mainReducer from "../../reducers/index";
import ArticleWithMedia from "../../ui/ArticleWithMedia.jsx";
import HomeSearchForm from "../../ui/HomeSearchForm.jsx";

import Home from "../../ui/Home.jsx";

describe("ui <Home />", () => {
    global.localStorage = {
        getItem: jest.fn()
    };
    const store = createStore(mainReducer);

    it("should render with main items", () => {
        const wrapper = mount(
            <Provider store={store}>
                <Home />
            </Provider>
        );
        expect(wrapper.find(ArticleWithMedia).length).toBe(1);
        expect(wrapper.find(HomeSearchForm).length).toBe(1);
    });
});