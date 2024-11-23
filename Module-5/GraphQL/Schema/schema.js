import graphql, { GraphQLSchema } from "graphql";
import axios from "axios"
import _ from "lodash"
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;

const users = [
    {
        id: "1",
        firstName: "Bala",
        age: 20
    },
    {
        id: "2",
        firstName: "Farhana",
        age: 22
    },
    {
        id: "3",
        firstName: "Manjunath",
        age: 25
    },
    {
        id: "4",
        firstName: "Jerry",
        age: 28
    },
    {
        id: "5",
        firstName: "Rakesh",
        age: 29
    }
]

//create user object

const userType = new GraphQLObjectType({
    name: "user",
    fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt }
    }
})

//define Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: userType,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args) {
                return axios.get(`http://localhost:9000/users/${args.id}`)
                    .then((resp) => resp.data)
            }
        }
    }
})


//addUser => insert & update 

const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addNewUser: {
            type: userType,
            args: {
                firstName: { type: GraphQLString },
                age: { type: GraphQLInt }
            },
            resolve(parentValue, args) {
                const { firstName, age } = args;
                return axios.post(`http://localhost:9000/users`, { firstName, age })
                    .then((resp) => resp.data)
                    .catch(error => {
                        throw new Error(error)
                    })
            }
        }
    }
})


const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: mutation
})



export { schema }