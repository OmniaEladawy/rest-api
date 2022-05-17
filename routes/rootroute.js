const express = require('express');

const rootrouter = express.Router();


rootrouter.get('/', (req, res) => {
    res.json([{
        "description": "get all articles url",
        "links": [
          {
            "href": "/api/getArticles",
            "rel": "articles",
            "type": "GET"
          }
        ]
    },
    {
        "description": "get specific article url",
        "links": [
          {
            "href": "/api/getArticle/:id",
            "rel": "articles",
            "type": "GET"
          }
        ]
    },
    {
        "description": "add new article url",
        "links": [
          {
            "href": "/api/article",
            "rel": "articles",
            "type": "POST"
          }
        ]
    },
    {
        "description": "Update specific article",
        "links": [
          {
            "href": "/api/update/:id",
            "rel": "articles",
            "type": "PATCH"
          }
        ]
    },
    {
        "description": "Delete specific article",
        "links": [
          {
            "href": "/api/delete/:id",
            "rel": "articles",
            "type": "DELETE"
          }
        ]
    },
    {
        "description": "Get all comments of specific article",
        "links": [
          {
            "href": "/api/article/:id/comments",
            "rel": "articles,comments",
            "type": "GET"
          }
        ]
    },
    {
        "description": "Add comment to specific article",
        "links": [
          {
            "href": "/api/article/:id/addComment",
            "rel": "comments",
            "type": "POST"
          }
        ]
    },
    {
        "description": "Update specific comment",
        "links": [
          {
            "href": "/api/comment/:id/:comment",
            "rel": "comments",
            "type": "PATCH"
          }
        ]
    },
    {
        "description": "Delete specific comment",
        "links": [
          {
            "href": "/api/comment/:id/:comment",
            "rel": "comments",
            "type": "DELETE"
          }
        ]
    },
    {
        "description": "Get all users url",
        "links": [
          {
            "href": "/api/getUsers",
            "rel": "users",
            "type": "GET"
          }
        ]
    },
    {
        "description": "get specific user url",
        "links": [
          {
            "href": "/api/getUser/:id",
            "rel": "users",
            "type": "GET"
          }
        ]
    },
    {
        "description": "add new user url",
        "links": [
          {
            "href": "/api/user",
            "rel": "users",
            "type": "POST"
          }
        ]
    },
    {
        "description": "Update specific user",
        "links": [
          {
            "href": "/api/updateUser/:id",
            "rel": "users",
            "type": "PATCH"
          }
        ]
    },
    {
        "description": "Delete specific user",
        "links": [
          {
            "href": "/api/deleteUser/:id",
            "rel": "users",
            "type": "DELETE"
          }
        ]
    },
    {
        "description": "suspend specific user",
        "links": [
          {
            "href": "/api/user/suspend/:id",
            "rel": "users",
            "type": "POST"
          }
        ]
    }
]);
  });
  
  module.exports = rootrouter;