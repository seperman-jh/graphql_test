const user_result = {
    user_id         : "jhlee",
    name            : "Jonghwa Lee",
    email           : "seperman.jh@gmail.com",
    lastlogin_date  : "2021-09-01 09:00:00",
    age             : "34",
    gender          : "male"
};


const resolvers = {
    Query:{
        user: () => user_result
    }
};





export default resolvers;