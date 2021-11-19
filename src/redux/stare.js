import {rerenderEntiretree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Привет всем', likesCount: 12},
            {id: 2, message: 'Здарова', likesCount: 6},
            {id: 3, message: 'Нормально', likesCount: 18},
            {id: 4, message: 'Работаем', likesCount: 2}
        ],
    },
    dialogsPage: {
        dialogs : [
            {id: 1, name: 'Misha'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Grisha'},
            {id: 4, name: 'Dima'}
        ],
        messages : [
            {id: 1, message: 'Здарова'},
            {id: 2, message: 'Что делаешь?'},
            {id: 3, message: 'Работаю'}
        ]
    },
    sidebar: {}
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntiretree(state);
};

export default state;
