# Blog API
This is an api for a blog

---

## Requirements
1. Users should have a first_name, last_name, email, password, (you can add other attributes you want to store about the user)
2. A user should be able to sign up and sign in into the blog app
3. Use JWT as authentication strategy and expire the token after 1 hour
4. A blog can be in two states; draft and published
5. Logged in and not logged in users should be able to get a list of published blogs created
6. Logged in and not logged in users should be able to to get a published blog
7. Logged in users should be able to create a blog.
8. When a blog is created, it is in draft state
9. The owner of the blog should be able to update the state of the blog to published
 10. The owner of a blog should be able to edit the blog in draft or published state
 11. The owner of the blog should be able to delete the blog in draft or published state
12. The owner of the blog should be able to get a list of their blogs. 
13. The endpoint should be paginated
14. It should be filterable by state
15. Blogs created should have title, description, tags, author, timestamp, state, read_count, reading_time and body.
16. The list of blogs endpoint that can be accessed by both logged in and not logged in users should be paginated, 
default it to 20 blogs per page. 
17. It should also be searchable by author, title and tags.
18. It should also be orderable by read_count, reading_time and timestamp
19. When a single blog is requested, the api should return the user information(the author) with the blog. The read_count of the blog too should be updated by 1
20. Come up with any algorithm for calculating the reading_time of the blog.
21. Write tests for all endpoints

---
## Setup
- Install NodeJS, mongodb
- pull this repo
- update env with example.env
- run `npm init

---
## Base URL
-https://jerrycletes-blogapi.cyclic.app

## Models
---

### User
| field  |  data_type | constraints  |
|---|---|---|
|  first_name |  string |  required |
|  last_name |  string |  required |
|  Email | string  |  required and unique|
| |  password |   string |  required  |

### Articles
| field  |  data_type | constraints  |
|---|---|---|
|  title |  string |  required and unique |
|  description |  string |  required |
|  tags | number  |  required,default:1|
|  author  |  string|  required  |
|  timestamp    | array  |  required |
|  state |   string |  optional  |
|  body |  number |  required |
|  reading time |  number |  required |
|  read_count |  number |  required  |
