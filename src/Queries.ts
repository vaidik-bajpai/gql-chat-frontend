import { gql } from "@apollo/client";

export const CHATROOMS_QUERY = gql`
    query {
        chatRooms {
          id
          name
        }
    }
`

export const GET_MESSAGES = gql`
  query GetMessages($chatRoomID: ID!) {
    messages(chatRoomID: $chatRoomID) {
      id
      content
      sender {
        id
        firstname
      }
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation SignupUser($firstname: String!, $lastname: String!, $email: String!, $password: String!) {
    signup(input: {
      firstname: $firstname,
      lastname: $lastname,
      email: $email,
      password: $password,
    }) {
      id
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(input: {
      email: $email,
      password: $password
    })
  }
`

export const MESSAGE_POSTED_SUBSCRIPTION = gql`
  subscription onMessagePosted($chatRoomID: ID!) {
    messagePosted(chatRoomID: $chatRoomID) {
      id
      content
      sender {
        id
        firstname
      }
    }
  }
`;

export const POST_MESSAGE = gql`
    mutation postMessage($chatRoomID: Int!, $content: String!) {
        postMessage(chatRoomID: $chatRoomID, content: $content) {
          id
          content
          sender {
            id
            firstname
          }
        }
    }
`