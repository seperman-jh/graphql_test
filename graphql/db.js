//샘플 DB값
export const basic_user = [
    {
        seq: 0,
        user_id: "Nicolas",
        name : "a",
        age: 18,
        gender: "female"
    },
    {
        seq: 1,
        user_id: "Jisu",
        name : "b",
        age: 18,
        gender: "female"
    },
    {
        seq: 1,
        user_id: "Japan Guy",
        name : "c",
        age: 18,
        gender: "male"
    },
    {
        seq: 3,
        user_id: "Daal",
        name : "d",
        age: 18,
        gender: "male"
    },
    {
        seq: 4,
        user_id: "JD",
        name : "e",
        age: 18,
        gender: "male"
    },
    {
        seq: 5,
        user_id: "moondaddi",
        name : "f",
        age: 18,
        gender: "male"
    },
    {
        seq: 6,
        user_id: "flynn",
        name : "g",
        age: 18,
        gender: "male"
    }
];

//seq 조건 함수 (seq값과 일치하는 array return)
export const getBasicUserInfo_by_Seq = seq => {
    const FilteredData = basic_user.filter(user => user.seq === seq);
    return FilteredData;
};