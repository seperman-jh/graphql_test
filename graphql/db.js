export const basic_user = [
    {
        seq: "0",
        user_id: "Nicolas",
        name : "a",
        age: 18,
        gender: "female"
    },
    {
        seq: "1",
        user_id: "Jisu",
        name : "b",
        age: 18,
        gender: "female"
    },
    {
        seq: "2",
        user_id: "Japan Guy",
        name : "c",
        age: 18,
        gender: "male"
    },
    {
        seq: "3",
        user_id: "Daal",
        name : "d",
        age: 18,
        gender: "male"
    },
    {
        seq: "4",
        user_id: "JD",
        name : "e",
        age: 18,
        gender: "male"
    },
    {
        seq: "5",
        user_id: "moondaddi",
        name : "f",
        age: 18,
        gender: "male"
    },
    {
        seq: "6",
        user_id: "flynn",
        name : "g",
        age: 18,
        gender: "male"
    }
];


export const getBasicUserInfo_by_Seq = seq => {
    const FilteredData = basic_user.filter(basic_user => basic_user.seq === seq)
    return FilteredData[0];
};