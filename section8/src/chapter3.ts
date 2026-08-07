/**
 * 맵드 타입
 */

interface User {
    id: number;
    name: string;
    age: number;
}

type PartialUser = {
    [key in 'id' | 'name' | 'age' ]?: User[key];
};

type BooleanUser = {
    [key in 'id' | 'name' | 'age' ]: boolean;
};

type ReadonlyUser = {
    readonly [key in keyof User]: User[key];
}

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser {
    // ...기능
    return {
        id: 1,
        name: "임지유",
        age: 19,
    };
}

const user = fetchUser();
// user.id = 1;

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: User) {
    // ...수정하는 기능
}

// updateUser({
//     id: 1,
//     name: "임지유",
//     age: 19,
// });