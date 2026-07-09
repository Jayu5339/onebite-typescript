// 타입 별칭
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
};

let user: User = {
    id: 1,
    name: "임지유",
    nickname: "jiyu",
    birth: "2008.01.14",
    bio: "안녕하세요",
    location: "서울시",
};

let user2: User = {
    id: 2,
    name: "홍길동",
    nickname: "jiyu",
    birth: "2008.01.14",
    bio: "안녕하세요",
    location: "서울시",
};

// 인덱스 스크니처
type CountryCodes = {
    [key: string]: string;
};

let countryCodes: CountryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
};

type CountryNumberCodes = {
    [key: string]: number;
    Korea: number;
};

let countryNumberAndStringCodes: CountryNumberCodes = {
    Korea: 410,
};