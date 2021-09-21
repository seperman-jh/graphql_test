import {basic_user, getBasicUserInfo_by_Seq} from "./db";

const resolvers = {
    Query:{
        basic_user      : () => basic_user,
        basic_person    : () => getBasicUserInfo_by_Seq()
    }
};

export default resolvers;