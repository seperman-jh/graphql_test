import {basic_user, getBasicUserInfo_by_Seq} from "./db";

//resolver 필드셋
const resolvers = {
    Query:{
        basic_user      : () => basic_user,
        basic_person    : (_,{seq}) => getBasicUserInfo_by_Seq(seq)
    }
};

export default resolvers;