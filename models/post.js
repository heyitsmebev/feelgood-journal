const postsdb = [
    {id: 125223, date: '8/7/2009', entry: 'This is an entry'},
    {id: 127904, date: '1/17/2022', entry: 'This is an entry'},
    {id: 139608, date: '6/12/2022', entry: 'This is an entry'}
  ];

const userdb = [
  {id: 124223, username: 'Feed', password: 'password', email: 'email@gmail.com', firstname: 'Firstname', lastname: 'Lastname', entryId: 'Lastname'},
  {id: 124904, username: 'Learn', password: 'password', email: 'email@gmail.com', firstname: 'Firstname', lastname: 'Lastname', entryId: 'Lastname'},
  {id: 134608, username: 'Buy', password: 'password', email: 'email@gmail.com', firstname: 'Firstname', lastname: 'Lastname', entryId: 'Lastname'}
];
  

  function getAll() {
    return postsdb;
  }

  function getOne(id) {
    // URL params are strings - convert to a number
    // Use the Array.prototype.find iterator method
    return postsdb.find(post => post.id === parseInt(id));
  }

  function create(post) {
    //Add the id
    post.id = Date.now() % 1000000;
    post.date = Date.now();
    postsdb.push(post);

  }

  function changeOne(body, id) {
    let changeObject = postsdb.find(post => post.id === parseInt(id));
    changeObject.entry = body.cash
  }

  module.exports = {
    getAll,
    getOne,
    create,
    changeOne
  };