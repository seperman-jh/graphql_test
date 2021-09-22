import {GraphQLServer} from "graphql-yoga"; // 기본 graphql 템플릿 가져오기
import resolvers from "./graphql/resolvers" // resolver 가져오기

//graphql 서버 선언
const server = new GraphQLServer({
    typeDefs : "graphql/schema.graphql", // 스키마 지정
    resolvers // resolver 지정
});

//서버 시작
server.start(()=>console.log("launched"));